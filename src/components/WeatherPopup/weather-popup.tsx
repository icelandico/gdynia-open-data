import * as React from "react"
import styles from "./../WeatherPopup/weather-popup-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import values from "../../global/values"
import { weatherStations } from "../../api/api"
import { IStation } from "../../api/api-types"

interface IStationProps {
  station?: IStation
  street: string
  id: number
  airTemperature: number
}

interface MapState {}

class WeatherPopup extends React.Component<IStationProps, MapState, IStation> {
  state = {}

  render() {
    return (
      <>
        <Popup>
          <p>{this.props.id}</p>

          <p>Lokalizacja: {this.props.street}</p>
          <p>Temperatura: {this.props.airTemperature}</p>
        </Popup>
      </>
    )
  }
}

export default WeatherPopup
