import * as React from "react"
import styles from "./menu-input-styles"
import "rbx/index.css"
import classNames from "classnames"

class MenuInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>
          <input type="radio" className={styles.menuInput} />
          Pogoda
        </label>
      </React.Fragment>
    )
  }
}

export default MenuInput
