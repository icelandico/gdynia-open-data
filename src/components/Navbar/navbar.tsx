import * as React from "react"
import styles from "./navbar-styles"
import { Navbar, Notification } from "rbx"
import "rbx/index.css"
import classNames from "classnames"

const NavbarComponent: React.FC = () => {
  return (
    <div>
      <Notification className={styles.center}>
        Gdynia Open Data Viewer
      </Notification>
    </div>
  )
}

export default NavbarComponent
