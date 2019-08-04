import * as React from "react"
import { Column } from "rbx"
import styles from "./main-container-page-styles"
import "rbx/index.css"
import MapContainer from "../Map/map-container"
import MenuPanel from "../MenuPanel/menu-panel"

const MainContainer: React.FC = () => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.column}>
        <MenuPanel />
      </div>
      <div className={`${styles.column}, ${styles.mapContainer}`}>
        <MapContainer />
      </div>
    </div>
  )
}

export default MainContainer
