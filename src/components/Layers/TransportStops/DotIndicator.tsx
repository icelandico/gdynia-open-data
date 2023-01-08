import React from "react";

interface IDotIndicatorProps {
  type: string;
}

const DotIndicator: React.FC<IDotIndicatorProps> = ({ type }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: `${type === "positive" ? "#27ae60" : "#fc5c65"}`
      }}
    />
  );
};

export default DotIndicator;
