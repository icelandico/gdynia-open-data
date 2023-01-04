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
  chemicalConcentration:number;
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
