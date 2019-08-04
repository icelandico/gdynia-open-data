import * as React from "react"
import styles from "./weather-popup-styles"
import "rbx/index.css"
import classNames from "classnames"
import { Popup } from "react-leaflet"
import { IStation } from "../../../../api/api-types"
import arrow from "../../../../static/img/navigation.svg"
import WindArrow from "./WindArrow/windarrow"

interface IStationProps {
  station?: IStation
  id: number
  street: string
  airTemperature: number
  surfaceTemperature: number
  windDirection: number
}

const WeatherPopup: React.FC<IStationProps> = props => {
  return (
    <>
      <Popup>
        <p>Identyfikator stacji: {props.id || "Brak danych"}</p>
        <p>Lokalizacja: {props.street || "Brak danych"}</p>
        <p>Temperatura powietrza: {props.airTemperature || "Brak danych"}</p>
        <p>
          Temperatura powierzchni: {props.surfaceTemperature || "Brak danych"}
        </p>
        <p>
          Kierunek wiatru: {<WindArrow direction={props.windDirection} /> || "Brak danych"}
        </p>
      </Popup>
    </>
  )
}

export default WeatherPopup
