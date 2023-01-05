import React, { createContext, useState } from "react";
import {
  IWeatherStationData,
  IWeatherStation,
  WeatherStation,
  SegmentData,
  IRoadSegment,
  IRoadSegmentData
} from "../types/api";
import { requestData } from "../api/api";

type APIContextType = {
  isLoading: boolean;
  weatherData: WeatherStation[];
  roadData: SegmentData[];
  getWeatherData: () => void;
  getRoadData: () => void;
};

const initialContext = {
  isLoading: false,
  weatherData: [],
  roadData: [],
  getWeatherData: () => null,
  getRoadData: () => null
};

export const APIContext = createContext<APIContextType>(initialContext);

const concatData = (weatherStations: IWeatherStation[], stationsData: IWeatherStationData[]) => {
  return weatherStations.map(item => {
    const matched = stationsData.filter(s => s.weatherStationId === item.id);
    return Object.assign({}, item, matched[0]);
  });
};

const concatRoadData = (segments: IRoadSegment[], roadsData: IRoadSegmentData[]) => {
  return roadsData.map(roadData => {
    const matched = segments.filter(roadSegment => roadSegment.id === roadData.roadSegmentId);
    return Object.assign({}, roadData, matched[0]);
  });
};

export const APIProvider: React.FC<any> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherStation[]>([]);
  const [roadData, setRoadData] = useState<SegmentData[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getWeatherData = async () => {
    setLoading(true);

    const getAsyncData = async () => {
      const stationsResponse = await requestData("weatherStations");
      const stationsData = await requestData("weatherStationsData");
      return concatData(stationsResponse.weatherStations, stationsData);
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

  return (
    <APIContext.Provider value={{ isLoading, weatherData, getWeatherData, roadData, getRoadData }}>
      {children}
    </APIContext.Provider>
  );
};
