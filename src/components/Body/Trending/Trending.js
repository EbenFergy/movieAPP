import React, { useContext } from "react";
import context from "../../../store/context";
import Carousel from "../../Carousel/Carousel";

const Trending = ({}) => {
  const { trendingApiData, trendingIsLoading, trender } = useContext(context);
  //   console.log("...trender", trender);
  trendingApiData &&
    console.log("...Trending apiData in Tending", trendingApiData);

  return (
    <div className="sectionsStyle">
      <div className="sectionTitle">Trending</div>

      {trendingIsLoading && <div> Loading... </div>}
      {!trendingIsLoading && trendingApiData && (
        <Carousel apiData={trendingApiData} />
      )}
    </div>
  );
};

export default Trending;
