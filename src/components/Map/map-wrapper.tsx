import React, { useEffect, useState } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import L from "leaflet";
import values from "../../global/values";
import WeatherLayer from "../Layers/Weather/weather-layer";
import ParkingsLayer from "../Layers/Parkings/parkings-layer";
import "./map-container.scss";
import RoadSegmentsLayer from "../Layers/RoadSegments/road-segments-layer";
import boundaries from "../../geojson/boundaries.json";
import AirQualityLayer from "../Layers/AirQuality/air-quality-layer";
import TransportStops from "../Layers/TransportStops/transportStops";
import useMobileWidth from "../../utils/useMobileWidth";

interface IMapContainer {
  activeLayer: string;
}

const MapWrapper: React.FC<IMapContainer> = ({ activeLayer }) => {
  const [isMobile] = useMobileWidth();
  const [cityBoundaries, setBoundaries] = useState<number[][]>([]);
  console.log("MAP IS MOBILE", isMobile ? 5 : 12);
  useEffect(() => {
    const cityPolygon = boundaries.features[0].geometry.coordinates[0];
    setBoundaries(cityPolygon);
  });

  const convertCoords = (coords: number[][]) => {
    return coords.map((coordSet: number[]) => new L.LatLng(coordSet[1], coordSet[0]));
  };

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
      default:
        return <></>;
    }
  };
  const position = values.centerCoordinates;

  return (
    <div className="map__container">
      <MapContainer
        center={position}
        zoom={isMobile ? 11 : 12}
        className="map"
        style={{ height: "100vh" }}
      >
        <TileLayer attribution={values.attribution} url={values.tileSource} />
        <Polygon
          positions={convertCoords(cityBoundaries)}
          color="#797676"
          fillColor="transparent"
        />
        {renderLayer()}
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
