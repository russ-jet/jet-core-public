import {
  useEffect,
  useId,
  useMemo,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { deriveSearchSuggestions } from "../lib/filters";
import { machineTypeColor } from "../lib/machineTypeColors";
import catEmojiAsset from "../assets/vape-jet-cat.gif";
import type {
  PublicGlobeDataset,
  SearchSuggestion,
  VisibleCity,
  VisibleCountry,
} from "../types";

type DisplayMode = "stacked" | "totals";

interface ControlPanelProps {
  data: PublicGlobeDataset;
  countries: VisibleCountry[];
  cities: VisibleCity[];
  machineTypes: string[];
  selectedMachineTypes: string[];
  searchQuery: string;
  activeCountry: string | null;
  isGlobalViewActive: boolean;
  displayMode: DisplayMode;
  internalDetailEnabled: boolean;
  searchHighlightLabels: string[];
  searchHighlightedCountries: string[];
  onSearchChange: (value: string) => void;
  onSuggestionSelect: (suggestion: SearchSuggestion) => void;
  onToggleMachineType: (machineType: string) => void;
  onCountrySelect: (country: string | null) => void;
  onCitySelect: (cityId: string) => void;
  onDisplayModeChange: (value: DisplayMode) => void;
}

function formatCount(value: number, label: string): string {
  return `${value.toLocaleString()} ${label}`;
}

export default function ControlPanel({
  data,
  countries,
  cities,
  machineTypes,
  selectedMachineTypes,
  searchQuery,
  activeCountry,
  isGlobalViewActive,
  displayMode,
  internalDetailEnabled,
  searchHighlightLabels,
  searchHighlightedCountries,
  onSearchChange,
  onSuggestionSelect,
  onToggleMachineType,
  onCountrySelect,
  onCitySelect,
  onDisplayModeChange,
}: ControlPanelProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const cityList = activeCountry ? cities : cities.slice(0, 12);
  const searchPlaceholder = internalDetailEnabled
    ? "City, state, country, customer, serial, or street"
    : "Country, state, or city";
  const searchFieldId = useId();
  const suggestionListId = useId();
  const searchSuggestions = useMemo(
    () => deriveSearchSuggestions(data, searchQuery),
    [data, searchQuery],
  );
  const stackedMachineTypes =
    displayMode === "stacked" && selectedMachineTypes.length === 0
      ? machineTypes
      : selectedMachineTypes;
  const allSystemsSelected =
    selectedMachineTypes.length === 0 || selectedMachineTypes.length === machineTypes.length;
  const showSearchSuggestions =
    searchFocused && searchQuery.trim().length > 0 && searchSuggestions.length > 0;

  useEffect(() => {
    setActiveSuggestionIndex(0);
  }, [searchQuery, searchSuggestions.length]);

  function applySuggestion(suggestion: SearchSuggestion) {
    onSuggestionSelect(suggestion);
    setSearchFocused(false);
  }

  function handleSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!showSearchSuggestions) {
      if (event.key === "Escape") {
        setSearchFocused(false);
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveSuggestionIndex((current) => (current + 1) % searchSuggestions.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveSuggestionIndex((current) =>
        current === 0 ? searchSuggestions.length - 1 : current - 1,
      );
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const suggestion = searchSuggestions[activeSuggestionIndex];
      if (suggestion) {
        applySuggestion(suggestion);
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setSearchFocused(false);
    }
  }

  return (
    <aside className="control-panel">
      <div className="eyebrow">Vape-Jet C.A.T.S.</div>
      <h1>Cannabis Automation Tech Supremacy</h1>
      <p className="lede">
        Explore the global fleet of Vape-Jet C.A.T.S. and see where{" "}
        <img className="inline-cat-mark" src={catEmojiAsset} alt="Vape-Jet C.A.T.S." /> has already landed.
      </p>

      <div className="stats-ribbon" aria-label="Fleet summary">
        <article>
          <span>Machines</span>
          <strong>{data.totals.machines.toLocaleString()}</strong>
        </article>
        <article>
          <span>Cities</span>
          <strong>{data.totals.cities.toLocaleString()}</strong>
        </article>
        <article>
          <span>Countries</span>
          <strong>{data.totals.countries.toLocaleString()}</strong>
        </article>
      </div>

      <div className="action-row">
        <a className="primary-cta" href={data.meta.ctaUrl} target="_blank" rel="noreferrer">
          Book a Test Flight
        </a>
        <button
          className={isGlobalViewActive ? "ghost-cta is-active" : "ghost-cta"}
          type="button"
          onClick={() => onCountrySelect(null)}
        >
          Global View
        </button>
      </div>

      <div className="search-card">
        <label htmlFor={searchFieldId}>
          <span>{internalDetailEnabled ? "Search the fleet" : "Search the grid"}</span>
        </label>
        <input
          id={searchFieldId}
          type="search"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => window.setTimeout(() => setSearchFocused(false), 110)}
          onKeyDown={handleSearchKeyDown}
          aria-autocomplete="list"
          aria-controls={showSearchSuggestions ? suggestionListId : undefined}
          aria-expanded={showSearchSuggestions}
        />
        {showSearchSuggestions ? (
          <div className="search-suggestions" id={suggestionListId} role="listbox">
            {searchSuggestions.map((suggestion, index) => (
              <button
                key={suggestion.id}
                type="button"
                role="option"
                aria-selected={index === activeSuggestionIndex}
                className={index === activeSuggestionIndex ? "search-suggestion is-active" : "search-suggestion"}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => applySuggestion(suggestion)}
              >
                <span className="search-suggestion__topline">
                  <strong>{suggestion.label}</strong>
                  <small>{suggestion.kind}</small>
                </span>
                <span className="search-suggestion__meta">{suggestion.hint}</span>
              </button>
            ))}
          </div>
        ) : null}
        {searchQuery.trim() && searchHighlightLabels.length > 0 ? (
          <small className="search-highlight-note">
            Search highlight: {searchHighlightLabels.slice(0, 3).join(" · ")}
            {searchHighlightLabels.length > 3 ? ` +${searchHighlightLabels.length - 3} more` : ""}
          </small>
        ) : null}
      </div>

      <section className="filter-section" aria-labelledby="display-mode-title">
        <div className="section-heading">
          <h2 id="display-mode-title">Display mode</h2>
          <span>{displayMode === "stacked" ? "Stacked ratios live" : "Totals only"}</span>
        </div>
        <div className="display-toggle">
          <button
            type="button"
            className={displayMode === "totals" ? "chip is-active" : "chip"}
            onClick={() => onDisplayModeChange("totals")}
          >
            Count View
          </button>
          <button
            type="button"
            className={displayMode === "stacked" ? "chip is-active" : "chip"}
            onClick={() => onDisplayModeChange("stacked")}
          >
            Stacked View
          </button>
        </div>
      </section>

      <section className="filter-section" aria-labelledby="machine-filter-title">
        <div className="section-heading">
          <h2 id="machine-filter-title">Machine filter</h2>
          <span>{allSystemsSelected ? "All systems" : `${selectedMachineTypes.length} live`}</span>
        </div>
        <div className="chip-grid">
          {machineTypes.map((machineType, index) => {
            const active =
              displayMode === "stacked"
                ? stackedMachineTypes.includes(machineType)
                : selectedMachineTypes.includes(machineType);
            const className =
              displayMode === "stacked"
                ? active
                  ? "chip is-stack-active"
                  : "chip is-stack-inactive"
                : active
                  ? "chip is-active"
                  : "chip";
            const style =
              displayMode === "stacked" && active
                ? ({
                    "--chip-accent": machineTypeColor(machineType, index),
                  } as CSSProperties)
                : undefined;
            return (
              <button
                key={machineType}
                type="button"
                className={className}
                style={style}
                onClick={() => onToggleMachineType(machineType)}
              >
                {machineType}
              </button>
            );
          })}
        </div>
      </section>

      <section className="filter-section" aria-labelledby="country-list-title">
        <div className="section-heading">
          <h2 id="country-list-title">Country clusters</h2>
          <span>{formatCount(countries.length, "in view")}</span>
        </div>
        <div className="country-card-list">
          {countries.map((country) => (
            <button
              key={country.country}
              type="button"
              className={[
                "country-card",
                country.country === activeCountry ? "is-active" : "",
                searchHighlightedCountries.includes(country.country) ? "is-search-hit" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onCountrySelect(country.country)}
            >
              <span className="country-card__name">{country.country}</span>
              <strong>{country.visibleInstallationCount.toLocaleString()}</strong>
              <span>{formatCount(country.cityCount, "cities")}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="filter-section" aria-labelledby="city-list-title">
        <div className="section-heading">
          <h2 id="city-list-title">{activeCountry ? `${activeCountry} cities` : "Top cities in view"}</h2>
          <span>{formatCount(cities.length, "matches")}</span>
        </div>
        <div className="city-list">
          {cityList.map((city) => (
            <button key={city.id} type="button" className="city-list__item" onClick={() => onCitySelect(city.id)}>
              <span>{`${city.city}, ${city.state}`}</span>
              <strong>{city.visibleInstallationCount.toLocaleString()}</strong>
              <small>{city.country}</small>
            </button>
          ))}
          {cityList.length === 0 ? <p className="empty-state">No cities match the current mission parameters.</p> : null}
        </div>
      </section>

      <p className="data-note">
        {internalDetailEnabled
          ? "Authenticated internal mode is active. Customer, serial, and street-level search is available."
          : "Come On, Let's Vape-Jet!"}
      </p>
    </aside>
  );
}
