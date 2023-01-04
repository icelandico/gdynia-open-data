import React, { useState, useEffect } from "react";
import L from "leaflet";
import { Polyline } from "react-leaflet";
import { requestData } from "../../../api/api";
import Loader from "../../Loader/loader";

interface IRoadSegment {
  id: number;
  geometry: {
    type: string;
    crs: {
      type: string;
      properties: {
        name: string;
      };
    };
    coordinates: number[][];
    lastUpdate: string;
  };
}

interface IRoadSegmentData {
  eventId: number;
  roadSegmentId: number;
  intensity: number;
  measureTime: string;
}

type SegmentData = IRoadSegmentData & IRoadSegment;

const concatData = (segments: IRoadSegment[], roadsData: IRoadSegmentData[]) => {
  return roadsData.map(roadData => {
    const matched = segments.filter(roadSegment => roadSegment.id === roadData.roadSegmentId);
    return Object.assign({}, roadData, matched[0]);
  });
};

const RoadSegmentsLayer: React.FC = () => {
  const [roads, setRoads] = useState<SegmentData[]>([]);

  const getData = async () => {
    const allSegments = await requestData("roads");
    const segmentsData = await requestData("segmentsData");
    return concatData(allSegments.road_segments, segmentsData);
  };

  useEffect(() => {
    const data = getData();
    data.then(res => setRoads(res));
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
    return roads.map(segment => {
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

  return <>{roads.length ? renderRoadsSegments() : <Loader />}</>;
};

export default RoadSegmentsLayer;
