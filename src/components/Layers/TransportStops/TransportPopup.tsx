import React, { useRef, useEffect } from "react";
import { Popup } from "react-leaflet";
import { IStopDelay } from "../../../types/api";
import Loader from "../../Loader/loader";
import { LatLngExpression } from "leaflet";

interface ITransportPopupProps {
  stopName: string;
  delayData: IStopDelay[];
  isLoading?: boolean;
  coordinates: LatLngExpression;
}

const TransportPopup: React.FC<ITransportPopupProps> = ({
  stopName,
  delayData,
  isLoading = false,
  coordinates
}) => {
  const valueDisplay = (val: string | number | undefined) =>
    val !== undefined ? val : "Brak danych";
  return (
    <>
      <Popup position={coordinates}>
        <p>Nazwa: {valueDisplay(stopName)} </p>
        <p>Opóźnienia: </p>
        {delayData && (
          <div className="delay-data-container">
            {delayData.map(row => {
              return (
                <>
                  <p>Linia: {row.routeId}</p>
                  <p>Czas przyjazdu: {row.estimatedTime}</p>
                </>
              );
            })}
          </div>
        )}
        {isLoading && <Loader />}
      </Popup>
    </>
  );
};

export default TransportPopup;
