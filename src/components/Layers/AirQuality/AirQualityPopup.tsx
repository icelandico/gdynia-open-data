import React from "react";
import { Popup } from "react-leaflet";
import { useAutocompleteT } from "../../../translate";

interface IAirQualityProps {
  address: string;
  station: string;
  state: string;
  PM25: number;
  PM10: number;
}

const AirQualityPopup: React.FC<IAirQualityProps> = ({ address, station, state, PM25, PM10 }) => {
  const { T } = useAutocompleteT();

  const valueDisplay = (val: string | number | undefined) =>
    val !== undefined ? val : "Brak danych";

  return (
    <>
      <Popup>
        <p>
          {T("address")}: {valueDisplay(address)}{" "}
        </p>
        <p>
          {T("station")}: {valueDisplay(station)}{" "}
        </p>
        <p>
          {T("air quality")}: {valueDisplay(state)}
        </p>
        <p>
          {T("pm25")}: {valueDisplay(PM25)} µg/m3
        </p>
        <p>
          {T("pm10")}: {valueDisplay(PM10)} µg/m3
        </p>
      </Popup>
    </>
  );
};

export default AirQualityPopup;
