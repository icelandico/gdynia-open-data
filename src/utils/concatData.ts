import {
  IAirQualityStation,
  IAirStationCoordinates,
  IParking,
  IParkingData,
  IRoadSegment,
  IRoadSegmentData,
  IWeatherStation,
  IWeatherStationData
} from "../types/api";

export const concatWeatherData = (
  weatherStations: IWeatherStation[],
  stationsData: IWeatherStationData[]
) => {
  return weatherStations.map(item => {
    const matched = stationsData.filter(s => s.weatherStationId === item.id);
    return Object.assign({}, item, matched[0]);
  });
};

export const concatRoadData = (segments: IRoadSegment[], roadsData: IRoadSegmentData[]) => {
  return roadsData.map(item => {
    const matched = segments.filter(roadSegment => roadSegment.id === item.roadSegmentId);
    return Object.assign({}, item, matched[0]);
  });
};

export const concatParkingData = (parkings: IParking[], parkingsData: IParkingData[]) => {
  return parkings.map(item => {
    const matched = parkingsData.filter(s => s.parkingId === item.id);
    return Object.assign({}, item, matched[0]);
  });
};

export const concatAirQualityData = (
  airStationsData: IAirQualityStation[],
  stationsCoordinates: IAirStationCoordinates[]
) => {
  return airStationsData.map(item => {
    const matched = stationsCoordinates.filter(s => s.address.trim() === item.address.trim());
    return Object.assign({}, item, matched[0]);
  });
};
