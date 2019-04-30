import * as React from "react"
import MapStyles from "./../Map/map-container-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import values from "../../global/values"
import { weatherStations, weatherStationsData } from "../../api/api"
import { IStation } from "../../api/api-types"
import WeatherPopup from "../WeatherPopup/weather-popup"

interface IMapProps {
  station?: IStation
}

interface MapState {
  zoom: number
  stations: IStation[]
}

class MapContainer extends React.Component<IMapProps, MapState, IStation> {
  state = {
    zoom: 12,
    stations: []
  }

  getData = async () => {
    const stations = await weatherStations
    const stationsData = await weatherStationsData
    return this.concatData(stations, stationsData)
  }

  concatData = (stations: any, stationsData: []) => {
    const wStations = stations.weatherStations
    const wData = wStations.map((item: any) => {
      const matched = stationsData.filter(
        (s: any) => s.weatherStationId === item.id
      )
      return { ...item, ...(matched[0] as Object) }
    })
    console.log(wData)
    return wData
  }

  componentDidMount() {
    const data = this.getData()
    data.then(res => {
      this.setState({
        stations: res
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
          {stations.map((s: IStation) => {
            const location = s.location.coordinates
            return (
              <Marker position={this.convertCoords(location)} key={s.id} id={3}>
                <WeatherPopup id={s.id} street={s.street} />
              </Marker>
            )
          })}
        </Map>
      </div>
    )
  }
}

export default MapContainer
