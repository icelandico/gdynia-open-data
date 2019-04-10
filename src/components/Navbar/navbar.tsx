import * as React from "react"
import styles from "./navbar-styles"
import { Navbar, Notification } from "rbx"
import "rbx/index.css"
import classNames from "classnames"

class NavbarComponent extends React.Component {

  render() {
    return (
      <Navbar>
        <Notification className={styles.center}>
          Gdynia Open Data
        </Notification>
      </Navbar>
    )
  }
}

export default NavbarComponent


