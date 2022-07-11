import React, { useContext } from "react";
import context from "../../store/context";

const Trending = () => {
  const { trendingApiData, trendingIsLoading, trender } = useContext(context);
  //   console.log("...trender", trender);
  trendingApiData &&
    console.log("...Trending apiData in Tending", trendingApiData);

  return <div style={{ color: "red" }}>Trending</div>;
};

export default Trending;
