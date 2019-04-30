const proxyUrl = "https://cors-anywhere.herokuapp.com/"

// Weather stations location

const weatheStationsRequest =
  "http://api.zdiz.gdynia.pl/ri/rest/weather_stations"

const getWeatherStations = async (request: RequestInfo): Promise<any> => {
  const res = await fetch(`${proxyUrl}${request}`)
  const json = await res.json()
  return json
}

export const weatherStations = getWeatherStations(weatheStationsRequest)

// Weather stations detailed data

const weatheStationsDataRequest =
  "http://api.zdiz.gdynia.pl/ri/rest/weather_stations_data"

const getWeatherStationsData = async (request: RequestInfo): Promise<any> => {
  const res = await fetch(`${proxyUrl}${request}`)
  const json = await res.json()
  return json
}

export const weatherStationsData = getWeatherStationsData(
  weatheStationsDataRequest
)
