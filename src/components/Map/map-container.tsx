import * as React from "react"
import { useState } from "react"
import { useStore } from "effector-react"
import { Map, TileLayer } from "react-leaflet"
import MapStyles from "./map-container-styles"
import { activeLayer } from "../../store/app-store"
import values from "../../global/values"
import WeatherLayer from "../Layers/Weather/weather-layer"
import ParkingsLayer from "../Layers/Parkings/parkings-layer"

const MapContainer: React.FC = () => {
  const layer = useStore(activeLayer)
  const [mapZoom] = useState<number>(13)

  const renderLayer = () => {
    switch (layer) {
      case "weather":
        return <WeatherLayer />
      case "parkings":
        return <ParkingsLayer />
      default:
        console.log("No layer chosen")
    }
  }
  const position = values.centerCoordinates

  return (
    <div>
      <Map
        center={position}
        zoom={mapZoom}
        className={MapStyles.main}
        style={{ height: "85vh" }}
      >
        <TileLayer attribution={values.attribution} url={values.tileSource} ext={values.ext} />
        {renderLayer()}
      </Map>
    </div>
  )
}

export default MapContainer
