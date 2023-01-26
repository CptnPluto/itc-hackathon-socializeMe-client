import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ResultsContext = createContext();

export default function ResultsContextProvider({ children }) {
  const [originCity, setOriginCity] = useState();
  const [category, setCategory] = useState();
  const [destinationCity, setDestinationCity] = useState();
  const [resultsList, setResultsList] = useState();

  const getResultsByCity = async (city) => {
    try {
      const res = await axios.get(`https://itc-hackathon-socialize-me-server.vercel.app/events/ds/1/NYC`);
      console.log(res.data, "test");
      setResultsList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const doTest = async () => {
  //     console.log("testing");
  //     try {
  //         console.log("trying model");
  //         const res = await axios.get(
  //             "http://localhost:8080/events/ds/1/NYC"
  //         );
  //         console.log(res);
  //     } catch (err) {
  //         console.log(err);
  //     }
  // };

  //   const getResultsByEventId = async (city, eventId) => {
  //     try {
  //       const res = await axios.get(`${REACT_APP_SERVER_URL}/cityEvents/${city}/${eventId}`);
  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    getResultsByCity();
  }, []);

  return (
    <ResultsContext.Provider
      value={{ resultsList, originCity, setOriginCity, category, setCategory, destinationCity, setDestinationCity }}
    >
      {children}
    </ResultsContext.Provider>
  );
}
