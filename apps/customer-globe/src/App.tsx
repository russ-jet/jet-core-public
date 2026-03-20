import {
  type CSSProperties,
  Suspense,
  lazy,
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";
import ConstellationField from "./components/ConstellationField";
import ControlPanel from "./components/ControlPanel";
import DetailDrawer from "./components/DetailDrawer";
import {
  deriveSearchHighlights,
  regionIdFromFields,
  deriveVisibleRegions,
  deriveVisibleView,
} from "./lib/filters";
import type { PublicGlobeDataset, SearchSuggestion } from "./types";

const BASE_URL = import.meta.env.BASE_URL || "/";
const joinBasePath = (path: string) =>
  `${BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`}${path.replace(/^\/+/, "")}`;
const DATA_PATH = joinBasePath("data/public-globe.v1.json");
const INTERNAL_DATA_PATH = joinBasePath("api/internal-globe.v1.json");
const GlobeScene = lazy(() => import("./components/GlobeScene"));

function useReducedMotion() {
  const getMotionPreference = () =>
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getMotionPreference);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

interface AppProps {
  initialData?: PublicGlobeDataset;
}

export default function App({ initialData }: AppProps) {
  const [data, setData] = useState<PublicGlobeDataset | null>(initialData ?? null);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMachineTypes, setSelectedMachineTypes] = useState<string[]>([]);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [focusedRegionId, setFocusedRegionId] = useState<string | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [hasSearchDrivenSelection, setHasSearchDrivenSelection] = useState(false);
  const [pendingSearchDrivenReset, setPendingSearchDrivenReset] = useState(false);
  const [displayMode, setDisplayMode] = useState<"stacked" | "totals">("totals");
  const [orbitLongitude, setOrbitLongitude] = useState(0);
  const machineTypeList = data?.machineTypes ?? [];
  const deferredSearch = useDeferredValue(searchQuery);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (initialData) {
      return;
    }
    let ignore = false;
    fetch(DATA_PATH)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Unable to load the public globe dataset.");
        }
        const payload = (await response.json()) as PublicGlobeDataset;
        if (!ignore) {
          setData(payload);
        }
        try {
          const internalResponse = await fetch(INTERNAL_DATA_PATH, {
            credentials: "include",
            headers: { Accept: "application/json" },
          });
          if (!internalResponse.ok) {
            return;
          }
          const contentType = internalResponse.headers.get("Content-Type") || "";
          if (!contentType.includes("application/json")) {
            return;
          }
          const internalPayload = (await internalResponse.json()) as PublicGlobeDataset;
          if (!ignore) {
            setData(internalPayload);
          }
        } catch {
          // Internal detail mode is optional and may not exist on the public host.
        }
      })
      .catch((loadError: Error) => {
        if (!ignore) {
          setError(loadError.message);
        }
      });
    return () => {
      ignore = true;
    };
  }, [initialData]);

  const visibleView = useMemo(() => {
    if (!data) {
      return null;
    }
    return deriveVisibleView(data, deferredSearch, selectedMachineTypes, activeCountry);
  }, [activeCountry, data, deferredSearch, selectedMachineTypes]);
  const visibleRegions = useMemo(
    () => (visibleView ? deriveVisibleRegions(visibleView.visibleCities) : []),
    [visibleView],
  );
  const searchHighlights = useMemo(
    () =>
      visibleView
        ? deriveSearchHighlights(
            deferredSearch,
            visibleView.visibleCountries,
            visibleView.visibleCities,
            visibleRegions,
          )
        : { countryNames: [], regionIds: [], labels: [] },
    [deferredSearch, visibleRegions, visibleView],
  );
  const hasSearchDrivenDetailMode = useMemo(
    () => deferredSearch.trim().length > 0 && searchHighlights.regionIds.length > 0,
    [deferredSearch, searchHighlights.regionIds.length],
  );
  const searchFocusTarget = useMemo(() => {
    if (!visibleView || !hasSearchDrivenDetailMode) {
      return null;
    }

    if (visibleView.visibleCities.length === 1) {
      const [city] = visibleView.visibleCities;
      return {
        lat: city.lat,
        lon: city.lon,
        altitude: 0.9,
      };
    }

    const highlightedRegion =
      visibleRegions.find((region) => searchHighlights.regionIds.includes(region.id)) ?? null;

    if (highlightedRegion) {
      return {
        lat: highlightedRegion.lat,
        lon: highlightedRegion.lon,
        altitude: 1.16,
      };
    }

    const topVisibleCity = visibleView.visibleCities[0] ?? null;
    if (topVisibleCity) {
      return {
        lat: topVisibleCity.lat,
        lon: topVisibleCity.lon,
        altitude: 1.02,
      };
    }

    return null;
  }, [hasSearchDrivenDetailMode, searchHighlights.regionIds, visibleRegions, visibleView]);

  useEffect(() => {
    if (!visibleView) {
      return;
    }
    if (selectedCityId && !visibleView.visibleCities.some((city) => city.id === selectedCityId)) {
      setSelectedCityId(null);
    }
    if (focusedRegionId && !visibleRegions.some((region) => region.id === focusedRegionId)) {
      setFocusedRegionId(null);
    }
    if (activeCountry && !visibleView.visibleCountries.some((country) => country.country === activeCountry)) {
      setActiveCountry(null);
    }
  }, [activeCountry, focusedRegionId, selectedCityId, visibleRegions, visibleView]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      if (pendingSearchDrivenReset) {
        setPendingSearchDrivenReset(false);
      }
      return;
    }

    if (!hasSearchDrivenSelection) {
      return;
    }

    if (selectedCityId) {
      setPendingSearchDrivenReset(true);
      return;
    }

    setActiveCountry(null);
    setFocusedRegionId(null);
    setSelectedCityId(null);
    setHasSearchDrivenSelection(false);
    setPendingSearchDrivenReset(false);
  }, [hasSearchDrivenSelection, pendingSearchDrivenReset, searchQuery, selectedCityId]);

  function handleSuggestionSelect(suggestion: SearchSuggestion) {
    startTransition(() => {
      setSearchQuery(suggestion.value);
      setHasSearchDrivenSelection(true);

      if (suggestion.kind === "country") {
        setActiveCountry(suggestion.country ?? suggestion.label);
        setFocusedRegionId(null);
        setSelectedCityId(null);
        return;
      }

      if (suggestion.kind === "state") {
        const country = suggestion.country ?? null;
        const state = suggestion.state ?? suggestion.label;
        setActiveCountry(country);
        setFocusedRegionId(country ? regionIdFromFields(country, state) : null);
        setSelectedCityId(null);
        return;
      }

      const city =
        (suggestion.cityId
          ? data?.cities.find((entry) => entry.id === suggestion.cityId)
          : null) ??
        data?.cities.find(
          (entry) =>
            entry.city === suggestion.label &&
            (!suggestion.state || entry.state === suggestion.state) &&
            (!suggestion.country || entry.country === suggestion.country),
        ) ??
        null;

      setActiveCountry(city?.country ?? suggestion.country ?? null);
      setFocusedRegionId(city ? regionIdFromFields(city.country, city.state) : null);
      setSelectedCityId(city?.id ?? suggestion.cityId ?? null);
    });
  }

  function handleToggleMachineType(machineType: string) {
    startTransition(() => {
      setFocusedRegionId(null);
      setSelectedCityId(null);
      setSelectedMachineTypes((current) => {
        if (displayMode === "stacked") {
          const baseSelection = current.length === 0 ? machineTypeList : current;
          const nextSelection = baseSelection.includes(machineType)
            ? baseSelection.filter((value) => value !== machineType)
            : machineTypeList.filter((value) => [...baseSelection, machineType].includes(value));

          return nextSelection.length === 0 ? baseSelection : nextSelection;
        }

        return current.includes(machineType)
          ? current.filter((value) => value !== machineType)
          : [...current, machineType];
      });
    });
  }

  function handleDisplayModeChange(value: "stacked" | "totals") {
    startTransition(() => {
      setDisplayMode(value);
      setSelectedMachineTypes((current) => {
        if (value === "stacked") {
          return current.length === 0 ? machineTypeList : current;
        }

        if (current.length === machineTypeList.length) {
          return [];
        }

        return current;
      });
    });
  }

  if (error) {
    return (
      <main className="app-shell">
        <section className="loading-state">
          <div className="eyebrow">Orbit Globe</div>
          <h1>Mission control lost the feed.</h1>
          <p>{error}</p>
          <a className="primary-cta" href="https://vape-jet.com/contact/" target="_blank" rel="noreferrer">
            Book a Demo
          </a>
        </section>
      </main>
    );
  }

  if (!data || !visibleView) {
    return (
      <main className="app-shell">
        <section className="loading-state">
          <div className="eyebrow">Orbit Globe</div>
          <h1>Booting mission control…</h1>
          <p>Loading the public fleet map and aligning the day-night terminator.</p>
        </section>
      </main>
    );
  }

  const selectedCity =
    visibleView.visibleCities.find((city) => city.id === selectedCityId) ?? null;
  const internalDetailEnabled =
    data.meta.audience === "internal" ||
    data.meta.disclosure.toLowerCase().includes("internal") ||
    data.cities.some((city) => Array.isArray(city.locations) && city.locations.length > 0);
  const orbitShift = ((((orbitLongitude % 360) + 360) % 360) - 180) / 180;

  return (
    <main
      className="app-shell"
      style={{ "--orbit-shift": orbitShift.toFixed(4) } as CSSProperties}
    >
      <div className="space-noise" aria-hidden="true" />
      <ConstellationField orbitLongitude={orbitLongitude} />
      <section className="experience-grid">
        <ControlPanel
          data={data}
          countries={visibleView.visibleCountries}
          cities={visibleView.visibleCities}
          machineTypes={data.machineTypes}
          selectedMachineTypes={selectedMachineTypes}
          searchQuery={searchQuery}
          activeCountry={activeCountry}
          displayMode={displayMode}
          internalDetailEnabled={internalDetailEnabled}
          searchHighlightLabels={searchHighlights.labels}
          searchHighlightedCountries={searchHighlights.countryNames}
          onSearchChange={(value) => setSearchQuery(value)}
          onSuggestionSelect={handleSuggestionSelect}
          onToggleMachineType={handleToggleMachineType}
          onCountrySelect={(country) => {
            startTransition(() => {
              setHasSearchDrivenSelection(false);
              setPendingSearchDrivenReset(false);
              setActiveCountry(country);
              setFocusedRegionId(null);
              setSelectedCityId(null);
            });
          }}
          onCitySelect={(cityId) => {
            startTransition(() => {
              const nextCity = visibleView.visibleCities.find((city) => city.id === cityId) ?? null;
              setHasSearchDrivenSelection(
                searchQuery.trim().length > 0 || hasSearchDrivenSelection || pendingSearchDrivenReset,
              );
              setPendingSearchDrivenReset(false);
              setSelectedCityId(cityId);
              setFocusedRegionId(
                nextCity ? regionIdFromFields(nextCity.country, nextCity.state) : null,
              );
              setActiveCountry(nextCity?.country ?? activeCountry);
            });
          }}
          onDisplayModeChange={handleDisplayModeChange}
        />

        <section className="globe-stage">
          <Suspense
            fallback={
              <div className="globe-loading">
                <div className="eyebrow">Aligning orbit</div>
                <p>Loading the interactive globe surface.</p>
              </div>
            }
          >
            <GlobeScene
              countries={visibleView.visibleCountries}
              cities={visibleView.visibleCities}
              activeCountry={activeCountry}
              focusedRegionId={focusedRegionId}
              selectedCityId={selectedCityId}
              searchQuery={deferredSearch}
              showDetailMarkers={hasSearchDrivenDetailMode}
              searchFocusTarget={searchFocusTarget}
              regions={visibleRegions}
              highlightedCountries={searchHighlights.countryNames}
              highlightedRegionIds={searchHighlights.regionIds}
              onCountrySelect={(country) =>
                startTransition(() => {
                  setHasSearchDrivenSelection(false);
                  setPendingSearchDrivenReset(false);
                  setActiveCountry(country);
                  setFocusedRegionId(null);
                  setSelectedCityId(null);
                })
              }
              onCitySelect={(cityId) =>
                startTransition(() => {
                  const nextCity = visibleView.visibleCities.find((city) => city.id === cityId) ?? null;
                  setHasSearchDrivenSelection(
                    searchQuery.trim().length > 0 || hasSearchDrivenSelection || pendingSearchDrivenReset,
                  );
                  setPendingSearchDrivenReset(false);
                  setSelectedCityId(cityId);
                  setFocusedRegionId(
                    nextCity ? regionIdFromFields(nextCity.country, nextCity.state) : null,
                  );
                  setActiveCountry(nextCity?.country ?? activeCountry);
                })
              }
              displayMode={displayMode}
              machineTypes={data.machineTypes}
              selectedMachineTypes={selectedMachineTypes}
              onOrbitChange={setOrbitLongitude}
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </section>
      </section>

      <DetailDrawer
        city={selectedCity}
        ctaUrl={data.meta.ctaUrl}
        machineTypes={data.machineTypes}
        onClose={() => {
          if (pendingSearchDrivenReset && searchQuery.trim().length === 0) {
            setSelectedCityId(null);
            setActiveCountry(null);
            setFocusedRegionId(null);
            setHasSearchDrivenSelection(false);
            setPendingSearchDrivenReset(false);
            return;
          }

          setSelectedCityId(null);
        }}
      />
    </main>
  );
}
