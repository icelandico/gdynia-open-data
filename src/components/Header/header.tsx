import React from "react";
import { useAutocompleteT } from "../../translate";

const Header: React.FC = () => {
  const { T } = useAutocompleteT();

  return (
    <hgroup>
      <h4>Gdynia Open Data Viewer</h4>
      <h5>{T("choose layer")}</h5>
    </hgroup>
  );
};

export default Header;
