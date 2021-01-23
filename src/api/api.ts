import { roads } from "./roads";
import { roadsData } from "./roadsData";

const proxyUrl = "https://cors-anywhere.herokuapp.com/"

// Weather stations location

const weatheStationsRequest = "http://api.zdiz.gdynia.pl/ri/rest/weather_stations"

const getWeatherStations = async (request: RequestInfo): Promise<any> => {
  const res = await fetch(`${proxyUrl}${request}`)
  const json = await res.json()
  return json
}

export const weatherStations = getWeatherStations(weatheStationsRequest)

// Weather stations detailed data

const weatherStationsDataRequest = "http://api.zdiz.gdynia.pl/ri/rest/weather_stations_data"

const getWeatherStationsData = async (request: RequestInfo): Promise<any> => {
  const res = await fetch(`${proxyUrl}${request}`)
  const json = await res.json()
  return json
}

export const weatherStationsData = getWeatherStationsData(weatherStationsDataRequest)

// Parking places location

const parkingPlacesRequest = "http://api.zdiz.gdynia.pl/ri/rest/parkings"

const getParkingPlaces = async (request: RequestInfo): Promise<any> => {
  const res = await fetch(`${proxyUrl}${request}`)
  const json = await res.json()
  return json
}

export const parkingPlaces = getParkingPlaces(parkingPlacesRequest)

// Parking places data

const parkingPlacesDataRequest = "http://api.zdiz.gdynia.pl/ri/rest/parking_places"

const getParkingPlacesData = async (request: RequestInfo): Promise<any> => {
  const res = await fetch(`${proxyUrl}${request}`)
  const json = await res.json()
  return json
}

export const parkingPlacesData = getParkingPlacesData(parkingPlacesDataRequest)

// Road segments

const roadSegmentsRequest = "http://api.zdiz.gdynia.pl/ri/rest/road_segments"

const getRoadSegments = async (request: RequestInfo): Promise<any> => {
  // const res = await fetch(`${proxyUrl}${request}`)
  // return await res.json()
  return roads
}

export const roadSegments = getRoadSegments(roadSegmentsRequest)

// Road segments Data

const roadSegmentsDataRequest = "http://api.zdiz.gdynia.pl/ri/rest/traffic_intensities?segmentId=00111"

const getRoadSegmentsData = async (request: RequestInfo): Promise<any> => {
  // const res = await fetch(`${proxyUrl}${request}`)
  // return await res.json()
  return roadsData
}

export const roadSegmentsData = getRoadSegmentsData(roadSegmentsDataRequest)
