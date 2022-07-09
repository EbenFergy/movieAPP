import React, { useEffect, useState } from "react";
import ApiProvider from "./Api/Api";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <>
      <ApiProvider>
        <Header />
        <Carousel />
        <Body />
      </ApiProvider>
    </>
  );
};

export default App;
