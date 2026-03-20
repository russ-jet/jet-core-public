import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import App from "./App";
import type { PublicGlobeDataset } from "./types";

vi.mock("./components/GlobeScene", () => ({
  default: ({
    countries,
    cities,
    activeCountry,
    showDetailMarkers,
    onCountrySelect,
    onCitySelect,
  }: {
    countries: Array<{ country: string }>;
    cities: Array<{ city: string; id: string }>;
    activeCountry: string | null;
    showDetailMarkers: boolean;
    onCountrySelect: (country: string) => void;
    onCitySelect: (cityId: string) => void;
  }) => (
    <div>
      <div data-testid="globe-mode">{activeCountry || showDetailMarkers ? "detail" : "global"}</div>
      {activeCountry || showDetailMarkers
        ? cities.map((city) => (
            <button key={city.id} onClick={() => onCitySelect(city.id)} type="button">
              {city.city}
            </button>
          ))
        : countries.map((country) => (
            <button key={country.country} onClick={() => onCountrySelect(country.country)} type="button">
              {country.country}
            </button>
          ))}
    </div>
  ),
}));

const sampleData: PublicGlobeDataset = {
  meta: {
    generatedAt: "2026-03-18T00:00:00Z",
    sourceArtifact: "sample.csv",
    disclosure: "internal-street-level",
    ctaUrl: "https://vape-jet.com/contact/",
    freshness: "manual-refresh",
    audience: "internal",
  },
  totals: {
    machines: 8,
    cities: 3,
    countries: 2,
  },
  machineTypes: ["Jet-Fueler 3.0", "Vape-Jet 4.0"],
  countries: [
    {
      country: "United States",
      lat: 39,
      lon: -98,
      installationCount: 6,
      cityCount: 2,
      machineTypeCounts: { "Jet-Fueler 3.0": 2, "Vape-Jet 4.0": 4 },
    },
    {
      country: "Canada",
      lat: 56,
      lon: -106,
      installationCount: 2,
      cityCount: 1,
      machineTypeCounts: { "Jet-Fueler 3.0": 2, "Vape-Jet 4.0": 0 },
    },
  ],
  cities: [
    {
      id: "portland-or-united-states",
      city: "Portland",
      state: "Oregon",
      country: "United States",
      lat: 45.5,
      lon: -122.6,
      installationCount: 3,
      machineTypeCounts: { "Jet-Fueler 3.0": 1, "Vape-Jet 4.0": 2 },
      searchText: "Portland Oregon United States Crew 1 100 Burnside VJ0002",
      locations: [
        {
          id: "crew-1-portland",
          customerName: "Crew 1",
          street: "100 Burnside",
          zipCode: "97201",
          installationCount: 3,
          machineTypeCounts: { "Jet-Fueler 3.0": 1, "Vape-Jet 4.0": 2 },
          serialNumbers: ["JF0001", "VJ0002", "VJ0003"],
          machines: [],
        },
      ],
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
      searchText: "Calgary Alberta Canada Northern Crew JF1000 JF1001 55 4th Street",
      locations: [
        {
          id: "northern-crew-calgary",
          customerName: "Northern Crew",
          street: "55 4th Street",
          zipCode: "T2P",
          installationCount: 2,
          machineTypeCounts: { "Jet-Fueler 3.0": 2, "Vape-Jet 4.0": 0 },
          serialNumbers: ["JF1000", "JF1001"],
          machines: [],
        },
      ],
    },
  ],
};

