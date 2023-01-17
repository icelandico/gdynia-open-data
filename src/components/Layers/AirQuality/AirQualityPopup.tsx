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
    val !== undefined ? val : T("no data");

  return (
    <>
      <Popup>
        <strong className="popup__line">
          {T("address")}: {valueDisplay(address)}{" "}
        </strong>
        <strong className="popup__line">
          {T("station")}: {valueDisplay(station)}{" "}
        </strong>
        <strong className="popup__line">
          {T("air quality")}: {valueDisplay(state)}
        </strong>
        <strong className="popup__line">
          {T("pm25")}: {valueDisplay(PM25)} µg/m3
        </strong>
        <strong className="popup__line">
          {T("pm10")}: {valueDisplay(PM10)} µg/m3
        </strong>
      </Popup>
    </>
  );
};

export default AirQualityPopup;
