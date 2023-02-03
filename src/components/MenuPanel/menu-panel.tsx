import React from "react";
import "./menu-panel.scss";
import Header from "../Header/header";
import Checkbox from "../Checkbox/checkbox";
import { useAutocompleteT } from "../../translate";

interface IMenuPanel {
  handleLayerChange: (layer: string) => void;
}

const MenuPanel: React.FC<IMenuPanel> = ({ handleLayerChange }) => {
  const { T, setLocale, locale } = useAutocompleteT();

  const switchHandler = (value: string) => {
    handleLayerChange(value);
  };

  return (
    <article className="menu__container">
      <Header />
      <fieldset>
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
        <Checkbox
          text={T("cameras")}
          id="cameras"
          handleChange={switchHandler}
          value="cameras"
          name="chosen-layer"
        />
      </fieldset>
      <div className="header__lang-container">
        <h6
          className={`lang-switch ${locale === "pl" ? "is-active" : ""}`}
          onClick={() => setLocale("pl")}
        >
          PL
        </h6>
        <h6
          className={`lang-switch ${locale === "en" ? "is-active" : ""}`}
          onClick={() => setLocale("en")}
        >
          EN
        </h6>
      </div>
    </article>
  );
};

export default MenuPanel;
