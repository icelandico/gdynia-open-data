import React from "react";
import { Popup } from "react-leaflet";

interface IParkingProps {
  address: string;
  capacity: number;
  freePlaces: number;
  update: string;
}

const ParkingPopup: React.FC<IParkingProps> = ({ address, capacity, freePlaces, update }) => {
  const valueDisplay = (val: string | number | undefined) =>
    val !== undefined ? val : "Brak danych";

  return (
    <>
      <Popup>
        <p>Adres: {valueDisplay(address)} </p>
        <p>Ogółem miejsc: {valueDisplay(capacity)}</p>
        <p>Wolnych miejsc: {valueDisplay(freePlaces)}</p>
        <p>Ostatnia aktualizacja: {valueDisplay(update)}</p>
      </Popup>
    </>
  );
};

export default ParkingPopup;
