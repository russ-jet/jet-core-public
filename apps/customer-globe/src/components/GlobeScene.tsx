import { useEffect, useMemo, useRef, useState } from "react";
import type { Feature, FeatureCollection, GeoJsonProperties, MultiPolygon, Polygon } from "geojson";
import * as THREE from "three";
import Globe from "react-globe.gl";
import admin1GeoJsonRaw from "../data/admin1-boundaries.geojson?raw";
import countryGeoJsonRaw from "../data/countries.geojson?raw";
import { regionIdFromFields } from "../lib/filters";
import { machineTypeColor } from "../lib/machineTypeColors";
import { orbitLogoPath } from "../lib/orbitLogo";
import { getSolarSnapshot } from "../lib/solar";
import type { VisibleCity, VisibleCountry, VisibleRegion } from "../types";

const DAY_TEXTURE = "https://unpkg.com/three-globe/example/img/earth-day.jpg";
const NIGHT_TEXTURE = "https://unpkg.com/three-globe/example/img/earth-night.jpg";
const BUMP_TEXTURE = "https://unpkg.com/three-globe/example/img/earth-topology.png";
const INTRO_VIEW = { lat: 16, lng: -18, altitude: 6.2 };
const DEFAULT_VIEW = { lat: 20, lng: -24, altitude: 3.25 };
const GLOBE_RADIUS = 100;
const PX_PER_DEG = (2 * Math.PI * GLOBE_RADIUS) / 360;
const PILLAR_RESOLUTION = 18;
const FAR_ZOOM_THRESHOLD = 1500;
const MAX_GLOBE_DISTANCE = 3200;
const ADMIN1_GEOJSON = JSON.parse(admin1GeoJsonRaw) as FeatureCollection<
  Polygon | MultiPolygon,
  GeoJsonProperties
>;
const COUNTRIES_GEOJSON = JSON.parse(countryGeoJsonRaw) as FeatureCollection<
  Polygon | MultiPolygon,
  GeoJsonProperties
>;

type CountryFeature = Feature<Polygon | MultiPolygon, GeoJsonProperties>;
type RegionFeature = Feature<Polygon | MultiPolygon, GeoJsonProperties>;

