import * as React from "react"
import { Navbar, Notification } from "rbx"
import "rbx/index.css"
import classNames from "classnames"
import styles from "./navbar-styles"

const NavbarComponent: React.FC = () => {
  return (
    <div>
      <Notification className={styles.center}>Gdynia Open Data Viewer</Notification>
    </div>
  )
}

export default NavbarComponent
