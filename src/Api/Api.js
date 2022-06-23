import { useEffect, useState, useCallback } from "react";
import Body from "../components/Body/Body";
import APIContextProvider from "../store/APIContextProvider";

const Api = () => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0b88a3f2e2mshbbd8d3e5d83b733p1ddc5bjsn92c136460660",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        "https://moviesdatabase.p.rapidapi.com/titles?limit=50&page=4&titleType=movie",
        options
      );
      if (!response.ok) {
        throw new Error("something went wrong...");
      }
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
      setApiData(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const APIContextValues = {
    apiData: apiData,
    isLoading: isLoading,
  };

  return (
    <>
      {/* {apiData.results.map((movie) => movie.titleText.text)} */}
      {/* <APIContextProvider apiData={apiData} isLoading={isLoading} /> */}
    </>
  );
};

export default Api;
