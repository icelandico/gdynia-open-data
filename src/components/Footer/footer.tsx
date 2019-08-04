import * as React from "react"
import "rbx/index.css"
import classNames from "classnames"
import styles from "./footer-styles"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.center}>
        <p>created by </p>
      </div>
    </footer>
  )
}

export default Footer
