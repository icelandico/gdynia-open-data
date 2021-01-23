import React from "react"
import "./checkbox.scss";

interface CheckboxProps {
  text: string;
  id: string;
  value: string;
  name: string;
  handleChange: Function;
  initialChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({text, handleChange, id, value, name, initialChecked}) => {

  const handleInputChange = (val: string) => {
    console.log('value', val)
    handleChange(val)
  }

  return (
    <label className="checkbox__label">
      <span>{text}</span>
      <input
        name={name}
        type="radio"
        className="checkbox__input"
        value={value}
        onChange={() => handleInputChange(value)}
        defaultChecked={initialChecked}
        id={id}
      />
      <span className="checkbox__indicator"></span>
    </label>
  )
}

export default Checkbox
