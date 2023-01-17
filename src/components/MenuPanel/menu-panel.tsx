import React from "react";
import "./menu-panel.scss";
import Header from "../Header/header";
import Checkbox from "../Checkbox/checkbox";
import { useAutocompleteT } from "../../translate";

interface IMenuPanel {
  handleLayerChange: (layer: string) => void;
}

const MenuPanel: React.FC<IMenuPanel> = ({ handleLayerChange }) => {
  const { T } = useAutocompleteT();

  const switchHandler = (value: string) => {
    handleLayerChange(value);
  };

  return (
    <div className="menu__container">
      <Header />
      <h2 className="menu__header">{T("choose layer")}</h2>
      <div className="menu__content">
        <Checkbox
          text={T("no layer")}
          id="none"
          handleChange={switchHandler}
          value=""
          name="chosen-layer"
          initialChecked
        />
        <Checkbox
          text={T("weather data")}
          id="weather"
          handleChange={switchHandler}
          value="weather"
          name="chosen-layer"
        />
        <Checkbox
          text={T("parking data")}
          id="parkings"
          handleChange={switchHandler}
          value="parkings"
          name="chosen-layer"
        />
        <Checkbox
          text={T("traffic data")}
          id="traffic"
          handleChange={switchHandler}
          value="traffic"
          name="chosen-layer"
        />
        <Checkbox
          text={T("air quality")}
          id="airQuality"
          handleChange={switchHandler}
          value="airQuality"
          name="chosen-layer"
        />
        <Checkbox
          text={T("public transport data")}
          id="transportStops"
          handleChange={switchHandler}
          value="transportStops"
          name="chosen-layer"
        />
      </div>
    </div>
  );
};

export default MenuPanel;
