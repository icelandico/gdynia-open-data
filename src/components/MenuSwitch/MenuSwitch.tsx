import React from "react";
import "./styles.scss";

interface IMenuSwitchProps {
  isOpened: boolean;
  handleMenuClick: () => void;
}

const MenuSwitch: React.FC<IMenuSwitchProps> = ({ isOpened, handleMenuClick }) => {
  return (
    <div
      className={`menu__switch-container ${isOpened ? "is-opened" : ""}`}
      onClick={handleMenuClick}
    >
      <div className="switch-line line-1" />
      <div className="switch-line line-2" />
      <div className="switch-line line-3" />
    </div>
  );
};

export default MenuSwitch;
