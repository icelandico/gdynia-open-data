import L from "leaflet";
import marker from "../static/img/marker.svg";
import parkingMarker from "../static/img/parking-marker.svg";

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

const mapMetadata: IValues = {
  tileSource: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png",
  ext: "png",
  attribution: `&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
  centerCoordinates: [54.5, 18.47]
};

export default mapMetadata;
