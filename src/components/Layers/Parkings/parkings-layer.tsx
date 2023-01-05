import * as React from "react";
import { useEffect } from "react";
import { Marker } from "react-leaflet";
import { ParkingMarker } from "../../../global/values";
import ParkingPopup from "./parking-popup";
import Loader from "../../Loader/loader";
import { convertCoords } from "../../../utils/coords";
import { useAPI } from "../../../context/useAPI";

const ParkingsLayer: React.FC = () => {
  const { isLoading, parkingsData, getParkingsData } = useAPI();

  useEffect(() => {
    getParkingsData();
  }, []);

  const renderParkingPlaces = () => {
    return parkingsData.map(parking => {
      const location = parking.location.coordinates;
      return (
        <Marker position={convertCoords(location)} key={parking.id} icon={ParkingMarker}>
          <ParkingPopup
            address={parking.address}
            capacity={parking.capacity}
            freePlaces={parking.freePlaces}
            update={parking.insertTime}
          />
        </Marker>
      );
    });
  };

  return <>{!isLoading ? renderParkingPlaces() : <Loader />}</>;
};

export default ParkingsLayer;
