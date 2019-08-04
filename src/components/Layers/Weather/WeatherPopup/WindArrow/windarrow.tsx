import * as React from "react"
import arrow from "../../../../../static/img/navigation.svg"
import styles from "./windarrow-styles"

interface IArrowProps {
  direction: number
}

const WindArrow: React.FC<IArrowProps> = props => {
  return (
    <>
      <img
        className={styles.arrow}
        src={arrow}
        style={{ transform: `rotate(${props.direction}deg)` }}
      />
    </>
  )
}

export default WindArrow