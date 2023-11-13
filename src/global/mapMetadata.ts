import L from "leaflet";
import marker from "../static/img/marker.svg";
import parkingMarker from "../static/img/parking-marker.svg";
import cameraMarker from "../static/img/camera-marker.svg";

interface IValues {
  tileSource: string;
  ext?: string;
  attribution: string;
  centerCoordinates: [number, number];
}

export const MapMarker = new L.Icon({
  iconUrl: marker,
  iconSize: [30, 30],
  iconAnchor: [12, 36],
  popupAnchor: [3, -25]
});

export const ParkingMarker = new L.Icon({
  iconUrl: parkingMarker,
  iconSize: [30, 30],
  iconAnchor: [12, 36],
  popupAnchor: [3, -25]
});

export const CameraMarker = new L.Icon({
  iconUrl: cameraMarker,
  iconSize: [30, 30],
  iconAnchor: [12, 36],
  popupAnchor: [3, -25]
});

const mapMetadata: IValues = {
  tileSource: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
  ext: "png",
  attribution: `© ESA WorldCover project 2021 / Contains modified Copernicus Sentinel data (2021) processed by ESA WorldCover consortium`,
  centerCoordinates: [54.5, 18.47]
};

export default mapMetadata;
