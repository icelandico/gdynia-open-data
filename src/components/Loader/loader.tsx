import React from "react";
import "./loader.scss";

const Loader: React.FC = () => {
  return (
    <div className="loader__container">
      <div className="loader__spinner" />
    </div>
  );
};

export default Loader;
