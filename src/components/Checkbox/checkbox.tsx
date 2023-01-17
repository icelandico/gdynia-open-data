import React from "react";

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
    <label htmlFor={id} style={{ fontSize: "16px", marginBottom: "10px" }}>
      <input
        style={{ width: "22px", height: "22px" }}
        name={name}
        type="radio"
        value={value}
        onChange={() => handleInputChange(value)}
        defaultChecked={initialChecked}
        id={id}
      />
      {text}
    </label>
  );
};

export default Checkbox;
