import boundaries from "../geojson/boundaries.json";

export const getCityBoundaries = () => boundaries.features[0].geometry.coordinates[0];
