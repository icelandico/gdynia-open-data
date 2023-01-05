import React, { createContext, useState, useEffect, useContext } from "react";
import { IWeatherStationData, IWeatherStation, WeatherStation } from "../types/api";
import { requestData } from "../api/api";

type APIContextType = {
  isLoading: boolean;
  weatherData: WeatherStation[];
  getWeatherData: () => void;
};

const initialContext = {
  isLoading: false,
  weatherData: [],
  getWeatherData: () => null
};

export const APIContext = createContext<APIContextType>(initialContext);

const concatData = (weatherStations: IWeatherStation[], stationsData: IWeatherStationData[]) => {
  return weatherStations.map(item => {
    const matched = stationsData.filter(s => s.weatherStationId === item.id);
    return Object.assign({}, item, matched[0]);
  });
};

export const APIProvider: React.FC<any> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherStation[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getWeatherData = async () => {
    setLoading(true);

    const getAsyncData = async () => {
      const stationsResponse = await requestData("weatherStations");
      const stationsData = await requestData("weatherStationsData");
      return concatData(stationsResponse.weatherStations, stationsData);
    };

    getAsyncData().then(d => setWeatherData(d));
    setLoading(false);
  };

  return (
    <APIContext.Provider value={{ isLoading, weatherData, getWeatherData }}>
      {children}
    </APIContext.Provider>
  );
};
