import React from "react";
import PartnerContainer from "./containers/PartnerContainer";
import "./App.css";
import Media from "react-media";
import MobilePartnerContainer from "./containers/MobilePartnerContainer";

const GOLBAL_MEDIA_QURIES = {
  pc: "(min-width: 700px)",
  mobile: "(max-width: 700px)",
};

function App() {
  return (
    <Media queries={GOLBAL_MEDIA_QURIES}>
      {(matches) => {
        return (
          <>
            {matches.pc && <PartnerContainer />}
            {matches.mobile && <MobilePartnerContainer />}
          </>
        );
      }}
    </Media>
  );
}

export default App;
