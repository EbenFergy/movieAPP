import React, { useContext } from "react";
import context from "../../../store/context";
import Carousel from "../../Carousel/Carousel";

const Comedy = ({}) => {
  const { comedyApiData, comedyIsLoading, trender } = useContext(context);
  //   console.log("...trender", trender);
  comedyApiData && console.log("...Trending apiData in Tending", comedyApiData);

  return (
    <div className="sectionsStyle">
      <div className="sectionTitle">Comedy</div>

      {comedyIsLoading && <div> Loading... </div>}
      {!comedyIsLoading && comedyApiData && (
        <Carousel apiData={comedyApiData} />
      )}
    </div>
  );
};

export default Comedy;
