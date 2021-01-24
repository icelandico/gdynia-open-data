import React from "react"
import "./loader.scss";

interface LoaderProps { }

const Loader: React.FC<LoaderProps> = () => {

  return (
    <div className="loader__container">
      <div className="loader__spinner"></div>
    </div>
  )
}

export default Loader
