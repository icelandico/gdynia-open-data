import * as React from "react"
import { useState, useEffect } from "react"
import "rbx/index.css"
import { Marker } from "react-leaflet"
import L from "leaflet"
import { weatherStations, weatherStationsData } from "../../../api/api"
import { IStation } from "../../../api/api-types"
import WeatherPopup from "./WeatherPopup/weather-popup"
import {MapMarker} from "./../../../global/values"

const WeatherLayer: React.FC = () => {

  const [stations, getStations] = useState<[]>([])

  useEffect(() => {
    const data = getData()
    data.then(res => {
      getStations(res)
    })
  }, [])

  const getData = async () => {
    const stations = await weatherStations
    const stationsData = await weatherStationsData
    return concatData(stations, stationsData)
  }

  const concatData = (stations: any, stationsData: []) => {
    const wStations = stations.weatherStations
    const wData = wStations.map((item: any) => {
      const matched = stationsData.filter((s: any) => s.weatherStationId === item.id)
      return { ...item, ...(matched[0], Object) }
    })
    return wData
  }

  const convertCoords = (coords: [number, number]) => {
    return new L.LatLng(coords[1], coords[0])
  }

  const renderWeatherStations = () => {
    const stationList: IStation[] = stations
    return (stationList.map((s: IStation) => {
      const location = s.location.coordinates
      return (
        <Marker position={convertCoords(location)} key={s.id} id={3} icon={MapMarker}>
          <WeatherPopup id={s.weatherStationId} street={s.street} airTemperature={s.airTemperature} />
        </Marker>
      )
    }))
  }

  return (
    <>
      {
        renderWeatherStations()
      }
    </>
  )
}


export default WeatherLayer
