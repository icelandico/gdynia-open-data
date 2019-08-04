import * as React from "react"
import arrow from "../../../../../static/img/navigation.svg"
import styles from "./windarrow-styles"

interface IArrowProps {
  direction: number
}
const WindArrow: React.FC<IArrowProps> = props => {
  const { direction } = props
  return (
    <>
      <img
        alt="wind-indicator"
        className={styles.arrow}
        src={arrow}
        style={{ transform: `rotate(${direction}deg)` }}
      />
    </>
  )
}

export default WindArrow
