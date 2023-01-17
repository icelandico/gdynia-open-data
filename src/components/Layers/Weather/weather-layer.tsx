import * as React from "react";
import { useEffect } from "react";
import { Marker } from "react-leaflet";
import { MapMarker } from "../../../global/mapMetadata";
import WeatherPopup from "./WeatherPopup/weather-popup";
import Loader from "../../Loader/loader";
import { convertCoords } from "../../../utils/coords";
import { useAPI } from "../../../context/useAPI";

const WeatherLayer: React.FC = () => {
  const { isLoading, weatherData, getWeatherData } = useAPI();

  useEffect(() => {
    getWeatherData();
  }, []);

  const renderWeatherStations = () => {
    return weatherData.map(weatherStation => {
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

  return <>{!isLoading ? renderWeatherStations() : <Loader />}</>;
};

export default WeatherLayer;
