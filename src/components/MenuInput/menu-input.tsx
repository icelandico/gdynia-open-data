import * as React from "react"
import "rbx/index.css"
import { useStore } from "effector-react"
import { activeLayer, changeLayer } from "../../store/app-store"
// import "./menu-styles.css"
import styles from "./menu-input-styles"

const MenuInput = () => {
  const switchLayer = (layer: any) => changeLayer(layer)

  const handleChange = (event: any) => {
    const val = event.target.value
    switchLayer(val)
  }

  const layer = useStore(activeLayer)

  return (
    <React.Fragment>
      <input
        name="chosen-layer"
        type="radio"
        className={styles.menuInput}
        value="none"
        onChange={handleChange}
        defaultChecked
        id="none"
      />
      <label htmlFor="none" className={styles.menuLabel}>
        Brak warstw
      </label>
      <input
        name="chosen-layer"
        type="radio"
        className={styles.menuInput}
        value="weather"
        onChange={handleChange}
        id="weather"
      />
      <label htmlFor="weather" className={styles.menuLabel}>
        Pogoda
      </label>
      <input
        name="chosen-layer"
        type="radio"
        className={styles.menuInput}
        value="parkings"
        onChange={handleChange}
        id="parkings"
      />
      <label htmlFor="parkings" className={styles.menuLabel}>
        Parkingi
      </label>
      <input
        name="chosen-layer"
        type="radio"
        className={styles.menuInput}
        value="traffic"
        onChange={handleChange}
        id="traffic"
      />
      <label htmlFor="traffic" className={styles.menuLabel}>
        Dane o ruchu
      </label>
    </React.Fragment>
  )
}

export default MenuInput
