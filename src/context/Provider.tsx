import React, { createContext, useState } from "react";
import {
  AirQualityStation,
  APICalls,
  IStopDelay,
  ITransportStops,
  Parking,
  SegmentData,
  WeatherStation
} from "../types/api";
import { requestData } from "../api/api";
import {
  concatAirQualityData,
  concatParkingData,
  concatRoadData,
  concatWeatherData
} from "../utils/concatData";
import { AIR_QUALITY_STATIONS } from "../constants/airQualityStations";

type APIContextType = {
  isLoading: boolean;
  weatherData: WeatherStation[];
  roadData: SegmentData[];
  parkingsData: Parking[];
  airQualityData: AirQualityStation[];
  transportStops: ITransportStops[];
  transportStopDelay: IStopDelay[];
  getWeatherData: () => void;
  getRoadData: () => void;
  getParkingsData: () => void;
  getAirQualityData: () => void;
  getTransportStops: () => void;
  getTransportStopDelay: (stopId: string) => void;
};

const initialContext = {
  isLoading: false,
  weatherData: [],
  roadData: [],
  parkingsData: [],
  airQualityData: [],
  transportStops: [],
  transportStopDelay: [],
  getWeatherData: () => null,
  getRoadData: () => null,
  getParkingsData: () => null,
  getAirQualityData: () => null,
  getTransportStops: () => null,
  getTransportStopDelay: () => null
};

export const APIContext = createContext<APIContextType>(initialContext);

export const APIProvider: React.FC<any> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherStation[]>([]);
  const [roadData, setRoadData] = useState<SegmentData[]>([]);
  const [parkingsData, setParkingsData] = useState<Parking[]>([]);
  const [airQualityData, setAirQualityData] = useState<AirQualityStation[]>([]);
  const [transportStops, setTransportStops] = useState<ITransportStops[]>([]);
  const [transportStopDelay, setTransportStopDelay] = useState<IStopDelay[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getWeatherData = async () => {
    setLoading(true);

    const getAsyncData = async () => {
      const stationsResponse = await requestData(APICalls.WEATHER_STATIONS);
      const stationsData = await requestData(APICalls.WEATHER_STATIONS_DATA);
      return concatWeatherData(stationsResponse.weatherStations, stationsData);
    };

    getAsyncData().then(d => {
      setWeatherData(d);
      setLoading(false);
    });
  };

  const getRoadData = async () => {
    setLoading(true);

    const getAsyncData = async () => {
      const allSegments = await requestData(APICalls.ROADS);
      const segmentsData = await requestData(APICalls.ROADS_DATA);
      return concatRoadData(allSegments.road_segments, segmentsData);
    };

    getAsyncData().then(d => {
      setRoadData(d);
      setLoading(false);
    });
  };

  const getParkingsData = async () => {
    setLoading(true);

    const getAsyncData = async () => {
      const parkingsResponse = await requestData(APICalls.PARKINGS);
      const parkingCollectionData = await requestData(APICalls.PARKINGS_DATA);
      return concatParkingData(parkingsResponse.parkings, parkingCollectionData);
    };

    getAsyncData().then(d => {
      setParkingsData(d);
      setLoading(false);
    });
  };

  const getAirQualityData = async () => {
    setLoading(true);

    const getAsyncData = async () => {
      const airQualityStationsResponse = await requestData(APICalls.AIR_QUALITY_STATIONS);
      return concatAirQualityData(airQualityStationsResponse.stations, AIR_QUALITY_STATIONS);
    };

    getAsyncData().then(d => {
      setAirQualityData(d);
      setLoading(false);
    });
  };

  const getTransportStops = async () => {
    setLoading(true);

    const getAsyncData = async () => {
      return requestData(APICalls.TRANSPORT_STOPS);
    };

    getAsyncData().then(d => {
      setTransportStops(d);
      setLoading(false);
    });
  };

  const getTransportStopDelay = async (stopId: string) => {
    setLoading(true);
    const getAsyncData = async () => {
      return requestData(APICalls.TRANSPORT_STOPS_DELAY, stopId);
    };

    getAsyncData().then(d => {
      setTimeout(() => setTransportStopDelay(d.delay), 3000);
      setLoading(false);
    });
  };

  return (
    <APIContext.Provider
      value={{
        isLoading,
        weatherData,
        getWeatherData,
        roadData,
        getRoadData,
        parkingsData,
        getParkingsData,
        airQualityData,
        getAirQualityData,
        transportStops,
        getTransportStops,
        getTransportStopDelay,
        transportStopDelay
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
