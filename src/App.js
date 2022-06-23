import React, { useEffect, useState } from "react";
import Body from "./components/Body/Body";
import ApiProvider from "./Api/Api";

const App = () => {
  return (
    <>
      <ApiProvider>
        <Body />
      </ApiProvider>
    </>
  );
};

export default App;
