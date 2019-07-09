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

const values: IValues = {
  tileSource:
    "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  ext: "png",
  attribution: `&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
  centerCoordinates: [54.5, 18.5]
}

export default values
