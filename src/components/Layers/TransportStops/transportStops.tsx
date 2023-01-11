import React, { useEffect } from "react";
import { useAPI } from "../../../context/useAPI";
import TransportStopMarker from "./TransportStopMarker";
import Loader from "../../Loader/loader";

const TransportStops: React.FC = () => {
  const { isLoading, transportStops, getTransportStops, getTransportLines } = useAPI();

  useEffect(() => {
    getTransportStops();
    getTransportLines();
  }, []);

  if (isLoading && transportStops.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {transportStops.map(stop => {
        const location: [number, number] = [parseFloat(stop.stopLon), parseFloat(stop.stopLat)];
        return (
          <TransportStopMarker
            key={`${stop.stopId}-${stop.stopName}`}
            stopData={stop}
            location={location}
          />
        );
      })}
    </>
  );
};

export default TransportStops;
