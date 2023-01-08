import React from "react";
import { Popup } from "react-leaflet";

interface ITransportPopupProps {
  stopName: string;
}

const TransportPopup: React.FC<ITransportPopupProps> = ({
  stopName,
}) => {
  const valueDisplay = (val: string | number | undefined) =>
    val !== undefined ? val : "Brak danych";

  return (
    <>
      <Popup>
        <p>Nazwa: {valueDisplay(stopName)} </p>
      </Popup>
    </>
  );
};

export default TransportPopup;
