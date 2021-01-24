import React from "react";
import { useState, useEffect } from "react";
import L from "leaflet";
import { Polyline } from "react-leaflet";
import { requestData } from "../../../api/api";

const RoadSegmentsLayer: React.FC<any> = () => {
  const [roads, setRoads] = useState<[]>([]);

  useEffect(() => {
    const data = getData();
    data.then((res: any) => {
      setRoads(res);
    });
  }, []);

  const getData = async () => {
    const roads = await requestData("roads")
    const roadsData = await requestData("roadsData");
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
      return "#1b700b";
    } else if (intensity < 1000) {
      return "#6bbe2a";
    } else if (intensity < 2000) {
      return "#dd7f48";
    } else if (intensity < 3000) {
      return "#942c23";
    } else {
      return "#b71540";
    }
  };

  const renderRoadsSegments = (): JSX.Element => {
    const roadsList: any = roads;
    return roadsList.map((s: any) => {
      const coords = s.geometry.coordinates;
      return (
        <Polyline
          key={s.id}
          positions={convertCoords(coords)}
          color={intensityColors(s.intensity)}
        />
      );
    });
  };

  return <>{renderRoadsSegments()}</>;
};

export default RoadSegmentsLayer;
