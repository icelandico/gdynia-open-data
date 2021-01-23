import * as React from "react"
import "./app.scss";
import MainContainer from "../MainContainer/main-container-page"
import Footer from "../Footer/footer"

const App: React.FC = () => {
  return (
    <div className="main__container">
      <MainContainer />
      <Footer />
    </div>
  )
}

export default App
