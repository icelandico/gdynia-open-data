import React from "react";
import "./info-tab.scss";
import { useAutocompleteT } from "../../translate";

const InfoTab = () => {
  const { T } = useAutocompleteT();

  return (
    <a
      role="button"
      className="info-tab__author secondary"
      href="https://geodev.me"
      target="_blank"
      rel="noreferrer"
    >
      {T("author")}
    </a>
  );
};

export default InfoTab;
