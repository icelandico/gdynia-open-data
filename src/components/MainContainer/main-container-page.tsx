import * as React from "react"
import styles from "./main-container-page-styles"
import { Column } from "rbx"
import "rbx/index.css"
import MapContainer from "./../Map/map-container"
import MenuPanel from "../MenuPanel/menu-panel"

const MainContainer: React.FC = () => {
  return (
    <Column.Group>
      <Column size={3}>
        <MenuPanel />
      </Column>
      <Column>
        <MapContainer />
      </Column>
    </Column.Group>
  )
}

export default MainContainer
