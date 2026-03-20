import { describe, expect, test } from "vitest";
import type { PublicGlobeDataset, VisibleCity, VisibleCountry } from "../types";
import {
  deriveSearchHighlights,
  deriveSearchSuggestions,
  deriveVisibleRegions,
  regionIdFromFields,
} from "./filters";

const visibleCountries: VisibleCountry[] = [
  {
    country: "United States",
    lat: 39,
    lon: -98,
    installationCount: 6,
    cityCount: 2,
    machineTypeCounts: { "Jet-Fueler 3.0": 2, "Vape-Jet 4.0": 4 },
    visibleInstallationCount: 6,
  },
  {
    country: "Canada",
    lat: 56,
    lon: -106,
    installationCount: 2,
    cityCount: 1,
    machineTypeCounts: { "Jet-Fueler 3.0": 2, "Vape-Jet 4.0": 0 },
    visibleInstallationCount: 2,
  },
];

const visibleCities: VisibleCity[] = [
  {
    id: "portland-or-united-states",
    city: "Portland",
    state: "Oregon",
    country: "United States",
    lat: 45.5,
    lon: -122.6,
    installationCount: 3,
    machineTypeCounts: { "Jet-Fueler 3.0": 1, "Vape-Jet 4.0": 2 },
    visibleInstallationCount: 3,
    searchText: "Portland Oregon United States Crew 1 100 Burnside VJ0002",
  },
  {
    id: "los-angeles-ca-united-states",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    lat: 34.0,
    lon: -118.2,
    installationCount: 3,
    machineTypeCounts: { "Jet-Fueler 3.0": 1, "Vape-Jet 4.0": 2 },
    visibleInstallationCount: 3,
    searchText: "Los Angeles California United States Flight Deck 200 Sunset",
  },
  {
    id: "calgary-ab-canada",
    city: "Calgary",
    state: "Alberta",
    country: "Canada",
    lat: 51.0,
    lon: -114.0,
    installationCount: 2,
    machineTypeCounts: { "Jet-Fueler 3.0": 2, "Vape-Jet 4.0": 0 },
    visibleInstallationCount: 2,
    searchText: "Calgary Alberta Canada Northern Crew JF1000 JF1001 55 4th Street",
  },
];

const dataset: PublicGlobeDataset = {
  meta: {
    generatedAt: "2026-03-19T00:00:00Z",
    sourceArtifact: "test",
    disclosure: "city-level only",
    ctaUrl: "https://vape-jet.com/contact/",
    freshness: "manual",
  },
  totals: {
    machines: 8,
    cities: 3,
    countries: 2,
  },
  machineTypes: ["Jet-Fueler 3.0", "Vape-Jet 4.0"],
  countries: visibleCountries.map(({ visibleInstallationCount, ...country }) => country),
  cities: visibleCities.map(({ visibleInstallationCount, ...city }) => city),
};

describe("filters", () => {
  test("highlights a directly matched state and its parent country", () => {
    const visibleRegions = deriveVisibleRegions(visibleCities);
    const searchHighlights = deriveSearchHighlights(
      "California",
      visibleCountries,
      visibleCities.filter((city) => city.state === "California"),
      visibleRegions,
    );

    expect(searchHighlights.countryNames).toContain("United States");
    expect(searchHighlights.regionIds).toContain(regionIdFromFields("United States", "California"));
    expect(searchHighlights.labels).toContain("California, United States");
  });

  test("falls back to region highlighting when the search matches city or internal text", () => {
    const visibleRegions = deriveVisibleRegions(visibleCities);
    const searchHighlights = deriveSearchHighlights(
      "JF1000",
      visibleCountries,
      visibleCities.filter((city) => city.id === "calgary-ab-canada"),
      visibleRegions,
    );

    expect(searchHighlights.countryNames).toContain("Canada");
    expect(searchHighlights.regionIds).toContain(regionIdFromFields("Canada", "Alberta"));
    expect(searchHighlights.labels).toContain("Alberta, Canada");
  });

  test("matches official state or province abbreviation tokens exactly", () => {
    const visibleRegions = deriveVisibleRegions(visibleCities);
    const searchHighlights = deriveSearchHighlights(
      "AB",
      visibleCountries,
      visibleCities.filter((city) => city.id === "calgary-ab-canada"),
      visibleRegions,
    );

    expect(searchHighlights.countryNames).toContain("Canada");
    expect(searchHighlights.regionIds).toContain(regionIdFromFields("Canada", "Alberta"));
  });

  test("suggests countries, states, and cities while typing", () => {
    const suggestions = deriveSearchSuggestions(dataset, "Ca");

    expect(suggestions.some((suggestion) => suggestion.kind === "country" && suggestion.label === "Canada")).toBe(true);
    expect(
      suggestions.some(
        (suggestion) =>
          suggestion.kind === "state" &&
          suggestion.label === "California" &&
          suggestion.value === "California, United States",
      ),
    ).toBe(true);
    expect(
      suggestions.some(
        (suggestion) =>
          suggestion.kind === "city" &&
          suggestion.label === "Calgary" &&
          suggestion.value === "Calgary, Alberta, Canada" &&
          suggestion.cityId === "calgary-ab-canada",
      ),
    ).toBe(true);
  });

  test("suggests states from postal abbreviations", () => {
    const suggestions = deriveSearchSuggestions(dataset, "AB");

    expect(
      suggestions.some(
        (suggestion) =>
          suggestion.kind === "state" &&
          suggestion.label === "Alberta" &&
          suggestion.value === "Alberta, Canada",
      ),
    ).toBe(true);
  });
});
