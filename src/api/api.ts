const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const weatheStationsRequest =
  "http://api.zdiz.gdynia.pl/ri/rest/weather_stations"

const getWeatherStations = async (request: RequestInfo): Promise<any> => {
  const res = await fetch(`${proxyUrl}${request}`)
  const json = await res.json()
  return json
}

export const weatherStations = getWeatherStations(weatheStationsRequest)
