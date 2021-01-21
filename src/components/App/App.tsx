import * as React from "react"
import "./App-styles.ts"
import styles from "./App-styles"
import MainContainer from "../MainContainer/main-container-page"
import NavbarComponent from "../Navbar/navbar"
import Footer from "../Footer/footer"

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <NavbarComponent />
      <MainContainer />
      <Footer />
    </div>
  )
}

export default App
