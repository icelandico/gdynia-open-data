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
}

interface MapState {}

class WeatherPopup extends React.Component<IStationProps, MapState, IStation> {
  state = {}

  render() {
    return (
      <>
        <Popup>{this.props.street}</Popup>
      </>
    )
  }
}

export default WeatherPopup
