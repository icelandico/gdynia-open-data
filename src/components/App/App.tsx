import * as React from "react"
import "./App-styles.ts"
import styles from "./App-styles"
import "rbx/index.css"
import classNames from "classnames"
import MainContainer from "./../MainContainer/main-container-page"
import NavbarComponent from "../Navbar/navbar"
import Footer from "../Footer/footer"

class App extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <NavbarComponent />
        <MainContainer />
        <Footer />
      </div>
    )
  }
}

export default App
