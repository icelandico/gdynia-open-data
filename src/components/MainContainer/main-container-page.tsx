import React from "react";
import "./main-container.scss";
import MapContainer from "../Map/map-container";
import MenuPanel from "../MenuPanel/menu-panel";

const MainContainer: React.FC = () => {
  return (
    <div className="main__container">
      <MenuPanel />
      <MapContainer />
    </div>
  );
};

export default MainContainer;
