import { AnyRecord } from "dns";
import { APICalls } from "../types/api";

const proxyUrl = "https://corsproxy.io/?";

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
    case APICalls.CAMERAS:
      return "http://api.zdiz.gdynia.pl/ri/rest/cameras";
    default:
      return "";
  }
};

export const requestData = async (requestType: string, param?: string): Promise<any> => {
  try {
    const res = await fetch(`${proxyUrl}${encodeURIComponent(setRequestUrl(requestType, param))}`);
    const responseParsed = await res.json();
    const responseStatus = responseParsed.status.http_code;
    if (responseStatus >= 400) {
      throw new Error("API ERROR");
    }
    return JSON.parse(responseParsed.contents);
  } catch (err: any) {
    throw new Error("API ERROR", err);
  }
};
