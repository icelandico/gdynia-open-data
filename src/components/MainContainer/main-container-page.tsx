import * as React from "react"
import "./main-container.scss"
import MapContainer from "../Map/map-container"
import MenuPanel from "../MenuPanel/menu-panel"

const MainContainer: React.FC = () => {
  return (
    <div className="main__container">
      <MenuPanel />
      <div className="map__container">
        <MapContainer />
      </div>
    </div>
  )
}

export default MainContainer
