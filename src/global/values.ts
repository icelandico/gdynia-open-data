interface IValues {
  tileSource: string
  ext?: string
  attribution: string
  centerCoordinates: [number, number]
}

const values: IValues = {
  tileSource:
    "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  ext: "png",
  attribution: `&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
  centerCoordinates: [54.5, 18.5]
}

export default values
