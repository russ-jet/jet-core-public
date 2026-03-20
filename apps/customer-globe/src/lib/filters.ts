import regionMeta from "../data/admin1-region-meta.json";
import type {
  CountryCluster,
  MachineTypeCounts,
  PublicGlobeDataset,
  SearchHighlights,
  SearchSuggestion,
  VisibleCity,
  VisibleCountry,
  VisibleRegion,
} from "../types";

interface RegionMetaRecord {
  country: string;
  state: string;
  postal: string;
  iso3166_2: string;
  typeEn: string;
}

const REGION_META = regionMeta as RegionMetaRecord[];

function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeSearch(value: string): string {
  return normalize(value);
}

export function regionIdFromFields(country: string, state: string): string {
  return `${country}::${state}`;
}

function normalizeTokens(values: string[]) {
  return values
    .map((value) => normalize(value))
    .filter((value, index, array) => value.length > 0 && array.indexOf(value) === index);
}

function getRegionExtraTokens(region: RegionMetaRecord) {
  if (region.country === "Puerto Rico" && region.state === "Puerto Rico") {
    return ["PR"];
  }

  return [];
}

const REGION_SEARCH_TOKEN_MAP = new Map(
  REGION_META.map((region) => [
    regionIdFromFields(region.country, region.state),
    normalizeTokens([
      region.postal,
      region.iso3166_2,
      region.iso3166_2.split("-").pop() || "",
      ...getRegionExtraTokens(region),
    ]),
  ]),
);
const KNOWN_REGION_SEARCH_TOKENS = new Set(
  [...REGION_SEARCH_TOKEN_MAP.values()].flatMap((tokens) => tokens),
);

function getRegionSearchTokens(country: string, state: string) {
  return REGION_SEARCH_TOKEN_MAP.get(regionIdFromFields(country, state)) ?? [];
}

function kindPriority(kind: SearchSuggestion["kind"]) {
  switch (kind) {
    case "country":
      return 3;
    case "state":
      return 2;
    case "city":
      return 1;
    default:
      return 0;
  }
}

function scoreSuggestion(suggestion: SearchSuggestion, search: string, tokens: string[]) {
  const normalizedSearch = normalize(search);
  const normalizedLabel = normalize(suggestion.label);
  const normalizedValue = normalize(suggestion.value);
  const normalizedHint = normalize(suggestion.hint);

  let score = 0;
  let matched = false;

  if (tokens.includes(normalizedSearch)) {
    score += 500;
    matched = true;
  }
  if (normalizedLabel === normalizedSearch || normalizedValue === normalizedSearch) {
    score += 450;
    matched = true;
  }
  if (normalizedLabel.startsWith(normalizedSearch)) {
    score += 300;
    matched = true;
  }
  if (normalizedValue.startsWith(normalizedSearch)) {
    score += 240;
    matched = true;
  }
  if (normalizedLabel.includes(normalizedSearch)) {
    score += 180;
    matched = true;
  }
  if (normalizedValue.includes(normalizedSearch)) {
    score += 140;
    matched = true;
  }
  if (normalizedHint.includes(normalizedSearch)) {
    score += 80;
    matched = true;
  }

  return matched ? score + kindPriority(suggestion.kind) * 10 : 0;
}

