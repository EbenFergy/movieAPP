import React, { useContext } from "react";
import context from "../../store/context";
import BodyStyle from "./BodyStyle";

const Body = () => {
  const { apiData, isLoading } = useContext(context);
  apiData && console.log("apiData in Body...", apiData);
  return (
    <BodyStyle>
      {isLoading && <div> Loading... </div>}
      <div className="movieBody">
        {!isLoading &&
          apiData &&
          apiData.results.map(
            (results) =>
              results.primaryImage &&
              results.primaryImage.url && (
                <div key={results.id}>
                  <img src={results.primaryImage.url} />
                </div>
              )
          )}
      </div>
    </BodyStyle>
  );
};

export default Body;
