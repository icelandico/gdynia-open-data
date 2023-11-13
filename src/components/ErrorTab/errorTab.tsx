import React from "react";
import { useAutocompleteT } from "../../translate";
import "./errorTab.scss";

interface IErrorTab {
  text?: string;
  styles?: string;
}

const ErrorTab = ({ text, styles }: IErrorTab) => {
  const { T } = useAutocompleteT();

  return (
    <div className={`error_tab-container ${styles}`}>
      <h4 className="error_tab-text">{text || T("api error")}</h4>
    </div>
  );
};

export default ErrorTab;
