import React from "react";
import { Popup } from "react-leaflet";
import { IParking } from "../../../api/api-types";

interface IParkingProps {
  parking?: IParking;
  id: number;
  address: string;
  capacity: number;
  freePlaces: number;
  update: string;
}

const ParkingPopup: React.FC<IParkingProps> = props => {
  const { address, capacity, freePlaces, update } = props;

  const valueDisplay = (val: any) => (val !== undefined ? val : "Brak danych");

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
