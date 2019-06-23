import * as React from "react"
import { useState } from "react"
import MapStyles from "./../Map/map-container-styles"
import "rbx/index.css"
import { useStore } from "effector-react"
import { activeLayer } from "../../store/app-store"
import { Map, TileLayer } from "react-leaflet"
import values from "../../global/values"
import WeatherLayer from "../Layers/Weather/weather-layer"

const MapContainer: React.FC = () => {

  const layer = useStore(activeLayer)
  const [mapZoom] = useState<number>(12)

  const renderLayer = () => {
    const selectedLayer = layer
    switch (selectedLayer) {
      case "weather":
        return <WeatherLayer />
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
        style={{ height: "80vh" }} // Workaround for correct map display
      >
        <TileLayer
          attribution={values.attribution}
          url={values.tileSource}
          ext={values.ext}
        />
        {renderLayer()}
      </Map>
    </div>
  )
}

export default MapContainer
