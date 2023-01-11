import React from "react";
import "./header.scss";
import { useT } from "talkr";

const Header: React.FC = () => {
  const { setLocale, locale } = useT();

  return (
    <div className="header">
      <h1>Gdynia Open Data Viewer</h1>
      <div className="header__lang-container">
        <h3
          className={`lang-switch ${locale === "pl" ? "is-active" : ""}`}
          onClick={() => setLocale("pl")}
        >
          PL
        </h3>
        <h3
          className={`lang-switch ${locale === "en" ? "is-active" : ""}`}
          onClick={() => setLocale("en")}
        >
          EN
        </h3>
      </div>
    </div>
  );
};

export default Header;
