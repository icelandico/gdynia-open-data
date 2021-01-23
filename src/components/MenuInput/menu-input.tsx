import React, {FunctionComponent} from "react"
import { changeLayer } from "../../store/app-store"
import "./menu-input.scss";
import Checkbox from "../../global/shared_components/Checkbox/checkbox";

const MenuInput: FunctionComponent = () => {
  const switchLayer = (layer: any) => changeLayer(layer)

  const switchHandler = (value: string) => {
    switchLayer(value)
  }

  return (
    <>
      <Checkbox
        text="Brak warstw"
        id="none" handleChange={switchHandler}
        value="none"
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
    </>
  )
}

export default MenuInput