function createGlobeMaterial() {
  const loader = new THREE.TextureLoader();
  const uniforms = {
    dayTexture: { value: loader.load(DAY_TEXTURE) },
    nightTexture: { value: loader.load(NIGHT_TEXTURE) },
    bumpTexture: { value: loader.load(BUMP_TEXTURE) },
    sunDirection: { value: new THREE.Vector3(1, 0, 0) },
    daylightStrength: { value: 1.0 },
  };

  return new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vViewPosition;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform sampler2D dayTexture;
      uniform sampler2D nightTexture;
      uniform sampler2D bumpTexture;
      uniform vec3 sunDirection;
      uniform float daylightStrength;
      varying vec2 vUv;
      varying vec3 vViewPosition;

      const float PI = 3.14159265359;

      vec3 uvToNormal(vec2 uv) {
        float lon = (uv.x - 0.5) * 2.0 * PI;
        float lat = (uv.y - 0.5) * PI;
        return normalize(vec3(
          cos(lat) * sin(lon),
          sin(lat),
          cos(lat) * cos(lon)
        ));
      }

      void main() {
        vec3 normal = uvToNormal(vUv);
        vec3 viewDir = normalize(vViewPosition);
        vec3 sunDir = normalize(sunDirection);
        vec4 dayColor = texture2D(dayTexture, vUv);
        vec4 nightColor = texture2D(nightTexture, vUv);
        float topology = texture2D(bumpTexture, vUv).r;

        float diffuse = dot(normal, sunDir);
        float twilight = smoothstep(-0.16, 0.18, diffuse);
        float topologyLift = smoothstep(0.25, 1.0, topology) * 0.12;
        vec3 base = mix(nightColor.rgb * 0.85, dayColor.rgb * daylightStrength, twilight);

        vec3 reflectDir = reflect(-sunDir, normal);
        float spec = pow(max(dot(reflectDir, viewDir), 0.0), 16.0) * 0.18;
        vec3 color = base + vec3(topologyLift) + vec3(spec);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
}

interface GlobeSceneProps {
  countries: VisibleCountry[];
  cities: VisibleCity[];
  regions: VisibleRegion[];
  activeCountry: string | null;
  focusedRegionId: string | null;
  selectedCityId: string | null;
  searchQuery: string;
  showDetailMarkers: boolean;
  searchFocusTarget: { lat: number; lon: number; altitude: number } | null;
  highlightedCountries: string[];
  highlightedRegionIds: string[];
  onCountrySelect: (country: string) => void;
  onCitySelect: (cityId: string) => void;
  displayMode: "stacked" | "totals";
  machineTypes: string[];
  selectedMachineTypes: string[];
  onOrbitChange?: (longitude: number) => void;
  reducedMotion: boolean;
}

export default function GlobeScene({
  countries,
  cities,
  regions,
  activeCountry,
  focusedRegionId,
  selectedCityId,
  searchQuery,
  showDetailMarkers,
  searchFocusTarget,
  highlightedCountries,
  highlightedRegionIds,
  onCountrySelect,
  onCitySelect,
  displayMode,
  machineTypes,
  selectedMachineTypes,
  onOrbitChange,
  reducedMotion,
}: GlobeSceneProps) {
  const globeRef = useRef<any>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const hasSetInitialViewRef = useRef(false);
  const introTimerRef = useRef<number | null>(null);
  const shaderMaterial = useMemo(() => createGlobeMaterial(), []);
  const [dimensions, setDimensions] = useState({ width: 840, height: 760 });
  const [isPrecisionZoom, setIsPrecisionZoom] = useState(false);
  const [isMacroZoom, setIsMacroZoom] = useState(false);
  const [introComplete, setIntroComplete] = useState(reducedMotion);

  useEffect(() => {
    if (!shellRef.current || typeof ResizeObserver === "undefined") {
      return;
    }
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }
      const width = Math.max(320, Math.floor(entry.contentRect.width));
      const height = Math.max(420, Math.floor(entry.contentRect.height));
      setDimensions({ width, height });
    });
    observer.observe(shellRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const controls = globeRef.current?.controls?.();
    if (!controls) {
      return;
    }
    controls.minDistance = 145;
    controls.maxDistance = MAX_GLOBE_DISTANCE;
    const precisionThreshold = controls.minDistance + 22;
    const updateRotationMode = () => {
      const distance =
        typeof controls.getDistance === "function"
          ? controls.getDistance()
          : globeRef.current?.camera?.()?.position?.length?.() ?? Number.POSITIVE_INFINITY;
      const precisionMode = distance <= precisionThreshold;
      const macroZoomMode = distance >= FAR_ZOOM_THRESHOLD;
      controls.autoRotate = !reducedMotion && introComplete && !precisionMode;
      setIsPrecisionZoom((current) => (current === precisionMode ? current : precisionMode));
      setIsMacroZoom((current) => (current === macroZoomMode ? current : macroZoomMode));
    };

    controls.autoRotateSpeed = 0.18;
    controls.enablePan = false;
    controls.zoomSpeed = 0.9;
    updateRotationMode();
    controls.addEventListener?.("change", updateRotationMode);
    return () => controls.removeEventListener?.("change", updateRotationMode);
  }, [introComplete, reducedMotion]);

  useEffect(() => {
    const updateLighting = () => {
      const snapshot = getSolarSnapshot(new Date());
      shaderMaterial.uniforms.sunDirection.value.set(
        snapshot.direction.x,
        snapshot.direction.y,
        snapshot.direction.z,
      );
      shaderMaterial.uniforms.daylightStrength.value = snapshot.daylightStrength;
    };
    updateLighting();
    const timer = window.setInterval(updateLighting, 60_000);
    return () => window.clearInterval(timer);
  }, [shaderMaterial]);

  useEffect(() => {
    if (hasSetInitialViewRef.current) {
      return;
    }
    const globe = globeRef.current;
    if (!globe) {
      return;
    }
    if (reducedMotion) {
      globe.pointOfView(DEFAULT_VIEW, 0);
      setIntroComplete(true);
    } else {
      globe.pointOfView(INTRO_VIEW, 0);
      setIntroComplete(false);
      introTimerRef.current = window.setTimeout(() => {
        globe.pointOfView(DEFAULT_VIEW, 2400);
        setIntroComplete(true);
      }, 650);
    }
    hasSetInitialViewRef.current = true;
    return () => {
      if (introTimerRef.current !== null) {
        window.clearTimeout(introTimerRef.current);
        introTimerRef.current = null;
      }
    };
  }, [dimensions.height, dimensions.width, reducedMotion]);

  useEffect(() => {
    const regionTarget = focusedRegionId
      ? regions.find((region) => region.id === focusedRegionId) ?? null
      : null;
    const selectedCity = cities.find((city) => city.id === selectedCityId) ?? null;
    const selectedCountry = countries.find((country) => country.country === activeCountry) ?? null;
    const globe = globeRef.current;
    const focusTarget = selectedCity
      ? { lat: selectedCity.lat, lng: selectedCity.lon, altitude: 0.78 }
      : regionTarget
        ? { lat: regionTarget.lat, lng: regionTarget.lon, altitude: 1.16 }
        : searchFocusTarget
          ? { lat: searchFocusTarget.lat, lng: searchFocusTarget.lon, altitude: searchFocusTarget.altitude }
          : selectedCountry
            ? { lat: selectedCountry.lat, lng: selectedCountry.lon, altitude: 1.88 }
            : null;
    if (!globe) {
      return;
    }
    if (!focusTarget && !introComplete) {
      return;
    }
    if (!focusTarget) {
      globe.pointOfView(DEFAULT_VIEW, reducedMotion ? 0 : 1200);
      return;
    }
    globe.pointOfView(
      focusTarget,
      reducedMotion ? 0 : 1400,
    );
  }, [
    activeCountry,
    cities,
    countries,
    focusedRegionId,
    introComplete,
    reducedMotion,
    regions,
    searchFocusTarget,
    selectedCityId,
  ]);

  useEffect(() => {
    if (!onOrbitChange) {
      return;
    }
    let frame = 0;
    let lastLongitude: number | null = null;
    const update = () => {
      const pointOfView = globeRef.current?.pointOfView?.();
      if (pointOfView && typeof pointOfView.lng === "number") {
        const normalized = ((pointOfView.lng % 360) + 360) % 360;
        if (lastLongitude === null || Math.abs(normalized - lastLongitude) > 0.35) {
          lastLongitude = normalized;
          onOrbitChange(normalized);
        }
      }
      frame = window.requestAnimationFrame(update);
    };
    frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, [onOrbitChange]);

  const showCountryClusters = !activeCountry && !showDetailMarkers;
  const globeWidth = dimensions.width;
  const globeHeight = dimensions.height;
  const markerData = showCountryClusters ? countries : cities;
  const stackedObjectData = useMemo(
    () =>
      markerData.map((item) => ({
        ...item,
        globeObject: createStackedPillarObject({
          item,
          showCountryClusters,
          machineTypes,
          selectedMachineTypes,
          selectedCityId,
          activeCountry,
        }),
        objectLabel: createObjectLabel(item, showCountryClusters),
      })),
    [
      activeCountry,
      machineTypes,
      markerData,
      selectedCityId,
      selectedMachineTypes,
      showCountryClusters,
    ],
  );
  const ringTargets = showCountryClusters
    ? countries.map((country) => ({
        lat: country.lat,
        lng: country.lon,
        color: "rgba(57, 255, 66, 0.32)",
        maxR: 3.4 + Math.min(country.visibleInstallationCount * 0.03, 2.2),
      }))
    : cities
        .filter((city) => city.id === selectedCityId)
        .map((city) => ({
          lat: city.lat,
          lng: city.lon,
          color: "rgba(251, 179, 24, 0.35)",
          maxR: 2.8,
        }));
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const selectedCity = cities.find((city) => city.id === selectedCityId) ?? null;
  const selectedRegionId =
    focusedRegionId ??
    (selectedCity ? regionIdFromFields(selectedCity.country, selectedCity.state) : null);
  const highlightedCountrySet = useMemo(() => new Set(highlightedCountries), [highlightedCountries]);
  const highlightedRegionSet = useMemo(() => new Set(highlightedRegionIds), [highlightedRegionIds]);
  const countryPolygons = useMemo(
    () =>
      countries
        .map((country) => {
          const feature = findCountryFeature(country.country);
          if (!feature) {
            return null;
          }

          return {
            country: country.country,
            geometry: feature.geometry,
            isActive: country.country === activeCountry,
            isSearchHit: highlightedCountrySet.has(country.country),
          };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null),
    [activeCountry, countries, highlightedCountrySet],
  );
  const regionPolygons = useMemo(() => {
    const shouldRenderAllActiveCountryRegions = Boolean(activeCountry);
    const shouldRenderHighlightedRegions = Boolean(normalizedSearch);

    const sourceRegions = regions.filter((region) => {
      if (shouldRenderAllActiveCountryRegions) {
        return region.country === activeCountry;
      }
      if (shouldRenderHighlightedRegions) {
        return highlightedRegionSet.has(region.id);
      }
      return false;
    });

    return sourceRegions
      .map((region) => {
        const feature = findRegionFeature(region.country, region.state);
        if (!feature) {
          return null;
        }

        return {
          id: region.id,
          country: region.country,
          state: region.state,
          geometry: feature.geometry,
          isSelected: region.id === selectedRegionId,
          isSearchHit: highlightedRegionSet.has(region.id),
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);
  }, [
    activeCountry,
    highlightedRegionSet,
    normalizedSearch,
    regions,
    selectedRegionId,
  ]);
  const geographyPolygons = isMacroZoom ? [] : [...countryPolygons, ...regionPolygons];
  const visiblePoints = isMacroZoom || displayMode === "stacked" ? [] : markerData;
  const visibleObjects = isMacroZoom || displayMode !== "stacked" ? [] : stackedObjectData;
  const visibleRings = isMacroZoom ? [] : ringTargets;

  return (
    <div className="globe-shell" ref={shellRef}>
      <div className="globe-logo-halo" aria-hidden="true">
        <div
          className="globe-logo-watermark"
          style={{ backgroundImage: `url(${orbitLogoPath})` }}
        />
      </div>
      <div className="globe-canvas-frame">
        <Globe
          ref={globeRef}
          globeMaterial={shaderMaterial}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere
          atmosphereColor="#39FF42"
          atmosphereAltitude={0.042}
          animateIn={!reducedMotion}
          width={globeWidth}
          height={globeHeight}
          polygonsData={geographyPolygons}
          polygonGeoJsonGeometry={(item: any) => item.geometry}
          polygonAltitude={(item: any) =>
            "state" in item
              ? item.isSelected
                ? 0.0105
                : item.isSearchHit
                  ? 0.0072
                  : 0.0036
              : item.isActive
                ? 0.008
                : item.isSearchHit
                  ? 0.004
                  : 0.0014
          }
          polygonCapColor={(item: any) =>
            "state" in item
              ? item.isSelected
                ? "rgba(255, 247, 34, 0.16)"
                : item.isSearchHit
                  ? "rgba(57, 255, 66, 0.12)"
                  : "rgba(57, 255, 66, 0.035)"
              : item.isActive
                ? "rgba(255, 247, 34, 0.08)"
                : item.isSearchHit
                  ? "rgba(57, 255, 66, 0.045)"
                  : "rgba(57, 255, 66, 0.012)"
          }
          polygonSideColor={() => "rgba(0, 0, 0, 0)"}
          polygonStrokeColor={(item: any) =>
            "state" in item
              ? item.isSelected
                ? "rgba(255, 247, 34, 0.96)"
                : item.isSearchHit
                  ? "rgba(57, 255, 66, 0.88)"
                  : "rgba(57, 255, 66, 0.32)"
              : item.isActive
                ? "rgba(255, 247, 34, 0.82)"
                : item.isSearchHit
                  ? "rgba(57, 255, 66, 0.55)"
                  : "rgba(57, 255, 66, 0.2)"
          }
          polygonsTransitionDuration={reducedMotion ? 0 : 360}
          pointsData={visiblePoints}
          pointResolution={PILLAR_RESOLUTION}
          pointLat={(item: any) => item.lat}
          pointLng={(item: any) => item.lon}
          pointAltitude={(item: any) => getPillarMetrics(item.visibleInstallationCount, showCountryClusters).altitude}
          pointRadius={(item: any) => getPillarMetrics(item.visibleInstallationCount, showCountryClusters).angularRadius}
          pointColor={(item: any) =>
            showCountryClusters
              ? item.country === activeCountry
                ? "#FFF722"
                : "#39FF42"
              : item.id === selectedCityId
                ? "#FBB318"
                : "#39FF42"
          }
          pointLabel={(item: any) =>
            showCountryClusters
              ? `${item.country}: ${item.visibleInstallationCount} installations`
              : `${item.city}, ${item.state}: ${item.visibleInstallationCount} installations`
          }
          onPointClick={(item: any) => {
            if (showCountryClusters) {
              onCountrySelect(item.country);
              return;
            }
            onCitySelect(item.id);
          }}
          objectsData={visibleObjects}
          objectLat={(item: any) => item.lat}
          objectLng={(item: any) => item.lon}
          objectAltitude={0}
          objectFacesSurface
          objectThreeObject="globeObject"
          objectLabel="objectLabel"
          onObjectClick={(item: any) => {
            if (showCountryClusters) {
              onCountrySelect(item.country);
              return;
            }
            onCitySelect(item.id);
          }}
          ringsData={visibleRings}
          ringLat={(item: any) => item.lat}
          ringLng={(item: any) => item.lng}
          ringColor={(item: any) => item.color}
          ringMaxRadius={(item: any) => item.maxR}
          ringPropagationSpeed={1.1}
          ringRepeatPeriod={reducedMotion || isPrecisionZoom ? 9_999_999 : 2400}
        />
      </div>
    </div>
  );
}

function getPillarMetrics(visibleInstallationCount: number, showCountryClusters: boolean) {
  const altitude = showCountryClusters
    ? Math.min(0.11, 0.018 + visibleInstallationCount / 620)
    : Math.min(0.05, 0.009 + visibleInstallationCount / 420);
  const angularRadius = showCountryClusters
    ? 0.18 + Math.min(visibleInstallationCount / 280, 0.14)
    : 0.07 + Math.min(visibleInstallationCount / 380, 0.08);

  return {
    altitude,
    angularRadius,
    worldHeight: Math.max(altitude * GLOBE_RADIUS, 0.1),
    worldRadius: Math.min(30, angularRadius) * PX_PER_DEG,
  };
}

function normalizeSegmentHeights(segmentCounts: number[], totalHeight: number) {
  const totalCount = segmentCounts.reduce((sum, count) => sum + count, 0);
  if (totalCount <= 0 || segmentCounts.length === 0) {
    return [];
  }

  const minFraction = segmentCounts.length > 1
    ? Math.min(0.08, 1 / (segmentCounts.length * 1.8))
    : 1;
  const weightedFractions = segmentCounts.map((count) => Math.max(count / totalCount, minFraction));
  const weightedTotal = weightedFractions.reduce((sum, fraction) => sum + fraction, 0);

  return weightedFractions.map((fraction) => (fraction / weightedTotal) * totalHeight);
}

interface StackedPillarConfig {
  item: VisibleCountry | VisibleCity;
  showCountryClusters: boolean;
  machineTypes: string[];
  selectedMachineTypes: string[];
  selectedCityId: string | null;
  activeCountry: string | null;
}

function createStackedPillarObject({
  item,
  showCountryClusters,
  machineTypes,
  selectedMachineTypes,
  selectedCityId,
  activeCountry,
}: StackedPillarConfig) {
  const activeTypes = selectedMachineTypes.length > 0 ? selectedMachineTypes : machineTypes;
  const segments = activeTypes
    .map((machineType, index) => ({
      machineType,
      count: item.machineTypeCounts[machineType] ?? 0,
      color: machineTypeColor(machineType, index),
    }))
    .filter((segment) => segment.count > 0);

  const isActive = showCountryClusters
    ? (item as VisibleCountry).country === activeCountry
    : (item as VisibleCity).id === selectedCityId;
  const singleColor = showCountryClusters
    ? isActive
      ? "#FFF722"
      : "#39FF42"
    : isActive
      ? "#FBB318"
      : "#39FF42";

  const displaySegments =
    segments.length > 0
      ? segments
      : [{ machineType: "all", count: 1, color: singleColor }];

  const pillarMetrics = getPillarMetrics(item.visibleInstallationCount, showCountryClusters);
  const normalizedHeights = normalizeSegmentHeights(
    displaySegments.map((segment) => segment.count),
    pillarMetrics.worldHeight,
  );
  const overlap = Math.min(pillarMetrics.worldHeight * 0.035, showCountryClusters ? 0.22 : 0.14);
  const pillarGroup = new THREE.Group();
  let cursor = 0;

  displaySegments.forEach((segment, index) => {
    const segmentHeight = normalizedHeights[index] ?? 0;
    const lowerOverlap = index === 0 ? 0 : overlap;
    const upperOverlap = index === displaySegments.length - 1 ? 0 : overlap;
    const geometry = new THREE.CylinderGeometry(
      pillarMetrics.worldRadius,
      pillarMetrics.worldRadius,
      segmentHeight + lowerOverlap + upperOverlap,
      PILLAR_RESOLUTION,
    );
    geometry.rotateX(Math.PI / 2);
    geometry.translate(
      0,
      0,
      cursor + segmentHeight / 2 + (upperOverlap - lowerOverlap) / 2,
    );

    const material = new THREE.MeshLambertMaterial({
      color: segment.color,
      transparent: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    pillarGroup.add(mesh);
    cursor += segmentHeight;
  });

  if (isActive) {
    const highlightGeometry = new THREE.CylinderGeometry(
      pillarMetrics.worldRadius * 1.16,
      pillarMetrics.worldRadius * 1.16,
      pillarMetrics.worldHeight,
      PILLAR_RESOLUTION,
      1,
      true,
    );
    highlightGeometry.rotateX(Math.PI / 2);
    highlightGeometry.translate(0, 0, pillarMetrics.worldHeight / 2);
    const highlightMaterial = new THREE.MeshBasicMaterial({
      color: showCountryClusters ? "#FFF722" : "#FBB318",
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
    });
    pillarGroup.add(new THREE.Mesh(highlightGeometry, highlightMaterial));
  }

  return pillarGroup;
}

function createObjectLabel(item: VisibleCountry | VisibleCity, showCountryClusters: boolean) {
  return showCountryClusters
    ? `${(item as VisibleCountry).country}: ${item.visibleInstallationCount} installations`
    : `${(item as VisibleCity).city}, ${(item as VisibleCity).state}: ${item.visibleInstallationCount} installations`;
}

function normalizeCountryName(countryName: string) {
  const normalized = countryName.trim().toLowerCase();

  switch (normalized) {
    case "united states":
    case "united states of america":
    case "usa":
    case "u.s.a.":
      return "united states of america";
    default:
      return normalized;
  }
}

function getCountryFeatureNames(feature: CountryFeature): string[] {
  return [
    feature.properties?.ADMIN,
    feature.properties?.NAME,
    feature.properties?.NAME_LONG,
    feature.properties?.BRK_NAME,
    feature.properties?.FORMAL_EN,
  ].filter((value): value is string => typeof value === "string" && value.length > 0);
}

function findCountryFeature(countryName: string): CountryFeature | null {
  const normalizedCountry = normalizeCountryName(countryName);

  return (
    COUNTRIES_GEOJSON.features.find((feature) =>
      getCountryFeatureNames(feature).some(
        (featureName) => normalizeCountryName(featureName) === normalizedCountry,
      ),
    ) ?? null
  );
}

function findRegionFeature(countryName: string, stateName: string): RegionFeature | null {
  return (
    ADMIN1_GEOJSON.features.find((feature) => {
      const featureCountry = feature.properties?.country;
      const featureState = feature.properties?.state;
      return featureCountry === countryName && featureState === stateName;
    }) ?? null
  );
}
