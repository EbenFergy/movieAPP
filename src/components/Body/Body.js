import React, { useContext } from "react";
import context from "../../store/context";
import BodyStyle from "./BodyStyle";
import Trending from "./Trending";
import TrendingApiProvider from "../../Api/Trending/TrendingApi";

const Body = () => {
  // const { trendingApiData, trendingIsLoading } = useContext(context);
  return (
    <BodyStyle>
      <TrendingApiProvider>
        <Trending />
      </TrendingApiProvider>
      <div>Trending</div>
      <div>Action</div>
      <div>Comedy</div>
      <div>Love</div>
      {/* {isLoading && <div> Loading... </div>}
      <div className="movieBody">
        {!isLoading &&
          apiData &&
          apiData.results.map(
            (results) =>
              results.primaryImage &&
              results.primaryImage.url && (
                <div key={results.id}>
                  <img src={results.primaryImage.url} alt="no display" />
                </div>
              )
          )}
      </div> */}
    </BodyStyle>
  );
};

export default Body;
