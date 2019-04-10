import * as React from "react"
import styles from "./footer-styles"
import { Footer as FooterCmp, Content } from "rbx"
import "rbx/index.css"
import classNames from "classnames"

class Footer extends React.Component {

  render() {
    return (
      <FooterCmp>
        <Content className={styles.center}>
          <p>Created by icelandico</p>
        </Content>
      </FooterCmp>
    )
  }
}

export default Footer


