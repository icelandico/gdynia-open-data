import * as React from "react"
import styles from "./weather-popup-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Popup } from "react-leaflet"
import { IStation } from "../../../../api/api-types"

interface IStationProps {
  station?: IStation
  id: number
  street: string
  airTemperature: number
}

const WeatherPopup: React.FC<IStationProps> = (props) => {
    return (
      <>
        <Popup>
          <p>Identyfikator stacji: {props.id || "Brak danych"}</p>
          <p>Lokalizacja: {props.street || "Brak danych"}</p>
          <p>Temperatura: {props.airTemperature || "Brak danych"}</p>
        </Popup>
      </>
    )
  }

export default WeatherPopup
