import * as React from "react"
import styles from "./menu-input-styles"
import "rbx/index.css"
import { useStore } from "effector-react"
import { activeLayer, changeLayer } from "../../store/app-store"

export const MenuInput = () => {

  const switchLayer = (layer: any) => changeLayer(layer)

  const handleChange = (event: any) => {
    const val = event.target.value
    switchLayer(val)
  }

  const layer = useStore(activeLayer)

  return (
    <React.Fragment>
      <p>{layer}</p>
      <label>
        <input
          name="chosen-layer"
          type="radio"
          className={styles.menuInput}
          value="none"
          onChange={handleChange}
        />
        Brak warstw
				</label>
      <label>
        <input
          name="chosen-layer"
          type="radio"
          className={styles.menuInput}
          value="weather"
          onChange={handleChange}
          defaultChecked
        />
        Pogoda
				</label>
      <label>
        <input
          name="chosen-layer"
          type="radio"
          className={styles.menuInput}
          value="traffic"
          onChange={handleChange}
        />
        Dane o ruchu
				</label>
    </React.Fragment>
  )
}

export default MenuInput
