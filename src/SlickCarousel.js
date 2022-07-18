import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselStyle } from "./components/Carousel/CarouselStyle";

const SlickCarousel = ({ apiData }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ maxWidth: "95%", border: "2px solid red" }}>
      <h2> Responsive </h2>
      <Slider {...settings}>
        {apiData &&
          apiData.results.map(
            (results) =>
              results.primaryImage &&
              results.primaryImage.url && (
                <CarouselStyle key={results.id}>
                  <img src={results.primaryImage.url} alt="no display" />
                </CarouselStyle>
              )
          )}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
