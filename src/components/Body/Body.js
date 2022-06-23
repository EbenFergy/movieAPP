import React, { useContext } from "react";
import context from "../../store/context";

const Body = () => {
  const { apiData, isLoading } = useContext(context);
  //   console.log("apiData in Body...", apiData);
  return (
    <>
      <div>Body is running...</div>
      {isLoading && <div> Loading... </div>}
      {!isLoading && <div> okkkkk now working </div>}
      {/* <button onClick={fetchHandler}>Fetch</button> */}
    </>
  );
};

export default Body;
