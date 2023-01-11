import { APICalls } from "../types/api";

const proxyUrl = "https://api.allorigins.win/raw?url=";

const setRequestUrl = (type: string, param?: string): string => {
  switch (type) {
    case APICalls.WEATHER_STATIONS:
      return "http://api.zdiz.gdynia.pl/ri/rest/weather_stations";
    case APICalls.WEATHER_STATIONS_DATA:
      return "http://api.zdiz.gdynia.pl/ri/rest/weather_stations_data";
    case APICalls.PARKINGS:
      return "http://api.zdiz.gdynia.pl/ri/rest/parkings";
    case APICalls.PARKINGS_DATA:
      return "http://api.zdiz.gdynia.pl/ri/rest/parking_places";
    case APICalls.ROADS:
      return "http://api.zdiz.gdynia.pl/ri/rest/road_segments";
    case APICalls.ROADS_DATA:
      return "http://api.zdiz.gdynia.pl/ri/rest/traffic_intensities?segmentId=69713";
    case APICalls.AIR_QUALITY_STATIONS:
      return "https://api.um.gdynia.pl/weather/air";
    case APICalls.TRANSPORT_STOPS:
      return "http://api.zdiz.gdynia.pl/pt/stops";
    case APICalls.TRANSPORT_STOPS_DELAY:
      return `http://api.zdiz.gdynia.pl/pt/delays?stopId=${param}`;
    case APICalls.TRANSPORT_LINES:
      return "http://api.zdiz.gdynia.pl/pt/routes";
    default:
      return "";
  }
};

export const requestData = async (requestType: string, param?: string): Promise<any> => {
  const res = await fetch(`${proxyUrl}${setRequestUrl(requestType, param)}`);
  return res.json();
};
