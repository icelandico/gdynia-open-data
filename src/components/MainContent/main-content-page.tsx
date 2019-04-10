import * as React from "react"
import MapStyles from "./main-content-page-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import values from "../../global/values"

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
    zoom: 12
  }

  render() {
    const position: [number, number] = [this.state.lat, this.state.long]
    return (
      <div>
        <Map
          center={position}
          zoom={this.state.zoom}
          className={MapStyles.main}
          style={{height: "90vh"}} // Workaround for correct map display
        >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={values.tileSource}
          ext={values.ext}
        />
        </Map>
      </div>

    )
  }
}

export default MapComponent
