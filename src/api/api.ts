const proxyUrl = "https://api.allorigins.win/raw?url=";

const setRequestUrl = (type: string): string => {
  switch (type) {
    case "weatherStations":
      return "http://api.zdiz.gdynia.pl/ri/rest/weather_stations";
    case "weatherStationsData":
      return "http://api.zdiz.gdynia.pl/ri/rest/weather_stations_data";
    case "parkings":
      return "http://api.zdiz.gdynia.pl/ri/rest/parkings";
    case "parkingsData":
      return "http://api.zdiz.gdynia.pl/ri/rest/parking_places";
    case "roads":
      return "http://api.zdiz.gdynia.pl/ri/rest/road_segments";
    case "roadsData":
      return "http://api.zdiz.gdynia.pl/ri/rest/traffic_intensities?segmentId=00111";
    default:
      return "";
  }
};

export const requestData = async (requestType: string): Promise<any> => {
  const res = await fetch(`${proxyUrl}${setRequestUrl(requestType)}`);
  return await res.json();
};
