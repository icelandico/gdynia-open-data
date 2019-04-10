import * as React from "react"
import MainContainerStyles from "./main-container-page-styles"
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
      <div>
        <MapContainer />
      </div>

    )
  }
}

export default MainContainer
