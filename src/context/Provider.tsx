import React, { createContext, useState } from "react";
import {
  IWeatherStationData,
  IWeatherStation,
  WeatherStation,
  SegmentData,
  IRoadSegment,
  IRoadSegmentData,
  Parking,
  IParking,
  IParkingData
} from "../types/api";
import { requestData } from "../api/api";

type APIContextType = {
  isLoading: boolean;
  weatherData: WeatherStation[];
  roadData: SegmentData[];
  parkingsData: Parking[];
  getWeatherData: () => void;
  getRoadData: () => void;
  getParkingsData: () => void;
};

const initialContext = {
  isLoading: false,
  weatherData: [],
  roadData: [],
  parkingsData: [],
  getWeatherData: () => null,
  getRoadData: () => null,
  getParkingsData: () => null
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

const concatParkingData = (parkings: IParking[], parkingsData: IParkingData[]) => {
  return parkings.map(parking => {
    const matched = parkingsData.filter(s => s.parkingId === parking.id);
    return Object.assign({}, parking, matched[0]);
  });
};

export const APIProvider: React.FC<any> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherStation[]>([]);
  const [roadData, setRoadData] = useState<SegmentData[]>([]);
  const [parkingsData, setParkingsData] = useState<Parking[]>([]);
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

  return (
    <APIContext.Provider
      value={{
        isLoading,
        weatherData,
        getWeatherData,
        roadData,
        getRoadData,
        parkingsData,
        getParkingsData
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
