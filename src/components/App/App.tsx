import * as React from "react"
import "./App-styles.ts"
import AppStyles from "./App-styles"
import { Navbar, Notification } from "rbx"
import "rbx/index.css"
import classNames from "classnames"
import MainContainer from "./../MainContainer/main-container-page"
import NavbarComponent from "../Navbar/navbar"
class App extends React.Component {

  render() {
    return (
      <div className={AppStyles.main}>
        <NavbarComponent />
        <MainContainer />
      </div> 
    )
  }
}

export default App


