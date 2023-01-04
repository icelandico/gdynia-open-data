import * as React from "react";
import { useState, useEffect } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import { requestData } from "../../../api/api";
import { MapMarker } from "../../../global/values";
import WeatherPopup from "./WeatherPopup/weather-popup";
import Loader from "../../Loader/loader";
import { IWeatherStation, IWeatherStationData, WeatherStation } from "../../../types/api";

const concatData = (weatherStations: IWeatherStation[], stationsData: IWeatherStationData[]) => {
  return weatherStations.map(item => {
    const matched = stationsData.filter(s => s.weatherStationId === item.id);
    return Object.assign({}, item, matched[0]);
  });
};

const WeatherLayer: React.FC = () => {
  const [stations, getStations] = useState<WeatherStation[]>([]);

  const getData = async () => {
    const stationsResponse = await requestData("weatherStations");
    const stationsData = await requestData("weatherStationsData");
    return concatData(stationsResponse.weatherStations, stationsData);
  };

  useEffect(() => {
    const data = getData();
    data.then(res => getStations(res));
  }, []);

  const convertCoords = (coords: [number, number]) => {
    return new L.LatLng(coords[1], coords[0]);
  };
  const renderWeatherStations = () => {
    return stations.map(weatherStation => {
      const location = weatherStation.location.coordinates;
      return (
        <Marker position={convertCoords(location)} key={weatherStation.id} icon={MapMarker}>
          <WeatherPopup
            id={weatherStation.weatherStationId}
            street={weatherStation.street}
            airTemperature={weatherStation.airTemperature}
            surfaceTemperature={weatherStation.surfaceTemperature}
            windDirection={weatherStation.windDirection}
          />
        </Marker>
      );
    });
  };

  return <>{stations.length ? renderWeatherStations() : <Loader />}</>;
};

export default WeatherLayer;
