import * as React from "react"
import styles from "./main-container-page-styles"
import { Column } from "rbx"
import "rbx/index.css"
import classNames from "classnames"
import values from "../../global/values"
import MapContainer from "./../Map/map-container"
import MenuPanel from "../MenuPanel/menu-panel"

interface IMapProps {}

interface State {}

class MainContainer extends React.Component<IMapProps, State> {
  render() {
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
}

export default MainContainer
