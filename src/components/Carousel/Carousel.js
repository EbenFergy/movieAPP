import React from "react";
import { CarouselStyle } from "./CarouselStyle";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Carousel = ({ apiData }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      navigation
      //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      style={{ maxWidth: "100%" }}
    >
      {apiData &&
        apiData.results.map(
          (results) =>
            results.primaryImage &&
            results.primaryImage.url && (
              <SwiperSlide key={results.id}>
                <CarouselStyle>
                  <img src={results.primaryImage.url} alt="no display" />
                </CarouselStyle>
              </SwiperSlide>
            )
        )}
    </Swiper>
  );
};

export default Carousel;
