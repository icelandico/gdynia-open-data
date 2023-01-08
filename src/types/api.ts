type Location = {
  type: string;
  crs: {
    type: "name";
    properties: {
      name: string;
    };
  };
  coordinates: [number, number];
};

export enum APICalls {
  WEATHER_STATIONS = "weatherStations",
  WEATHER_STATIONS_DATA = "weatherStationsData",
  PARKINGS = "parkings",
  PARKINGS_DATA = "parkingsData",
  ROADS = "roads",
  ROADS_DATA = "roadsData",
  AIR_QUALITY_STATIONS = "airQualityStations",
  TRANSPORT_STOPS = "transportStops"
}

export interface IRoadSegment {
  id: number;
  geometry: {
    type: string;
    crs: {
      type: string;
      properties: {
        name: string;
      };
    };
    coordinates: number[][];
    lastUpdate: string;
  };
}

export interface IRoadSegmentData {
  eventId: number;
  roadSegmentId: number;
  intensity: number;
  measureTime: string;
}

export type SegmentData = IRoadSegmentData & IRoadSegment;

export interface IWeatherStation {
  id: number;
  code: string;
  street: string;
  location: Location;
  lastUpdate: string;
}

export interface IWeatherStationData {
  id: number;
  weatherStationId: number;
  airTemperature: number;
  surfaceTemperature: number;
  foundationTemperature: number;
  chemicalConcentration: number;
  visibility: number;
  strenghtWind: number;
  windDirection: number;
  dewPoint: number;
  waterIceThickness: number;
  windSpeed: number;
  measureTime: string;
}

export type WeatherStation = IWeatherStationData & IWeatherStation;

export interface IParking {
  id: number;
  code: string;
  name: string;
  address: string;
  streetEntrance: string;
  princing: string;
  location: Location;
  lastUpdate: string;
}

export interface IParkingData {
  id: number;
  parkingId: number;
  capacity: number;
  freePlaces: number;
  insertTime: string;
}

export type Parking = IParking & IParkingData;

export interface IAirQualityStation {
  type: number;
  address: string;
  station: string;
  "PM25.val": number;
  "PM25.time": number;
  "PM10.val": number;
  "PM10.time": number;
  state: string;
  color: string;
  color_day: string;
  percent: number;
  carriage: boolean;
  run: boolean;
  rover: boolean;
}

export interface IAirStationCoordinates {
  address: string;
  station: string;
  coordinates: [number, number];
}

export type AirQualityStation = IAirQualityStation & IAirStationCoordinates;

export interface ITransportStops {
  stopId: number;
  stopCode: string;
  stopName: string;
  stopDesc: string;
  stopLat: string;
  stopLon: string;
  zoneId: string;
  stopURL: null;
  locationType: null;
  parentStation: null;
  stopTimezone: string;
  wheelchairBoarding: null;
  ticketZoneBorder: null;
}
