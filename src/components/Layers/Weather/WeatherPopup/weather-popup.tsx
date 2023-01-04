import * as React from "react";
import { Popup } from "react-leaflet";
import WindArrow from "./WindArrow/wind-arrow";

interface IStationProps {
  id: number;
  street: string;
  airTemperature: number;
  surfaceTemperature: number;
  windDirection: number;
}

const WeatherPopup: React.FC<IStationProps> = ({
  id,
  street,
  airTemperature,
  surfaceTemperature,
  windDirection
}) => {
  return (
    <>
      <Popup>
        <p>Identyfikator stacji: {id || "Brak danych"}</p>
        <p>Lokalizacja: {street || "Brak danych"}</p>
        <p>Temperatura powietrza: {airTemperature || "Brak danych"}</p>
        <p>Temperatura powierzchni: {surfaceTemperature || "Brak danych"}</p>
        <p>Kierunek wiatru: {<WindArrow direction={windDirection} /> || "Brak danych"}</p>
      </Popup>
    </>
  );
};

export default WeatherPopup;
