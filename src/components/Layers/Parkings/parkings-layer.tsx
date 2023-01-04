import * as React from "react";
import { useState, useEffect } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import { requestData } from "../../../api/api";
import { ParkingMarker } from "../../../global/values";
import ParkingPopup from "./parking-popup";
import Loader from "../../Loader/loader";
import { IParking, IParkingData, Parking } from "../../../types/api";

const concatData = (parkings: IParking[], parkingsData: IParkingData[]) => {
  return parkings.map(parking => {
    const matched = parkingsData.filter(s => s.parkingId === parking.id);
    return Object.assign({}, parking, matched[0]);
  });
};

const ParkingsLayer: React.FC = () => {
  const [parkings, setParkings] = useState<Parking[]>([]);

  const getData = async () => {
    const parkingsResponse = await requestData("parkings");
    const parkingsData = await requestData("parkingsData");
    return concatData(parkingsResponse.parkings, parkingsData);
  };

  useEffect(() => {
    const data = getData();
    data.then(res => setParkings(res));
  }, []);

  const convertCoords = (coords: [number, number]) => {
    return new L.LatLng(coords[1], coords[0]);
  };

  const renderParkingPlaces = () => {
    return parkings.map(parking => {
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

  return <>{parkings.length ? renderParkingPlaces() : <Loader />}</>;
};

export default ParkingsLayer;
