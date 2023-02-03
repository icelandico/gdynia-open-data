import React from "react";
import { Popup } from "react-leaflet";
import { ICamera } from "../../../types/api";
import { useAutocompleteT } from "../../../translate";

interface ICameraPopupProps {
  camera: ICamera;
}

const CameraPopup = ({ camera }: ICameraPopupProps) => {
  const { T } = useAutocompleteT();

  return (
    <Popup position={camera.location.coordinates}>
      <p>
        {T("id")}: {camera.id}
      </p>
      <p>
        {T("location")}: {camera.name}
      </p>
    </Popup>
  );
};

export default CameraPopup;
