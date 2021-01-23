import React from "react";
import { useState, useEffect } from "react";
import L from "leaflet";
import { Polyline } from "react-leaflet";
import { roadSegments, roadSegmentsData } from "../../../api/api";

const RoadSegmentsLayer: React.FC<any> = () => {
  const [roads, setRoads] = useState<[]>([]);

  useEffect(() => {
    const data = getData();
    data.then((res: any) => {
      setRoads(res);
    });
  }, []);

  const getData = async () => {
    const roads = await roadSegments;
    const roadsData = await roadSegmentsData;
    return concatData(roads["road_segments"], roadsData);
  };

  const concatData = (roads: [], roadsData: []) => {
    return roadsData.map(roadData => {
      const matched = roads.filter(
        (roadSegment: any) => roadSegment.id === roadData["roadSegmentId"]
      );
      return Object.assign({}, roadData, matched[0]);
    });
  };

  const convertCoords = (coords: number[][]) => {
    return coords.map(
      (coordSet: number[]) => new L.LatLng(coordSet[1], coordSet[0])
    );
  };

  const intensityColors = (intensity: number) => {
    if (intensity < 500) {
      return "#27ae60";
    } else if (intensity < 1000) {
      return "#16a085";
    } else if (intensity < 2000) {
      return "#d35400";
    } else if (intensity < 3000) {
      return "#c0392b";
    } else {
      return "yellow";
    }
  };

  const renderRoadsSegments = (): JSX.Element => {
    const roadsList: any = roads;
    return roadsList.map((s: any) => {
      const coords = s.geometry.coordinates;
      return (
        <Polyline
          positions={convertCoords(coords)}
          color={intensityColors(s.intensity)}
        />
      );
    });
  };

  return <>{renderRoadsSegments()}</>;
};

export default RoadSegmentsLayer;
