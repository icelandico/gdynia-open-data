import * as React from "react"
import styles from "./weather-popup-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Popup } from "react-leaflet"
import { IStation } from "../../../../api/api-types"

interface IStationProps {
  station?: IStation
  street: string
  id: number
  airTemperature: number
}

interface MapState { }

class WeatherPopup extends React.Component<IStationProps, MapState, IStation> {
  state = {}

  render() {
    return (
      <>
        <Popup>
          <p>Identyfikator stacji: {this.props.id || "Brak danych"}</p>
          <p>Lokalizacja: {this.props.street || "Brak danych"}</p>
          <p>Temperatura: {this.props.airTemperature || "Brak danych"}</p>
        </Popup>
      </>
    )
  }
}

export default WeatherPopup
