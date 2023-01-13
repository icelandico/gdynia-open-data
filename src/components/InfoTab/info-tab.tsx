import React from "react";
import "./info-tab.scss";
import { useT } from "talkr";

const InfoTab = () => {
  const { T } = useT();

  return (
    <div className="info-tab__container">
      <a className="info-tab__author" href="https://geodev.me" target="_blank" rel="noreferrer">
        {T("author")}
      </a>
    </div>
  );
};

export default InfoTab;
