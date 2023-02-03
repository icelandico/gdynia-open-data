import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import WeatherLayer from "../Layers/Weather/weather-layer";
import ParkingsLayer from "../Layers/Parkings/parkings-layer";
import RoadSegmentsLayer from "../Layers/RoadSegments/road-segments-layer";
import AirQualityLayer from "../Layers/AirQuality/air-quality-layer";
import TransportStops from "../Layers/TransportStops/transportStops";
import { getCityBoundaries } from "../../constants/cityBoundaries";
import CamerasLayer from "../Layers/PublicCameras/cameras-layer";

const MapContent: React.FC<{ activeLayer: string }> = ({ activeLayer }) => {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      getCityBoundaries().map(c => {
        return [c[1], c[0]];
      })
    );
    map.fitBounds(bounds);
  }, []);

  const renderLayer = () => {
    switch (activeLayer) {
      case "weather":
        return <WeatherLayer />;
      case "parkings":
        return <ParkingsLayer />;
      case "traffic":
        return <RoadSegmentsLayer />;
      case "airQuality":
        return <AirQualityLayer />;
      case "transportStops":
        return <TransportStops />;
      case "cameras":
        return <CamerasLayer />;
      default:
        return <></>;
    }
  };

  return renderLayer();
};

export default MapContent;
