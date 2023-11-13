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
  tileSource: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  ext: "png",
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  centerCoordinates: [54.5, 18.47]
};

export default mapMetadata;
