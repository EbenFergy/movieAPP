import { createContext } from "react";

const context = createContext({
  apiData: null,
  isLoading: null,
});

export default context;
