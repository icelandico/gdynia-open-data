import * as React from "react"
import MapStyles from "./../Map/map-container-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import values from "../../global/values"
import { weatherStations } from "../../api/api"

interface IMapProps {}

interface MapState {
  zoom: number
  stations: any
  stn: any
}

class MapContainer extends React.Component<IMapProps, MapState> {
  state = {
    zoom: 12,
    stations: [],
    stn: [1, 2, 3]
  }

  getData = async () => {
    const stations = await weatherStations
    return stations
  }

  componentDidMount() {
    const data = this.getData()
    data.then(res => {
      this.setState({
        stn: res
      })
    })
  }

  render() {
    const position = values.centerCoordinates
    return (
      <div>
        <Map
          center={position}
          zoom={this.state.zoom}
          className={MapStyles.main}
          style={{ height: "80vh" }} // Workaround for correct map display
        >
          <TileLayer
            attribution={values.attribution}
            url={values.tileSource}
            ext={values.ext}
          />
          {this.state.stations.map(s => {
            return <Marker position={[54.5, 18.4]} />
          })}
        </Map>
      </div>
    )
  }
}

export default MapContainer
