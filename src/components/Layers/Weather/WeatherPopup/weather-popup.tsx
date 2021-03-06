import * as React from "react";
import { Popup } from "react-leaflet";
import { IStation } from "../../../../api/api-types";
import WindArrow from "./WindArrow/wind-arrow";

interface IStationProps {
  station?: IStation;
  id: number;
  street: string;
  airTemperature: number;
  surfaceTemperature: number;
  windDirection: number;
}

const WeatherPopup: React.FC<IStationProps> = props => {
  const {
    id,
    street,
    airTemperature,
    surfaceTemperature,
    windDirection
  } = props;

  return (
    <>
      <Popup>
        <p>Identyfikator stacji: {id || "Brak danych"}</p>
        <p>Lokalizacja: {street || "Brak danych"}</p>
        <p>Temperatura powietrza: {airTemperature || "Brak danych"}</p>
        <p>Temperatura powierzchni: {surfaceTemperature || "Brak danych"}</p>
        <p>
          Kierunek wiatru:{" "}
          {<WindArrow direction={windDirection} /> || "Brak danych"}
        </p>
      </Popup>
    </>
  );
};

export default WeatherPopup;
