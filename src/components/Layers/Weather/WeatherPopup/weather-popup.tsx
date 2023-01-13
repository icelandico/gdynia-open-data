import * as React from "react";
import { Popup } from "react-leaflet";
import { useT } from "talkr";
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
  const { T } = useT();
  return (
    <>
      <Popup>
        <p>
          {T("station id")}: {id || T("no data")}
        </p>
        <p>
          {T("location")}: {street || T("no data")}
        </p>
        <p>
          {T("air temperature")}: {airTemperature || T("no data")}
        </p>
        <p>
          {T("surface temperature")}: {surfaceTemperature || T("no data")}
        </p>
        <p>
          {T("wind direction")}: {<WindArrow direction={windDirection} /> || T("no data")}
        </p>
      </Popup>
    </>
  );
};

export default WeatherPopup;
