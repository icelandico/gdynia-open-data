import React from "react"
import "./checkbox.scss";

interface CheckboxProps {
  text: string;
  id: string;
  value: string;
  name: string;
  handleChange: Function;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, handleChange, id, value, name}) => {

  return (
    <label className="checkbox__label">
        <p>{text}</p>
        <input
            name={name}
            type="radio"
            className="checkbox__input"
            value={value}
            onChange={handleChange()}
            defaultChecked
            id={id}
        />
        <span className="checkbox__indicator"></span>
    </label>
  )
}

export default Checkbox
