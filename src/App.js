import React from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCarousel from "./SlickCarousel";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <SlickCarousel />
    </>
  );
};

export default App;
