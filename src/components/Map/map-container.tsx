import React from "react";
import { useState } from "react";
import { useStore } from "effector-react";
import { Map, TileLayer } from "react-leaflet";
import { activeLayer } from "../../store/app-store";
import values from "../../global/values";
import WeatherLayer from "../Layers/Weather/weather-layer";
import ParkingsLayer from "../Layers/Parkings/parkings-layer";
import "./map-container.scss";
import RoadSegmentsLayer from "../Layers/RoadSegments/road-segments-layer";

const MapContainer: React.FC = () => {
  const layer = useStore(activeLayer);
  const [mapZoom] = useState<number>(12);

  const renderLayer = () => {
    switch (layer) {
      case "weather":
        return <WeatherLayer />;
      case "parkings":
        return <ParkingsLayer />;
      case "traffic":
        return <RoadSegmentsLayer />;
      default:
        return <></>;
    }
  };
  const position = values.centerCoordinates;

  return (
    <div className="map__container">
      <Map
        center={position}
        zoom={mapZoom}
        className="map"
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution={values.attribution}
          url={values.tileSource}
          ext={values.ext}
        />
        {renderLayer()}
      </Map>
    </div>
  );
};

export default MapContainer;
