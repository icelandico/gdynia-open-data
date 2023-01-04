import * as React from "react";
import { useState, useEffect } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import { IParking } from "../../../api/api-types";
import { requestData } from "../../../api/api";
import { ParkingMarker } from "../../../global/values";
import ParkingPopup from "./parking-popup";
import Loader from "../../Loader/loader";

const ParkingsLayer: React.FC = () => {
  const [parkings, getParkings] = useState<[]>([]);

  useEffect(() => {
    const data = getData();
    data.then(res => {
      getParkings(res);
    });
  }, []);

  const getData = async () => {
    const parkings = await requestData("parkings");
    const parkingsData = await requestData("parkingsData");
    return concatData(parkings, parkingsData);
  };

  const concatData = (parkings: any, parkingsData: []) => {
    const wStations = parkings.parkings;
    return wStations.map((item: any) => {
      const matched = parkingsData.filter((s: any) => s.parkingId === item.id);
      return { ...item, ...(matched[0] as Record<string, any>) };
    });
  };

  const convertCoords = (coords: [number, number]) => {
    return new L.LatLng(coords[1], coords[0]);
  };

  const renderParkingPlaces = () => {
    const parkingsList: IParking[] = parkings;
    return parkingsList.map((s: IParking) => {
      const location = s.location.coordinates;
      return (
        <Marker
          position={convertCoords(location)}
          key={s.id}
          icon={ParkingMarker}
        >
          <ParkingPopup
            id={s.id}
            address={s.address}
            capacity={s.capacity}
            freePlaces={s.freePlaces}
            update={s.insertTime}
          />
        </Marker>
      );
    });
  };

  return <>{parkings.length ? renderParkingPlaces() : <Loader />}</>;
};

export default ParkingsLayer;
