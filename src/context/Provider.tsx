import React, { createContext, useState } from "react";
import { WeatherStation, SegmentData, Parking, AirQualityStation } from "../types/api";
import { requestData } from "../api/api";
import {
  concatParkingData,
  concatRoadData,
  concatWeatherData,
  concatAirQualityData
} from "../utils/concatData";
import { AIR_QUALITY_STATIONS } from "../constants/airQualityStations";

type APIContextType = {
  isLoading: boolean;
  weatherData: WeatherStation[];
  roadData: SegmentData[];
  parkingsData: Parking[];
  airQualityData: AirQualityStation[];
  getWeatherData: () => void;
  getRoadData: () => void;
  getParkingsData: () => void;
  getAirQualityData: () => void;
};

const initialContext = {
  isLoading: false,
  weatherData: [],
  roadData: [],
  parkingsData: [],
  airQualityData: [],
  getWeatherData: () => null,
  getRoadData: () => null,
  getParkingsData: () => null,
  getAirQualityData: () => null
};

export const APIContext = createContext<APIContextType>(initialContext);

export const APIProvider: React.FC<any> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherStation[]>([]);
  const [roadData, setRoadData] = useState<SegmentData[]>([]);
  const [parkingsData, setParkingsData] = useState<Parking[]>([]);
  const [airQualityData, setAirQualityData] = useState<AirQualityStation[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getWeatherData = async () => {
    setLoading(true);

    const getAsyncData = async () => {
      const stationsResponse = await requestData("weatherStations");
      const stationsData = await requestData("weatherStationsData");
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
      const allSegments = await requestData("roads");
      const segmentsData = await requestData("segmentsData");
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
      const parkingsResponse = await requestData("parkings");
      const parkingCollectionData = await requestData("parkingsData");
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
      const airQualityStationsResponse = await requestData("airQualityStations");
      return concatAirQualityData(airQualityStationsResponse.stations, AIR_QUALITY_STATIONS);
    };

    getAsyncData().then(d => {
      setAirQualityData(d);
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
        getAirQualityData
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
