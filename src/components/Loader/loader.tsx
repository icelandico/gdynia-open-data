import React from "react";
import "./loader.scss";

const Loader: React.FC<{ opaque?: boolean }> = ({ opaque }) => {
  return <div aria-busy="true" className={`loader__container ${opaque ? "opaque" : ""}`} />;
};

export default Loader;
