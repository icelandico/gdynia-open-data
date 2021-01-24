import L from "leaflet"

interface IValues {
  tileSource: string
  ext?: string
  attribution: string
  centerCoordinates: [number, number]
}

export const MapMarker = new L.Icon({
  iconUrl: require("../static/img/marker.svg"),
  iconSize: [30, 45],
  iconAnchor: [12, 36],
  popupAnchor: [3, -25]
})

export const ParkingMarker = new L.Icon({
  iconUrl: require("../static/img/parking-marker.svg"),
  iconSize: [30, 45],
  iconAnchor: [12, 36],
  popupAnchor: [3, -25]
})

const values: IValues = {
  tileSource: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png",
  ext: "png",
  attribution: `&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
  centerCoordinates: [54.5, 18.47]
}

export default values
