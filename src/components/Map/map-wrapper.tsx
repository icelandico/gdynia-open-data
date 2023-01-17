import React, { useEffect, useState } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import L from "leaflet";
import mapMetadata from "../../global/mapMetadata";
import "./map-container.scss";
import MapContent from "../MapContent/MapContent";
import { getCityBoundaries } from "../../constants/cityBoundaries";

const MapWrapper: React.FC<{ activeLayer: string }> = ({ activeLayer }) => {
  const [cityBoundaries, setBoundaries] = useState<number[][]>([]);
  const position = mapMetadata.centerCoordinates;

  useEffect(() => {
    setBoundaries(getCityBoundaries());
  }, []);

  const convertCoords = (coords: number[][]) => {
    return coords.map((coordSet: number[]) => new L.LatLng(coordSet[1], coordSet[0]));
  };

  return (
    <div className="map__container">
      <MapContainer center={position} className="map" style={{ height: "100vh" }}>
        <TileLayer attribution={mapMetadata.attribution} url={mapMetadata.tileSource} />
        <Polygon
          positions={convertCoords(cityBoundaries)}
          color="#797676"
          fillColor="transparent"
        />
        <MapContent activeLayer={activeLayer} />
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
