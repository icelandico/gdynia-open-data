import * as React from "react"
import { Column } from "rbx"
import styles from "./main-container-page-styles"
import "rbx/index.css"
import MapContainer from "../Map/map-container"
import MenuPanel from "../MenuPanel/menu-panel"

const MainContainer: React.FC = () => {
  return (
    <Column.Group className={styles.rowContainer}>
      <Column size={2} className={styles.column}>
        <MenuPanel />
      </Column>
      <Column className={styles.column}>
        <MapContainer />
      </Column>
    </Column.Group>
  )
}

export default MainContainer
