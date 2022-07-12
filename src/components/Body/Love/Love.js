import React, { useContext } from "react";
import context from "../../../store/context";
import Carousel from "../../Carousel/Carousel";

const Love = ({}) => {
  const { loveApiData, loveIsLoading } = useContext(context);
  //   console.log("...trender", trender);

  return (
    <div className="sectionsStyle">
      <div className="sectionTitle">Love</div>

      {loveIsLoading && <div> Loading... </div>}
      {!loveIsLoading && loveApiData && <Carousel apiData={loveApiData} />}
    </div>
  );
};

export default Love;
