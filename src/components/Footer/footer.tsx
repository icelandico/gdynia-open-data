import * as React from "react"
import styles from "./footer-styles"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.center}>
        <a
          href="https://github.com/icelandico"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          Created by M.M
        </a>
      </div>
    </footer>
  )
}

export default Footer
