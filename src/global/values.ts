interface IValues {
  tileSource: string,
  ext?: string,
  attribution: string
}

const values: IValues = {
  tileSource: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",
  ext: "png",
  attribution: `&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`
}

export default values