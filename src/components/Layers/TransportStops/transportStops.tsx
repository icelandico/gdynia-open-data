import React, { useEffect, useRef, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { MapMarker } from "../../../global/values";
import TransportPopup from "./TransportPopup";
import Loader from "../../Loader/loader";
import { convertCoords } from "../../../utils/coords";
import { useAPI } from "../../../context/useAPI";
import DotIndicator from "./DotIndicator";

const TransportStops: React.FC = () => {
  const {
    isLoading,
    transportStops,
    getTransportStops,
    getTransportStopDelay,
    transportStopDelay
  } = useAPI();
  const [refReady, setRefReady] = useState(false);
  const popupRef: any = useRef();
  const map = useMap();

  useEffect(() => {
    if (refReady) {
      map.openPopup(popupRef);
    }
  }, [refReady, map]);

  useEffect(() => {
    getTransportStops();
  }, []);

  const renderTransportStops = () => {
    return transportStops.map(stop => {
      const location: [number, number] = [parseFloat(stop.stopLon), parseFloat(stop.stopLat)];
      return (
        <>
          <Marker
            position={convertCoords(location)}
            key={stop.stopId}
            eventHandlers={{
              click: () => {
                getTransportStopDelay(stop.stopId.toString());
              }
            }}
            icon={
              new L.DivIcon({
                html: `<div style='width: 10px; height: 10px; background-color: #0081C9'></div>`
              })
            }
          >
            <Popup>
              <p>Nazwa: {stop.stopName} </p>
              {transportStopDelay && (
                <div className="delay-data-container">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "15px"
                    }}
                  >
                    <span>Opóźnienia: {!transportStopDelay.length && <span>Brak</span>}</span>
                    <DotIndicator type={transportStopDelay.length ? "negative" : "positive"} />
                  </div>
                  <div>
                    {transportStopDelay.map(row => {
                      return (
                        <div style={{ marginBottom: "7px" }}>
                          <span>Linia: {row.routeId}, {" "}</span>
                          <span>Czas przyjazdu: {row.estimatedTime}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {isLoading && <Loader />}
            </Popup>
          </Marker>
        </>
      );
    });
  };

  return <>{renderTransportStops()}</>;
};

export default TransportStops;
