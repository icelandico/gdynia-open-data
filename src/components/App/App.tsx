import * as React from "react";
import "./styles.scss";
import { Talkr } from "talkr";
import MainContainer from "../MainContainer/main-container-page";
import { APIProvider } from "../../context/Provider";
import en from "../../locales/en_translation.json";
import pl from "../../locales/pl_translation.json";

const App: React.FC = () => {
  return (
    <Talkr languages={{ en, pl }} defaultLanguage="pl">
      <APIProvider>
        <div className="container-fluid" style={{ padding: 0 }}>
          <MainContainer />
        </div>
      </APIProvider>
    </Talkr>
  );
};

export default App;
