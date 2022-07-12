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
      spaceBetween={20}
      slidesPerView={6}
      navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      style={{ width: "100%" }}
    >
      {apiData &&
        apiData.results.map(
          (results) =>
            results.primaryImage &&
            results.primaryImage.url && (
              <SwiperSlide key={results.id}>
                <CarouselStyle>
                  <img
                    src={results.primaryImage.url}
                    alt="no display"
                    style={{ maxHeight: "20rem" }}
                  />
                </CarouselStyle>
              </SwiperSlide>
            )
        )}
    </Swiper>
  );
};

export default Carousel;
