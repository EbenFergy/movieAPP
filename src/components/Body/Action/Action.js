import React, { useContext } from "react";
import context from "../../../store/context";
import Carousel from "../../Carousel/Carousel";

const Action = ({}) => {
  const { actionApiData, actionIsLoading, actioneer } = useContext(context);
  //   console.log("...trender", trender);

  return (
    <div className="sectionsStyle">
      <div className="sectionTitle">Action</div>

      {actionIsLoading && <div> Loading... </div>}
      {!actionIsLoading && actionApiData && (
        <Carousel apiData={actionApiData} />
      )}
    </div>
  );
};

export default Action;
