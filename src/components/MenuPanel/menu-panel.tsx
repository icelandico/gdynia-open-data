import * as React from "react"
import styles from "./menu-panel-styles"
import "rbx/index.css"
import classNames from "classnames"
import MenuInput from "../MenuInput/menu-input"

class MenuPanel extends React.Component {
  render() {
    return (
      <div className={styles.menuContainer}>
        <h2 style={{ textAlign: "center" }}>Wybierz warstwę</h2>
        <div className={styles.menuContent}>
          <MenuInput />
        </div>
      </div>
    )
  }
}

export default MenuPanel
