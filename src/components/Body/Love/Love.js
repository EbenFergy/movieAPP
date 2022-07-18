import React, { useContext } from "react";
import context from "../../../store/context";
import Carousel from "../../Carousel/Carousel";
import SlickCarousel from "../../../SlickCarousel";

const Love = ({}) => {
  const { loveApiData, loveIsLoading } = useContext(context);
  //   console.log("...trender", trender);

  return (
    <div className="sectionsStyle">
      <div className="sectionTitle">Love</div>

      {loveIsLoading && <div> Loading... </div>}
      {!loveIsLoading && loveApiData && <SlickCarousel apiData={loveApiData} />}
    </div>
  );
};

export default Love;
