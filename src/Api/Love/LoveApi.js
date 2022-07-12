import { useEffect, useState, useCallback, useMemo } from "react";
import context from "../../store/context";
// import ContextProvider from "../../store/ContextProvider";

const LoveApiProvider = (props) => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // let randomNumber = useMemo(() => {
  //   return Math.floor(Math.random() * 37) % 12;
  // }, []);
  let randomNumber = 10;

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
        `https://moviesdatabase.p.rapidapi.com/titles?limit=50&page=${
          randomNumber === 0 ? randomNumber + 10 : randomNumber
        }&titleType=movie`,
        options
      );
      if (!response.ok) {
        throw new Error("something went wrong...");
      }
      const data = await response.json();
      // console.log(data);
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }, [randomNumber]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const APIContextValues = {
    loveApiData: apiData,
    loveIsLoading: isLoading,
  };

  return (
    <context.Provider value={APIContextValues}>
      {props.children}
    </context.Provider>
  );
};

export default LoveApiProvider;
