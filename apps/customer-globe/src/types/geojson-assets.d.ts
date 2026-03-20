declare module "*.geojson" {
  import type { FeatureCollection, GeoJsonProperties, MultiPolygon, Polygon } from "geojson";

  const value: FeatureCollection<Polygon | MultiPolygon, GeoJsonProperties>;
  export default value;
}

declare module "*.geojson?raw" {
  const value: string;
  export default value;
}
