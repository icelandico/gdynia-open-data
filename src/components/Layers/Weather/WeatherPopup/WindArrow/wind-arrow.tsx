import React from "react";
import arrow from "../../../../../static/img/navigation.svg";
import "./wind-arrow.scss";

interface IArrowProps {
  direction: number;
}

const WindArrow: React.FC<IArrowProps> = ({ direction }) => {
  return (
    <img
      alt="wind-indicator"
      className="arrow"
      src={arrow}
      style={{ transform: `rotate(${direction}deg)` }}
    />
  );
};

export default WindArrow;
