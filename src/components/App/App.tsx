import * as React from "react";
import "./app.scss";
import MainContainer from "../MainContainer/main-container-page";
import { APIProvider } from "../../context/Provider";

const App: React.FC = () => {
  return (
    <APIProvider>
      <div className="app__container">
        <MainContainer />
      </div>
    </APIProvider>
  );
};

export default App;
