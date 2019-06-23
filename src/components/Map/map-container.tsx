import * as React from "react"
import { useState, useEffect } from "react"
import MapStyles from "./../Map/map-container-styles"
import "rbx/index.css"
import classNames from "classnames"
import { useStore } from "effector-react"
import { activeLayer } from "../../store/app-store"
import { Map, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"
import values from "../../global/values"
import { weatherStations, weatherStationsData } from "../../api/api"
import { IStation } from "../../api/api-types"
import WeatherPopup from "../Layers/Weather/WeatherPopup/weather-popup"

const MapContainer: React.FC = (IMap) => {

  const layer = useStore(activeLayer)
  const [mapZoom] = useState<number>(12)
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
      return { ...item, ...(matched[0] as Object) }
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
        <Marker position={convertCoords(location)} key={s.id} id={3}>
          <WeatherPopup id={s.weatherStationId} street={s.street} airTemperature={s.airTemperature} />
        </Marker>
      )
    }))
  }

  const position = values.centerCoordinates

  return (
    <div>
      <p>{layer}</p>
      <Map
        center={position}
        zoom={mapZoom}
        className={MapStyles.main}
        style={{ height: "80vh" }} // Workaround for correct map display
      >
        <TileLayer
          attribution={values.attribution}
          url={values.tileSource}
          ext={values.ext}
        />
        {renderWeatherStations()}
      </Map>
    </div>
  )
}


export default MapContainer
