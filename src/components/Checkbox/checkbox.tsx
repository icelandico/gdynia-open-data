import React from "react";
import "./checkbox.scss";

interface CheckboxProps {
  text: string;
  id: string;
  value: string;
  name: string;
  handleChange: (val: string) => void;
  initialChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  text,
  handleChange,
  id,
  value,
  name,
  initialChecked = false
}) => {
  const handleInputChange = (val: string) => {
    handleChange(val);
  };

  return (
    <label className="checkbox__label" id={id}>
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
      <span className="checkbox__indicator" />
    </label>
  );
};

export default Checkbox;
