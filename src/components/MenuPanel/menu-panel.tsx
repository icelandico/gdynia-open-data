import * as React from "react"
import styles from "./menu-panel-styles"
import MenuInput from "../MenuInput/menu-input"

const MenuPanel: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <h2 style={{ textAlign: "center" }}>Wybierz warstwę</h2>
      <div className={styles.menuContent}>
        <MenuInput />
      </div>
    </div>
  )
}

export default MenuPanel
