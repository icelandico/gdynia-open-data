import React, { useEffect } from "react";
import L from "leaflet";
import { Polyline } from "react-leaflet";
import Loader from "../../Loader/loader";
import { useAPI } from "../../../context/useAPI";

const RoadSegmentsLayer: React.FC = () => {
  const { isLoading, roadData, getRoadData } = useAPI();

  useEffect(() => {
    getRoadData();
  }, []);

  const convertCoords = (coords: number[][]) => {
    return coords.map((coordSet: number[]) => new L.LatLng(coordSet[1], coordSet[0]));
  };

  const intensityColors = (intensity: number) => {
    if (intensity < 500) {
      return "#1b700b";
    }
    if (intensity < 1000) {
      return "#6bbe2a";
    }
    if (intensity < 2000) {
      return "#dd7f48";
    }
    if (intensity < 3000) {
      return "#942c23";
    }
    return "#b71540";
  };

  const renderRoadsSegments = () => {
    return roadData.map(segment => {
      const coords = segment.geometry.coordinates;
      return (
        <Polyline
          key={segment.id}
          positions={convertCoords(coords)}
          color={intensityColors(segment.intensity)}
        />
      );
    });
  };

  return <>{!isLoading ? renderRoadsSegments() : <Loader />}</>;
};

export default RoadSegmentsLayer;
