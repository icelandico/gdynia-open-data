import * as React from "react"
import "rbx/index.css"
import classNames from "classnames"
import { Popup } from "react-leaflet"
import styles from "./parking-popup-styles"
import { IParking } from "../../../../api/api-types"

interface IParkingProps {
  parking?: IParking
  id: number
  address: string
  capacity: number
  freePlaces: number
  update: string
}

const ParkingPopup: React.FC<IParkingProps> = props => {
  const { address, capacity, freePlaces, update } = props
  return (
    <>
      <Popup>
        <p>Adres: {address}</p>
        <p>Ogółem miejsc: {capacity}</p>
        <p>Wolnych miejsc: {freePlaces}</p>
        <p>Ostatnia aktualizacja: {update}</p>
      </Popup>
    </>
  )
}

export default ParkingPopup
