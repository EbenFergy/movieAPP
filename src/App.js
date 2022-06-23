import React, { useEffect, useState } from "react";
import ApiProvider from "./Api/Api";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <ApiProvider>
        <Header />
        <Body />
      </ApiProvider>
    </>
  );
};

export default App;
