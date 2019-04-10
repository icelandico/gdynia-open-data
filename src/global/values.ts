interface IValues {
  tileSource: string,
  ext?: string
}

const values: IValues = {
  tileSource: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",
  ext: "png"
}

export default values