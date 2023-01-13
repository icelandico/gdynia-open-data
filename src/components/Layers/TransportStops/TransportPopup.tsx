import React, { useRef, useEffect } from "react";
import { Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useT } from "talkr";
import { IStopDelay } from "../../../types/api";
import Loader from "../../Loader/loader";

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
  const { T } = useT();

  const valueDisplay = (val: string | number | undefined) =>
    val !== undefined ? val : T("no data");
  return (
    <>
      <Popup position={coordinates}>
        <p>
          {T("stop name")}: {valueDisplay(stopName)}{" "}
        </p>
        <p>{T("delay")}: </p>
        {delayData && (
          <div className="delay-data-container">
            {delayData.map(row => {
              return (
                <>
                  <p>
                    {T("line")}: {row.routeId}
                  </p>
                  <p>
                    {T("estimated time")}: {row.estimatedTime}
                  </p>
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
