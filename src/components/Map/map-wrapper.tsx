import React, { useEffect } from "react";
import { useState } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import values from "../../global/values";
import WeatherLayer from "../Layers/Weather/weather-layer";
import ParkingsLayer from "../Layers/Parkings/parkings-layer";
import "./map-container.scss";
import RoadSegmentsLayer from "../Layers/RoadSegments/road-segments-layer";
import boundaries from "../../geojson/boundaries.json";
import L from "leaflet";

interface IMapContainer {
  activeLayer: string;
}

const MapWrapper: React.FC<IMapContainer> = ({ activeLayer }) => {
  const [cityBoundaries, setBoundaries] = useState<number[][]>([])
  const [mapZoom] = useState<number>(12);

  useEffect(() => {
    const cityPolygon = boundaries.features[0].geometry.coordinates[0];
    setBoundaries(cityPolygon)
  });

  const convertCoords = (coords: number[][]) => {
    return coords.map(
      (coordSet: number[]) => new L.LatLng(coordSet[1], coordSet[0])
    );
  };

  const renderLayer = () => {
    switch (activeLayer) {
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
      <MapContainer
        center={position}
        zoom={mapZoom}
        className="map"
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution={values.attribution}
          url={values.tileSource}
        />
        <Polygon positions={convertCoords(cityBoundaries)} color="#797676" fillColor="transparent" />
        {renderLayer()}
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
