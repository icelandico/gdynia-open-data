import * as React from "react";
import { useEffect } from "react";
import { Marker } from "react-leaflet";
import { CameraMarker } from "../../../global/mapMetadata";
import Loader from "../../Loader/loader";
import { convertCoords } from "../../../utils/coords";
import { useAPI } from "../../../context/useAPI";
import CameraPopup from "./CameraPopup";

const CamerasLayer = () => {
  const { isLoading, camerasData, getCamerasData } = useAPI();

  useEffect(() => {
    getCamerasData();
  }, []);

  const renderCamerasData = () => {
    return camerasData.map(camera => {
      const location = camera.location.coordinates;
      return (
        <Marker position={convertCoords(location)} key={camera.id} icon={CameraMarker}>
          <CameraPopup camera={camera} />
        </Marker>
      );
    });
  };

  return <>{!isLoading ? renderCamerasData() : <Loader />}</>;
};

export default CamerasLayer;
