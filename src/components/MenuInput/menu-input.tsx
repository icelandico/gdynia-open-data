import * as React from "react"
import styles from "./menu-input-styles"
import "rbx/index.css"
import { useStore } from "effector-react"
import { activeLayer, changeLayer } from "../../store/app-store"
import { style } from "typestyle"
import "./menu-styles.css"

const MenuInput = () => {
  const switchLayer = (layer: any) => changeLayer(layer)

  const handleChange = (event: any) => {
    const val = event.target.value
    switchLayer(val)
  }

  const layer = useStore(activeLayer)

  return (
    <React.Fragment>
      <p>{layer}</p>
      <input
        name="chosen-layer"
        type="radio"
        className="menuInput"
        value="none"
        onChange={handleChange}
        defaultChecked
        id="none"
      />
      <label htmlFor="none" className="menuLabel">
        Brak warstw
      </label>
      <input
        name="chosen-layer"
        type="radio"
        className="menuInput"
        value="weather"
        onChange={handleChange}
        id="weather"
      />
      <label htmlFor="weather" className="menuLabel">
        Pogoda
      </label>
      <input
        name="chosen-layer"
        type="radio"
        className="menuInput"
        value="traffic"
        onChange={handleChange}
        id="traffic"
      />
      <label htmlFor="traffic" className="menuLabel">
        Dane o ruchu
      </label>
    </React.Fragment>
  )
}

export default MenuInput
