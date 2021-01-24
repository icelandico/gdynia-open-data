import * as React from "react"
import "./menu-panel.scss"
import Header from "../Header/header";
import Checkbox from "../../global/shared_components/Checkbox/checkbox";
import {changeLayer} from "../../store/app-store";

const MenuPanel: React.FC = () => {
  const switchLayer = (layer: any) => changeLayer(layer)

  const switchHandler = (value: string) => {
    switchLayer(value)
  }

  return (
    <div className="menu__container">
      <Header />
      <h2 className="menu__header">Wybierz warstwę</h2>
      <div className="menu__content">
        <Checkbox
          text="Brak warstw"
          id="none"
          handleChange={switchHandler}
          value=""
          name="chosen-layer"
          initialChecked={true}
        />
        <Checkbox
          text="Dane pogodowe"
          id="weather"
          handleChange={switchHandler}
          value="weather"
          name="chosen-layer"
        />
        <Checkbox
          text="Miejsca parkingowe"
          id="parkings"
          handleChange={switchHandler}
          value="parkings"
          name="chosen-layer"
        />
        <Checkbox
          text="Dane o ruchu"
          id="traffic"
          handleChange={switchHandler}
          value="traffic"
          name="chosen-layer"
        />
      </div>
    </div>
  )
}

export default MenuPanel