function buildSuggestionPool(dataset: PublicGlobeDataset): Array<{
  suggestion: SearchSuggestion;
  tokens: string[];
}> {
  const suggestions = new Map<string, { suggestion: SearchSuggestion; tokens: string[] }>();

  dataset.countries.forEach((country) => {
    const suggestion: SearchSuggestion = {
      id: `country:${country.country}`,
      kind: "country",
      label: country.country,
      value: country.country,
      hint: "Country",
      country: country.country,
    };
    suggestions.set(suggestion.id, {
      suggestion,
      tokens: [normalize(country.country)],
    });
  });

  dataset.cities.forEach((city) => {
    const regionTokens = getRegionSearchTokens(city.country, city.state);
    const stateId = `state:${regionIdFromFields(city.country, city.state)}`;

    if (!suggestions.has(stateId)) {
      const stateHintParts = ["State or province", city.country];
      if (regionTokens.length > 0) {
        stateHintParts.push(regionTokens.join(" · ").toUpperCase());
      }
      suggestions.set(stateId, {
        suggestion: {
          id: stateId,
          kind: "state",
          label: city.state,
          value: `${city.state}, ${city.country}`,
          hint: stateHintParts.join(" · "),
          country: city.country,
          state: city.state,
        },
        tokens: [
          normalize(city.state),
          normalize(city.country),
          normalize(`${city.state} ${city.country}`),
          ...regionTokens,
        ],
      });
    }

    const cityId = `city:${city.id}`;
    if (!suggestions.has(cityId)) {
      suggestions.set(cityId, {
        suggestion: {
          id: cityId,
          kind: "city",
          label: city.city,
          value: `${city.city}, ${city.state}, ${city.country}`,
          hint: `${city.state}, ${city.country}`,
          country: city.country,
          state: city.state,
          cityId: city.id,
        },
        tokens: [
          normalize(city.city),
          normalize(city.state),
          normalize(city.country),
          normalize(`${city.city} ${city.state}`),
          normalize(`${city.city} ${city.state} ${city.country}`),
          ...regionTokens,
        ],
      });
    }
  });

  return [...suggestions.values()];
}

export function deriveSearchSuggestions(
  dataset: PublicGlobeDataset,
  search: string,
  limit = 8,
): SearchSuggestion[] {
  const normalizedSearch = normalize(search);

  if (!normalizedSearch) {
    return [];
  }

  return buildSuggestionPool(dataset)
    .map(({ suggestion, tokens }) => ({
      suggestion,
      score: scoreSuggestion(suggestion, normalizedSearch, tokens),
    }))
    .filter(({ score }) => score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        kindPriority(right.suggestion.kind) - kindPriority(left.suggestion.kind) ||
        left.suggestion.label.localeCompare(right.suggestion.label) ||
        left.suggestion.hint.localeCompare(right.suggestion.hint),
    )
    .slice(0, limit)
    .map(({ suggestion }) => suggestion);
}

function matchesSearch(haystack: string, search: string, searchTokens: string[] = []): boolean {
  const normalizedSearch = normalize(search);

  if (!normalizedSearch) {
    return true;
  }

  if (KNOWN_REGION_SEARCH_TOKENS.has(normalizedSearch)) {
    return searchTokens.includes(normalizedSearch);
  }

  return haystack.includes(normalizedSearch);
}

export function countVisibleInstallations(
  machineTypeCounts: MachineTypeCounts,
  selectedMachineTypes: string[],
  fallbackTotal: number,
): number {
  if (selectedMachineTypes.length === 0) {
    return fallbackTotal;
  }
  return selectedMachineTypes.reduce(
    (total, machineType) => total + (machineTypeCounts[machineType] ?? 0),
    0,
  );
}

export function cityMatchesSearch(city: VisibleCity, search: string): boolean {
  if (!search) {
    return true;
  }
  const regionSearchTokens = getRegionSearchTokens(city.country, city.state);
  const haystack = [city.city, city.state, city.country, city.searchText || "", ...regionSearchTokens]
    .map(normalize)
    .join(" ");
  return matchesSearch(haystack, search, regionSearchTokens);
}

export function countryMatchesSearch(country: CountryCluster, search: string): boolean {
  if (!search) {
    return true;
  }
  return normalize(country.country).includes(normalize(search));
}

function regionMatchesSearch(region: VisibleRegion, search: string): boolean {
  if (!search) {
    return false;
  }

  const regionSearchTokens = getRegionSearchTokens(region.country, region.state);
  const haystack = [region.state, region.country, `${region.state}, ${region.country}`, `${region.state} ${region.country}`, ...regionSearchTokens]
    .map(normalize)
    .join(" ");

  return matchesSearch(haystack, search, regionSearchTokens);
}

