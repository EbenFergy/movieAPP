import React from "react";
import context from "./context";

const ApiContextProvider = ({ children }) => {
  return <context.Provider> {children}</context.Provider>;
};

export default ApiContextProvider;
