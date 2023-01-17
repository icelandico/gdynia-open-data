import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { convertCoords } from "../../../utils/coords";
import DotIndicator from "./DotIndicator";
import Loader from "../../Loader/loader";
import { ITransportStops } from "../../../types/api";
import { useAPI } from "../../../context/useAPI";
import { getLineNumber } from "../../../utils/busLine";
import { useAutocompleteT } from "../../../translate";

interface ITransportStopMarkerProps {
  stopData: ITransportStops;
  location: [number, number];
}

const TransportStopMarker: React.FC<ITransportStopMarkerProps> = ({ stopData, location }) => {
  const { isLoading, transportStopDelay, getTransportStopDelay, transportLines } = useAPI();
  const { T } = useAutocompleteT();

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
        <strong style={{ display: "inline-block", marginBottom: "16px" }}>
          {T("stop name")}: {stopData.stopName}{" "}
        </strong>
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
            <span>
              {T("delay")}: {!transportStopDelay.length && <span>{T("no delays")}</span>}
            </span>
            <DotIndicator type={transportStopDelay.length ? "negative" : "positive"} />
          </div>
          <div>
            {transportStopDelay.map(row => {
              return (
                <div style={{ marginBottom: "7px" }} key={`${row.id}-${row.vehicleId}`}>
                  <span>
                    {T("line")}: {getLineNumber(transportLines, row.routeId)},{" "}
                  </span>
                  <span>
                    {T("estimated time")}: {row.estimatedTime}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {isLoading && <Loader opaque />}
      </Popup>
    </Marker>
  );
};

export default React.memo(TransportStopMarker);