export function deriveVisibleRegions(cities: VisibleCity[]): VisibleRegion[] {
  const groupedRegions = cities.reduce<Map<string, VisibleRegion>>((accumulator, city) => {
    const id = regionIdFromFields(city.country, city.state);
    const existing = accumulator.get(id);

    if (existing) {
      const nextInstallationCount = existing.visibleInstallationCount + city.visibleInstallationCount;
      const nextCityCount = existing.cityCount + 1;
      existing.visibleInstallationCount = nextInstallationCount;
      existing.cityCount = nextCityCount;
      existing.cityIds.push(city.id);
      existing.lat = existing.lat + (city.lat - existing.lat) / nextCityCount;
      existing.lon = existing.lon + (city.lon - existing.lon) / nextCityCount;
      return accumulator;
    }

    accumulator.set(id, {
      id,
      state: city.state,
      country: city.country,
      lat: city.lat,
      lon: city.lon,
      cityCount: 1,
      cityIds: [city.id],
      visibleInstallationCount: city.visibleInstallationCount,
    });

    return accumulator;
  }, new Map());

  return [...groupedRegions.values()].sort(
    (left, right) =>
      right.visibleInstallationCount - left.visibleInstallationCount ||
      left.country.localeCompare(right.country) ||
      left.state.localeCompare(right.state),
  );
}

export function deriveSearchHighlights(
  search: string,
  countries: VisibleCountry[],
  cities: VisibleCity[],
  regions: VisibleRegion[],
): SearchHighlights {
  const normalizedSearch = normalize(search);

  if (!normalizedSearch) {
    return {
      countryNames: [],
      regionIds: [],
      labels: [],
    };
  }

  const directCountryMatches = new Set(
    countries.filter((country) => countryMatchesSearch(country, normalizedSearch)).map((country) => country.country),
  );
  const directRegionMatches = regions.filter((region) => regionMatchesSearch(region, normalizedSearch));
  const fallbackRegionMatches =
    directCountryMatches.size === 0 && directRegionMatches.length === 0
      ? regions.filter((region) => region.cityIds.some((cityId) => cities.some((city) => city.id === cityId)))
      : [];

  const highlightedRegionIds = new Set(
    (directRegionMatches.length > 0 ? directRegionMatches : fallbackRegionMatches).map((region) => region.id),
  );
  const highlightedCountries = new Set<string>(directCountryMatches);

  for (const region of directRegionMatches.length > 0 ? directRegionMatches : fallbackRegionMatches) {
    highlightedCountries.add(region.country);
  }

  if (highlightedCountries.size === 0) {
    for (const city of cities) {
      highlightedCountries.add(city.country);
    }
  }

  const labels = [
    ...[...highlightedCountries].sort((left, right) => left.localeCompare(right)),
    ...regions
      .filter((region) => highlightedRegionIds.has(region.id))
      .map((region) => `${region.state}, ${region.country}`),
  ];

  return {
    countryNames: [...highlightedCountries],
    regionIds: [...highlightedRegionIds],
    labels,
  };
}

export function deriveVisibleView(
  dataset: PublicGlobeDataset,
  search: string,
  selectedMachineTypes: string[],
  activeCountry: string | null,
) {
  const visibleCities = dataset.cities
    .map<VisibleCity>((city) => ({
      ...city,
      visibleInstallationCount: countVisibleInstallations(
        city.machineTypeCounts,
        selectedMachineTypes,
        city.installationCount,
      ),
    }))
    .filter((city) => city.visibleInstallationCount > 0)
    .filter((city) => cityMatchesSearch(city, search))
    .filter((city) => (activeCountry ? city.country === activeCountry : true));
  visibleCities.sort(
    (left, right) =>
      right.visibleInstallationCount - left.visibleInstallationCount ||
      left.country.localeCompare(right.country) ||
      left.state.localeCompare(right.state) ||
      left.city.localeCompare(right.city),
  );

  const visibleCityCounts = visibleCities.reduce<Record<string, number>>((accumulator, city) => {
    accumulator[city.country] = (accumulator[city.country] ?? 0) + 1;
    return accumulator;
  }, {});

  const visibleCountries = dataset.countries
    .map<VisibleCountry>((country) => ({
      ...country,
      cityCount: visibleCityCounts[country.country] ?? 0,
      visibleInstallationCount: countVisibleInstallations(
        country.machineTypeCounts,
        selectedMachineTypes,
        country.installationCount,
      ),
    }))
    .filter((country) => country.visibleInstallationCount > 0)
    .filter(
      (country) =>
        countryMatchesSearch(country, search) ||
        visibleCities.some((city) => city.country === country.country),
    )
    .sort((left, right) => right.visibleInstallationCount - left.visibleInstallationCount);

  return {
    visibleCountries,
    visibleCities,
  };
}
