import * as React from "react"
import { useState, useEffect } from "react"
import { Marker } from "react-leaflet"
import L from "leaflet"
import { requestData } from "../../../api/api"
import { IStation } from "../../../api/api-types"
import { MapMarker } from "../../../global/values"
import WeatherPopup from "./WeatherPopup/weather-popup"
import Loader from "../../Loader/loader";

const WeatherLayer: React.FC = () => {
  const [stations, getStations] = useState<[]>([])

  useEffect(() => {
    const data = getData()
    data.then(res => {
      getStations(res)
    })
  }, [])

  const getData = async () => {
    const stations = await requestData("weatherStations")
    const stationsData = await requestData("weatherStationsData")
    return concatData(stations, stationsData)
  }

  const concatData = (stations: any, stationsData: []) => {
    const wStations = stations.weatherStations
    return wStations.map((item: any) => {
      const matched = stationsData.filter((s: any) => s.weatherStationId === item.id)
      return Object.assign({}, item, matched[0])
    })
  }

  const convertCoords = (coords: [number, number]) => {
    return new L.LatLng(coords[1], coords[0])
  }
  const renderWeatherStations = () => {
    const stationList: IStation[] = stations
    return stationList.map((s: IStation) => {
      const location = s.location.coordinates
      return (
        <Marker position={convertCoords(location)} key={s.id} icon={MapMarker}>
          <WeatherPopup
            id={s.weatherStationId}
            street={s.street}
            airTemperature={s.airTemperature}
            surfaceTemperature={s.surfaceTemperature}
            windDirection={s.windDirection}
          />
        </Marker>
      )
    })
  }

  return <>{stations.length ? renderWeatherStations() : <Loader />}</>
}

export default WeatherLayer