describe("App", () => {
  test("filters locations, supports internal search fields, and keeps the Book a Demo CTA wired", async () => {
    const user = userEvent.setup();
    render(<App initialData={sampleData} />);

    expect(await screen.findByTestId("globe-mode")).toHaveTextContent("global");
    expect(screen.getAllByRole("link", { name: "Book a Demo" })[0]).toHaveAttribute(
      "href",
      "https://vape-jet.com/contact/",
    );
    expect(screen.getByPlaceholderText("City, state, country, customer, serial, or street")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Count View" })).toHaveClass("is-active");
    expect(screen.getByRole("button", { name: "Stacked View" })).not.toHaveClass("is-active");

    await user.type(screen.getByPlaceholderText("City, state, country, customer, serial, or street"), "JF1000");
    await waitFor(() => expect(screen.getByTestId("globe-mode")).toHaveTextContent("detail"));
    expect(screen.getByText("Calgary")).toBeInTheDocument();
    expect(screen.queryByText("Portland")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Jet-Fueler 3.0" }));
    await user.click(screen.getAllByRole("button", { name: "Calgary" })[0]);

    expect(screen.getByText("City spotlight")).toBeInTheDocument();
    expect(screen.getByText("Internal lookup")).toBeInTheDocument();
    expect(screen.getByText("Northern Crew")).toBeInTheDocument();
    expect(screen.getByText("55 4th Street · T2P")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Book a Demo" })[1]).toHaveAttribute(
      "href",
      "https://vape-jet.com/contact/",
    );
  });

  test("autocomplete suggestion selection executes the map focus flow", async () => {
    const user = userEvent.setup();
    render(<App initialData={sampleData} />);

    expect(await screen.findByTestId("globe-mode")).toHaveTextContent("global");

    const searchField = screen.getByPlaceholderText(
      "City, state, country, customer, serial, or street",
    );

    await user.type(searchField, "Calg");
    await user.click(screen.getByRole("option", { name: /Calgary/i }));

    expect(searchField).toHaveValue("Calgary, Alberta, Canada");
    expect(screen.getByTestId("globe-mode")).toHaveTextContent("detail");
    expect(screen.getByText("City spotlight")).toBeInTheDocument();
    expect(screen.getByText("Northern Crew")).toBeInTheDocument();
  });

  test("state suggestions filter the map to the matching region", async () => {
    const user = userEvent.setup();
    render(<App initialData={sampleData} />);

    expect(await screen.findByTestId("globe-mode")).toHaveTextContent("global");

    const searchField = screen.getByPlaceholderText(
      "City, state, country, customer, serial, or street",
    );

    await user.type(searchField, "Ore");
    const oregonSuggestion = screen
      .getAllByRole("option")
      .find((option) => option.textContent?.includes("State or province · United States"))!;
    await user.click(oregonSuggestion);

    expect(searchField).toHaveValue("Oregon, United States");
    expect(screen.getByTestId("globe-mode")).toHaveTextContent("detail");
    expect(screen.getByRole("button", { name: "Portland" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Los Angeles" })).not.toBeInTheDocument();
  });

  test("typed non-country search exits global mode and reveals city markers", async () => {
    const user = userEvent.setup();
    render(<App initialData={sampleData} />);

    const searchField = screen.getByPlaceholderText(
      "City, state, country, customer, serial, or street",
    );

    expect(await screen.findByTestId("globe-mode")).toHaveTextContent("global");

    await user.type(searchField, "Ore");

    await waitFor(() => expect(screen.getByTestId("globe-mode")).toHaveTextContent("detail"));
    expect(screen.getByRole("button", { name: "Portland" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "United States" })).not.toBeInTheDocument();
  });

  test("clearing a search-derived selection returns the globe to global mode", async () => {
    const user = userEvent.setup();
    render(<App initialData={sampleData} />);

    expect(await screen.findByTestId("globe-mode")).toHaveTextContent("global");

    const searchField = screen.getByPlaceholderText(
      "City, state, country, customer, serial, or street",
    );

    await user.type(searchField, "Ore");
    const oregonSuggestion = screen
      .getAllByRole("option")
      .find((option) => option.textContent?.includes("State or province · United States"))!;
    await user.click(oregonSuggestion);

    expect(screen.getByTestId("globe-mode")).toHaveTextContent("detail");
    expect(searchField).toHaveValue("Oregon, United States");

    await user.clear(searchField);

    await waitFor(() => expect(screen.getByTestId("globe-mode")).toHaveTextContent("global"));
    expect(screen.getByRole("button", { name: "United States" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Portland" })).not.toBeInTheDocument();
  });

  test("clearing search while a search-derived city popup is open resets the state focus after close", async () => {
    const user = userEvent.setup();
    render(<App initialData={sampleData} />);

    expect(await screen.findByTestId("globe-mode")).toHaveTextContent("global");

    const searchField = screen.getByPlaceholderText(
      "City, state, country, customer, serial, or street",
    );

    await user.type(searchField, "Ore");
    const oregonSuggestion = screen
      .getAllByRole("option")
      .find((option) => option.textContent?.includes("State or province · United States"))!;
    await user.click(oregonSuggestion);
    await user.click(screen.getByRole("button", { name: "Portland" }));

    expect(screen.getByText("City spotlight")).toBeInTheDocument();
    expect(screen.getByTestId("globe-mode")).toHaveTextContent("detail");

    await user.clear(searchField);

    expect(screen.getByText("City spotlight")).toBeInTheDocument();
    expect(screen.getByTestId("globe-mode")).toHaveTextContent("detail");

    await user.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => expect(screen.getByTestId("globe-mode")).toHaveTextContent("global"));
    expect(screen.getByRole("button", { name: "United States" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Portland" })).not.toBeInTheDocument();
  });

  test("stacked view uses the machine filter chips as the active color legend", async () => {
    const user = userEvent.setup();
    render(<App initialData={sampleData} />);

    expect(await screen.findByTestId("globe-mode")).toHaveTextContent("global");

    await user.click(screen.getByRole("button", { name: "Stacked View" }));

    const jetFuelerChip = screen.getByRole("button", { name: "Jet-Fueler 3.0" });
    const vapeJetChip = screen.getByRole("button", { name: "Vape-Jet 4.0" });

    expect(screen.getByRole("button", { name: "Stacked View" })).toHaveClass("is-active");
    expect(jetFuelerChip).toHaveClass("is-stack-active");
    expect(vapeJetChip).toHaveClass("is-stack-active");

    await user.click(jetFuelerChip);

    expect(jetFuelerChip).toHaveClass("is-stack-inactive");
    expect(vapeJetChip).toHaveClass("is-stack-active");
  });
});
