import React, { FunctionComponent } from "react"
import { changeLayer } from "../../store/app-store"
import "./menu-input.scss";

const MenuInput: FunctionComponent = () => {
  const switchLayer = (layer: any) => changeLayer(layer)

  const handleChange = (event: any) => {
    const val = event.target.value
    switchLayer(val)
  }

  return (
    <>
    <label className="checkbox__label">
        Brak warstw
        <input
        name="chosen-layer"
        type="radio"
        className="checkbox__input"
        value="none"
        onChange={handleChange}
        defaultChecked
        id="none"
      />
      <span className="checkbox__indicator"></span>
    </label>
      {/*<input*/}
      {/*  name="chosen-layer"*/}
      {/*  type="radio"*/}
      {/*  className={styles.menuInput}*/}
      {/*  value="weather"*/}
      {/*  onChange={handleChange}*/}
      {/*  id="weather"*/}
      {/*/>*/}
      {/*<label htmlFor="weather" className={styles.menuLabel}>*/}
      {/*  Pogoda*/}
      {/*</label>*/}
      {/*<input*/}
      {/*  name="chosen-layer"*/}
      {/*  type="radio"*/}
      {/*  className={styles.menuInput}*/}
      {/*  value="parkings"*/}
      {/*  onChange={handleChange}*/}
      {/*  id="parkings"*/}
      {/*/>*/}
      {/*<label htmlFor="parkings" className={styles.menuLabel}>*/}
      {/*  Parkingi*/}
      {/*</label>*/}
      {/*<input*/}
      {/*  name="chosen-layer"*/}
      {/*  type="radio"*/}
      {/*  className={styles.menuInput}*/}
      {/*  value="traffic"*/}
      {/*  onChange={handleChange}*/}
      {/*  id="traffic"*/}
      {/*/>*/}
      {/*<label htmlFor="traffic" className={styles.menuLabel}>*/}
      {/*  Dane o ruchu*/}
      {/*</label>*/}
    </>
  )
}

export default MenuInput
