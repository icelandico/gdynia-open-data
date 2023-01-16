import React, { useState, useCallback } from "react";
import "./main-container.scss";
import MapWrapper from "../Map/map-wrapper";
import MenuPanel from "../MenuPanel/menu-panel";
import InfoTab from "../InfoTab/info-tab";
import MenuSwitch from "../MenuSwitch/MenuSwitch";
import useMobileWidth from "../../utils/useMobileWidth";

const MainContainer: React.FC = () => {
  const [activeLayer, setLayer] = useState("");
  const [menuOpened, setMenuOpened] = useState(true);

  const switchLayer = (layer: string) => {
    setLayer(layer);
  };

  const handleSwitchMenu = useCallback(() => {
    setMenuOpened(prev => !prev);
  }, [menuOpened]);

  return (
    <div className="main__container">
      <MenuSwitch isOpened={menuOpened} handleMenuClick={handleSwitchMenu} />
      {menuOpened ? <MenuPanel handleLayerChange={switchLayer} /> : null}
      <MapWrapper activeLayer={activeLayer} />
      <InfoTab />
    </div>
  );
};

export default MainContainer;
