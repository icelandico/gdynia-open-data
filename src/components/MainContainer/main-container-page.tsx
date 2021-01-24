import React, { useState } from "react";
import "./main-container.scss";
import MapContainer from "../Map/map-container";
import MenuPanel from "../MenuPanel/menu-panel";
import InfoTab from "../InfoTab/info-tab";

const MainContainer: React.FC = () => {
  const [activeLayer, setLayer] = useState("")

  const switchLayer = (layer: string) => {
    setLayer(layer)
  }

  return (
    <div className="main__container">
      <MenuPanel handleLayerChange={switchLayer}/>
      <MapContainer activeLayer={activeLayer} />
      <InfoTab />
    </div>
  );
};

export default MainContainer;
