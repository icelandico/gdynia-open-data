import * as React from "react"
import "./App-styles.ts"
import AppStyles from "./App-styles"
import { Navbar, Notification } from "rbx"
import "rbx/index.css"
import classNames from "classnames"
import MapComponent from "../Map/map"

class App extends React.Component {

  render() {
    return (
      <div className={AppStyles.main}>
      <Navbar>
        <Notification className={AppStyles.center}>
          Gdynia Open Data
        </Notification>
      </Navbar>
      <MapComponent />
      </div> 
    )
  }
}

export default App


