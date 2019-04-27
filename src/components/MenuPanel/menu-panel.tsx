import * as React from "react"
import styles from "./menu-panel-styles"
import "rbx/index.css"
import classNames from "classnames"

class MenuPanel extends React.Component {
  render() {
    return (
      <div className={styles.menuContainer}>
        <h2 style={{ textAlign: "center" }}>Wybierz warstwę</h2>
        <div className={styles.menuContent}>
          <label>
            <input type="radio" className={styles.menuInput} />
            Pogoda
          </label>
        </div>
      </div>
    )
  }
}

export default MenuPanel
