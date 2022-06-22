import React from "react";
import APIContext from "./Context";

const ContextProvider = (props) => {
  const APIContextValues = {};

  return (
    <APIContext.Provider value={APIContextValues}>
      {props.children}
    </APIContext.Provider>
  );
};

export default ContextProvider;
