import L from "leaflet";

export const convertCoords = (coords: [number, number]) => {
  return new L.LatLng(coords[1], coords[0]);
};
