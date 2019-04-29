import * as React from "react"
import MapStyles from "./../Map/map-container-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import values from "../../global/values"
import { weatherStations } from "../../api/api"
import { IStation } from "../../api/api-types"

interface IMapProps {
  station?: IStation
}

interface MapState {
  zoom: number
  stations: any[]
}

class MapContainer extends React.Component<IMapProps, MapState, IStation> {
  state = {
    zoom: 12,
    stations: []
  }

  getData = async () => {
    const stations = await weatherStations
    return stations
  }

  componentDidMount() {
    const data = this.getData()
    data.then(res => {
      this.setState({
        stations: res.weatherStations
      })
    })
  }

  convertCoords = (coords: [number, number]) => {
    return new L.LatLng(coords[1], coords[0])
  }

  render() {
    const position = values.centerCoordinates
    const stations: IStation[] = this.state.stations
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
          {stations.map((s: any) => {
            const id: number = s.id
            const location: [number, number] = s.location.coordinates
            return (
              <Marker position={this.convertCoords(location)}>
                <Popup>Station ID</Popup>
              </Marker>
            )
          })}
        </Map>
      </div>
    )
  }
}

export default MapContainer
