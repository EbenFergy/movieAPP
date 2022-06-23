import React, { useEffect, useState } from "react";
import Body from "./components/Body/Body";
// import ApiContextProvider from "./store/APIContextProvider";

const App = () => {
  let focus = "mumu";
  return (
    <>
      <div className="App">Good boy</div>
      {/* <APIContextProvider> */}
      <Body />
      {/* <ApiContextProvider dren={focus} /> */}
      {/* </APIContextProvider> */}
    </>
  );
};

export default App;
