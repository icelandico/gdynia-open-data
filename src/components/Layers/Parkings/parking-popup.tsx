import React from "react";
import { Popup } from "react-leaflet";
import { useAutocompleteT } from "../../../translate";

interface IParkingProps {
  address: string;
  capacity: number;
  freePlaces: number;
  update: string;
}

const ParkingPopup: React.FC<IParkingProps> = ({ address, capacity, freePlaces, update }) => {
  const { T } = useAutocompleteT();

  const valueDisplay = (val: string | number | undefined) =>
    val !== undefined ? val : T("no data");

  return (
    <>
      <Popup>
        <p>
          {T("address")}: {valueDisplay(address)}{" "}
        </p>
        <p>
          {T("total slots")}: {valueDisplay(capacity)}
        </p>
        <p>
          {T("free slots")}: {valueDisplay(freePlaces)}
        </p>
        <p>
          {T("last update")}: {valueDisplay(update)}
        </p>
      </Popup>
    </>
  );
};

export default ParkingPopup;
