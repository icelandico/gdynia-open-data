import * as React from "react"
import arrow from "../../../../../static/img/navigation.svg"

interface IArrowProps {
  direction: number
}

const WindArrow: React.FC<IArrowProps> = props => {
  return (

    <img src={arrow} />
  )
}

export default WindArrow