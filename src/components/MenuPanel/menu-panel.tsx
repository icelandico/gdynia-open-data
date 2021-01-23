import * as React from "react"
import "./menu-panel.scss"
import MenuInputs from "../MenuInput/menu-inputs"
import Header from "../Header/header";

const MenuPanel: React.FC = () => {
  return (
    <div className="menu__container">
      <Header />
      <h2 className="menu__header">Wybierz warstwę</h2>
      <div className="menu__content">
        <MenuInputs />
      </div>
    </div>
  )
}

export default MenuPanel
