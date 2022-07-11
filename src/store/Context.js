import { createContext } from "react";

const context = createContext({
  trendingApiData: null,
  trendingIsLoading: null,
});

export default context;
