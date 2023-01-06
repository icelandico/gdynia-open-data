import * as React from "react";
import { useEffect } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import Loader from "../../Loader/loader";
import { convertCoords } from "../../../utils/coords";
import { useAPI } from "../../../context/useAPI";
import AirQualityPopup from "./AirQualityPopup";

const AirQualityLayer: React.FC = () => {
  const { isLoading, airQualityData, getAirQualityData } = useAPI();

  useEffect(() => {
    getAirQualityData();
  }, []);

  const renderAirQualityStations = () => {
    return airQualityData.map(station => {
      return (
        <Marker
          position={convertCoords(station.coordinates)}
          key={station.address}
          icon={
            new L.DivIcon({
              html: `<div style='width: 30px; height: 30px; border-radius: 50%; background-color: ${station.color}'></div>`,
              iconSize: [30, 30]
            })
          }
        >
          <AirQualityPopup
            address={station.address}
            station={station.station}
            state={station.state}
            PM25={station["PM25.val"]}
            PM10={station["PM10.val"]}
          />
        </Marker>
      );
    });
  };

  return <>{!isLoading ? renderAirQualityStations() : <Loader />}</>;
};

export default AirQualityLayer;
