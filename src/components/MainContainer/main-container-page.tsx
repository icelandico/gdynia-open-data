import React, { useState } from "react";
import "./main-container.scss";
import { useT } from "talkr";
import MapWrapper from "../Map/map-wrapper";
import MenuPanel from "../MenuPanel/menu-panel";
import InfoTab from "../InfoTab/info-tab";

const MainContainer: React.FC = () => {
  const [activeLayer, setLayer] = useState("");
  const { T } = useT();

  const switchLayer = (layer: string) => {
    setLayer(layer);
  };

  return (
    <div className="main__container">
      <MenuPanel handleLayerChange={switchLayer} />
      <MapWrapper activeLayer={activeLayer} />
      <InfoTab />
    </div>
  );
};

export default MainContainer;
