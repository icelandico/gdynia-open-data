import * as React from "react"
import "./app.scss";
import MainContainer from "../MainContainer/main-container-page"

const App: React.FC = () => {
  return (
    <div className="app__container">
      <MainContainer />
    </div>
  )
}

export default App
