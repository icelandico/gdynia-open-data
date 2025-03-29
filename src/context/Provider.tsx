import React, { createContext, useState, useCallback } from "react";
import {
  AirQualityStation,
  APICalls,
  ICamera,
  IRoadSegmentData,
  IRoadSegmentRequest,
  IStopDelay,
  ITransportLine,
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
  isError: boolean;
  weatherData: WeatherStation[];
  roadData: SegmentData[];
  parkingsData: Parking[];
  airQualityData: AirQualityStation[];
  transportStops: ITransportStops[];
  transportStopDelay: IStopDelay[];
  transportLines: ITransportLine[];
  camerasData: ICamera[];
  getWeatherData: () => void;
  getRoadData: () => void;
  getParkingsData: () => void;
  getAirQualityData: () => void;
  getTransportStopDelay: (stopId: string) => void;
  resetTransportStopDelay: () => void;
  getTransportStopsData: () => void;
  getCamerasData: () => void;
};

const initialContext = {
  isLoading: false,
  isError: false,
  weatherData: [],
  roadData: [],
  parkingsData: [],
  airQualityData: [],
  transportStops: [],
  transportStopDelay: [],
  transportLines: [],
  camerasData: [],
  getWeatherData: () => null,
  getRoadData: () => null,
  getParkingsData: () => null,
  getAirQualityData: () => null,
  resetTransportStopDelay: () => null,
  getTransportStopDelay: () => null,
  getTransportStopsData: () => null,
  getCamerasData: () => null
};

export const APIContext = createContext<APIContextType>(initialContext);

export const APIProvider: React.FC<any> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherStation[]>([]);
  const [roadData, setRoadData] = useState<SegmentData[]>([]);
  const [parkingsData, setParkingsData] = useState<Parking[]>([]);
  const [airQualityData, setAirQualityData] = useState<AirQualityStation[]>([]);
  const [transportStops, setTransportStops] = useState<ITransportStops[]>([]);
  const [transportStopDelay, setTransportStopDelay] = useState<IStopDelay[]>([]);
  const [transportLines, setTransportLines] = useState<ITransportLine[]>([]);
  const [camerasData, setCameras] = useState<ICamera[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const startFetching = () => {
    setLoading(true);
    setError(false);
  };

  const getWeatherData = async () => {
    startFetching();

    const getAsyncData = async () => {
      const stationsResponse = await requestData(APICalls.WEATHER_STATIONS);
      const stationsData = await requestData(APICalls.WEATHER_STATIONS_DATA);
      const parsedStations = JSON.parse(stationsResponse.contents);
      const parsedWeatherData = JSON.parse(stationsData.contents);
      return concatWeatherData(parsedStations.weatherStations, parsedWeatherData);
    };

    getAsyncData()
      .then(d => {
        setWeatherData(d);
        setLoading(false);
      })
      .catch(_ => handleError());
  };

  const getRoadData = async () => {
    if (roadData.length) return;
    startFetching();

    const getAsyncData = async () => {
      const segmentsPromises: [Promise<IRoadSegmentRequest>, Promise<IRoadSegmentData[]>] = [
        requestData(APICalls.ROADS),
        requestData(APICalls.ROADS_DATA)
      ];
      const allSegmentsResponse = await Promise.all(segmentsPromises);
      return concatRoadData(allSegmentsResponse[0].road_segments, allSegmentsResponse[1]);
    };

    getAsyncData()
      .then(d => {
        setRoadData(d);
        setLoading(false);
      })
      .catch(_ => handleError());
  };

  const getParkingsData = async () => {
    startFetching();

    const getAsyncData = async () => {
      const parkingsResponse = await requestData(APICalls.PARKINGS);
      const parkingCollectionData = await requestData(APICalls.PARKINGS_DATA);
      return concatParkingData(parkingsResponse.parkings, parkingCollectionData);
    };

    getAsyncData()
      .then(d => {
        setParkingsData(d);
        setLoading(false);
      })
      .catch(_ => handleError());
  };

  const getAirQualityData = async () => {
    startFetching();

    const getAsyncData = async () => {
      const airQualityStationsResponse = await requestData(APICalls.AIR_QUALITY_STATIONS);
      return concatAirQualityData(airQualityStationsResponse.stations, AIR_QUALITY_STATIONS);
    };

    getAsyncData()
      .then(d => {
        setAirQualityData(d);
        setLoading(false);
      })
      .catch(_ => handleError());
  };

  const getTransportStopDelay = useCallback(async (stopId: string) => {
    startFetching();
    const getAsyncData = async () => {
      return requestData(APICalls.TRANSPORT_STOPS_DELAY, stopId);
    };

    getAsyncData()
      .then(d => {
        setTransportStopDelay(d.delay);
        setLoading(false);
      })
      .catch(_ => handleError());
  }, []);

  const getTransportStopsData = useCallback(async () => {
    if (transportLines.length && transportStops.length) {
      return;
    }
    startFetching();

    const getAsyncData = () => {
      const transportDataPromises: [Promise<ITransportLine[]>, Promise<ITransportStops[]>] = [
        requestData(APICalls.TRANSPORT_LINES),
        requestData(APICalls.TRANSPORT_STOPS)
      ];
      return Promise.all(transportDataPromises);
    };

    getAsyncData()
      .then(d => {
        setTransportLines(d[0]);
        setTransportStops(d[1]);
        setLoading(false);
      })
      .catch(_ => handleError());
  }, []);

  const getCamerasData = async () => {
    startFetching();

    const getAsyncData = async () => {
      return requestData(APICalls.CAMERAS);
    };

    getAsyncData()
      .then(d => {
        setCameras(d.cameras);
        setLoading(false);
      })
      .catch(_ => handleError());
  };

  const resetTransportStopDelay = () => setTransportStopDelay([]);

  return (
    <APIContext.Provider
      value={{
        isLoading,
        isError,
        weatherData,
        getWeatherData,
        roadData,
        getRoadData,
        parkingsData,
        getParkingsData,
        airQualityData,
        getAirQualityData,
        transportStops,
        camerasData,
        getTransportStopsData,
        getTransportStopDelay,
        transportStopDelay,
        resetTransportStopDelay,
        transportLines,
        getCamerasData
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
