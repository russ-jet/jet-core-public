export type MachineTypeCounts = Record<string, number>;

export interface GlobeMeta {
  generatedAt: string;
  sourceArtifact: string;
  disclosure: string;
  ctaUrl: string;
  freshness: string;
  audience?: "public" | "internal";
}

export interface CountryCluster {
  country: string;
  lat: number;
  lon: number;
  installationCount: number;
  cityCount: number;
  machineTypeCounts: MachineTypeCounts;
}

export interface InternalMachineRecord {
  serialNumber: string;
  machineType: string;
  productName: string;
  locationStatus: string;
  demoReady: boolean;
  resolutionNotes: string;
}

export interface InternalLocation {
  id: string;
  customerName: string;
  street: string;
  zipCode: string;
  installationCount: number;
  machineTypeCounts: MachineTypeCounts;
  serialNumbers: string[];
  machines: InternalMachineRecord[];
}

export interface CityInstallation {
  id: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
  installationCount: number;
  machineTypeCounts: MachineTypeCounts;
  searchText?: string;
  locations?: InternalLocation[];
}

export interface PublicGlobeDataset {
  meta: GlobeMeta;
  totals: {
    machines: number;
    cities: number;
    countries: number;
  };
  machineTypes: string[];
  countries: CountryCluster[];
  cities: CityInstallation[];
}

export interface VisibleCountry extends CountryCluster {
  visibleInstallationCount: number;
}

export interface VisibleCity extends CityInstallation {
  visibleInstallationCount: number;
}

export interface VisibleRegion {
  id: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
  cityCount: number;
  cityIds: string[];
  visibleInstallationCount: number;
}

export interface SearchHighlights {
  countryNames: string[];
  regionIds: string[];
  labels: string[];
}

export interface SearchSuggestion {
  id: string;
  kind: "country" | "state" | "city";
  label: string;
  value: string;
  hint: string;
  country?: string;
  state?: string;
  cityId?: string;
}
