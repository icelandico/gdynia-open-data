import * as React from "react"
import MapStyles from "./map-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

interface IMapProps {
}

interface MapState {
  lat: number
  long: number
  zoom: number
}

class MapComponent extends React.Component<IMapProps, MapState> {

  state = {
    lat: 54.5,
    long: 18.5,
    zoom: 13
  }

  render() {
    const position: [number, number] = [this.state.lat, this.state.long]
    return (
      <div>
        <Map
          center={position}
          zoom={this.state.zoom}
          className={MapStyles.main}
          style={{height: "90vh"}}
        >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}"
          ext="png"
        />
        </Map>
      </div>

    )
  }
}

export default MapComponent
