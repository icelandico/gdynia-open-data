import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { convertCoords } from "../../../utils/coords";
import DotIndicator from "./DotIndicator";
import Loader from "../../Loader/loader";
import { ITransportStops } from "../../../types/api";
import { useAPI } from "../../../context/useAPI";

interface ITransportStopMarkerProps {
  stopData: ITransportStops;
  location: [number, number];
}

const TransportStopMarker: React.FC<ITransportStopMarkerProps> = ({ stopData, location }) => {
  const { isLoading, transportStopDelay, getTransportStopDelay } = useAPI();

  return (
    <Marker
      position={convertCoords(location)}
      eventHandlers={{
        click: () => {
          getTransportStopDelay(stopData.stopId.toString());
        }
      }}
      icon={
        new L.DivIcon({
          html: `<div style='width: 10px; height: 10px; background-color: #0081C9'></div>`
        })
      }
    >
      <Popup key={stopData.stopId}>
        <p>Nazwa: {stopData.stopName} </p>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "15px",
              minWidth: "130px"
            }}
          >
            <span>Opóźnienia: {!transportStopDelay.length && <span>Brak</span>}</span>
            <DotIndicator type={transportStopDelay.length ? "negative" : "positive"} />
          </div>
          <div>
            {transportStopDelay.map(row => {
              return (
                <div style={{ marginBottom: "7px" }} key={`${row.id}-${row.vehicleId}`}>
                  <span>Linia: {row.routeId}, </span>
                  <span>Czas przyjazdu: {row.estimatedTime}</span>
                </div>
              );
            })}
          </div>
        </div>
        {isLoading && <Loader />}
      </Popup>
    </Marker>
  );
};

export default React.memo(TransportStopMarker);
