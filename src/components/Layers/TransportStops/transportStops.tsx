import * as React from "react";
import { useEffect } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import { MapMarker } from "../../../global/values";
import TransportPopup from "./TransportPopup";
import Loader from "../../Loader/loader";
import { convertCoords } from "../../../utils/coords";
import { useAPI } from "../../../context/useAPI";
import AirQualityPopup from "../AirQuality/AirQualityPopup";

const TransportStops: React.FC = () => {
  const { isLoading, transportStops, getTransportStops } = useAPI();

  useEffect(() => {
    getTransportStops();
  }, []);

  const renderTransportStops = () => {
    return transportStops.map(stop => {
      const location: [number, number] = [parseFloat(stop.stopLon), parseFloat(stop.stopLat)];
      return (
        <Marker
          position={convertCoords(location)}
          key={stop.stopId}
          icon={
            new L.DivIcon({
              html: `<div style='width: 10px; height: 10px; background-color: #0081C9'></div>`
            })
          }
        >
          <TransportPopup stopName={stop.stopName} />
        </Marker>
      );
    });
  };

  return <>{!isLoading ? renderTransportStops() : <Loader />}</>;
};

export default TransportStops;
