import * as React from "react"
import MainContainerStyles from "./main-container-page-styles"
import { Column } from "rbx"
import "rbx/index.css"
import classNames from "classnames"
import values from "../../global/values"
import MapContainer from "./../Map/map-container"

interface IMapProps {
}

interface State {
}

class MainContainer extends React.Component<IMapProps, State> {

  render() {
    return (
      <Column.Group>
        <Column size={3}>
          <div
            style={{
              backgroundColor: "cadetblue",
              height: "100%"
            }}
          >
          </div>
        </Column>
        <Column>
          <MapContainer />
        </Column>
      </Column.Group>
    )
  }
}

export default MainContainer
