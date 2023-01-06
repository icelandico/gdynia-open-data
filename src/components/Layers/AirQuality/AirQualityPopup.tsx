import React from "react";
import { Popup } from "react-leaflet";

interface IAirQualityProps {
  address: string;
  station: string;
  state: string;
  PM25: number;
  PM10: number;
}

const AirQualityPopup: React.FC<IAirQualityProps> = ({ address, station, state, PM25, PM10 }) => {
  const valueDisplay = (val: string | number | undefined) =>
    val !== undefined ? val : "Brak danych";

  return (
    <>
      <Popup>
        <p>Adres: {valueDisplay(address)} </p>
        <p>Stacja: {valueDisplay(station)} </p>
        <p>Stan: {valueDisplay(state)}</p>
        <p>PM2.5: {valueDisplay(PM25)} µg/m3</p>
        <p>PM10: {valueDisplay(PM10)} µg/m3</p>
      </Popup>
    </>
  );
};

export default AirQualityPopup;
