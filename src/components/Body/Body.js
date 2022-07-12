import React, { useContext } from "react";
import BodyStyle from "./BodyStyle";
import Trending from "./Trending/Trending";
import TrendingApiProvider from "../../Api/Trending/TrendingApi";
import Action from "./Action/Action";
import ActionApiProvider from "../../Api/Action/ActionApi";
import ComedyApiProvider from "../../Api/Comedy/ComedyApi";
import Comedy from "./Comedy/Comedy";

const Body = () => {
  // const { trendingApiData, trendingIsLoading } = useContext(context);
  return (
    <BodyStyle>
      <TrendingApiProvider>
        <Trending />
      </TrendingApiProvider>
      <ActionApiProvider>
        <Action />
      </ActionApiProvider>
      <ComedyApiProvider>
        <Comedy />
      </ComedyApiProvider>
      <div>Comedy</div>
      <div>Love</div>
    </BodyStyle>
  );
};

export default Body;
