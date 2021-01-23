import * as React from "react"
import "./menu-panel.scss"
import MenuInput from "../MenuInput/menu-input"

const MenuPanel: React.FC = () => {
  return (
    <div className="menu__container">
      <h2 className="menu__header">Wybierz warstwę</h2>
      <div className="menu__content">
        <MenuInput />
      </div>
    </div>
  )
}

export default MenuPanel
