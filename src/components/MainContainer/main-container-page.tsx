import React, { useState, useCallback, useEffect, useContext } from "react";
import MapWrapper from "../Map/map-wrapper";
import MenuPanel from "../MenuPanel/menu-panel";
import InfoTab from "../InfoTab/info-tab";
import MenuSwitch from "../MenuSwitch/MenuSwitch";
import useMobileWidth from "../../utils/useMobileWidth";
import { APIContext } from "../../context/Provider";

const MainContainer: React.FC = () => {
  const isMobile = useMobileWidth();
  const [activeLayer, setLayer] = useState("");
  const [menuOpened, setMenuOpened] = useState(false);
  const { isError } = useContext(APIContext);

  const switchLayer = (layer: string) => {
    if (isMobile) setMenuOpened(false);
    setLayer(layer);
  };
  useEffect(() => {
    setMenuOpened(!isMobile);
  }, [isMobile]);

  const handleSwitchMenu = useCallback(() => {
    setMenuOpened(prev => !prev);
  }, [menuOpened]);

  return (
    <div style={{ position: "relative" }}>
      <MenuSwitch isOpened={menuOpened} handleMenuClick={handleSwitchMenu} />
      {menuOpened ? <MenuPanel handleLayerChange={switchLayer} /> : null}
      <MapWrapper activeLayer={activeLayer} />
      <InfoTab />
    </div>
  );
};

export default MainContainer;
