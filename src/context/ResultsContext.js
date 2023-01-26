import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ResultsContext = createContext();

export default function ResultsContextProvider({ children }) {
    const [originCity, setOriginCity] = useState(
        localStorage.getItem("originCity")
            ? localStorage.getItem("originCity")
            : ""
    );
    const [destinationCity, setDestinationCity] = useState(
        localStorage.getItem("destinationCity")
            ? localStorage.getItem("destinationCity")
            : ""
    );
    const [eventId, setEventId] = useState(
        localStorage.getItem("eventId") ? localStorage.getItem("eventId") : ""
    );
    const [category, setCategory] = useState("Music");
    const [homeEvents, setHomeEvents] = useState("");
    const [recEvents, setRecEvents] = useState("");

    const getResultsByCity = async (city) => {
        try {
            console.log("Data: ", originCity, destinationCity, eventId);
            const res = await axios.get(
                `https://itc-hackathon-socialize-me-server.vercel.app/events/cityEvents/${city}/Music`
            );
            console.log(res.data, "test");
            setHomeEvents(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getRecResults = async (originCity, destinationCity, eventId) => {
        try {
            console.log("Data: ", originCity, destinationCity, eventId);
            const res = await axios.get(
                `https://itc-hackathon-socialize-me-server.vercel.app/ds/${localStorage.getItem(
                    "eventId"
                )}/${localStorage.getItem("originCity")}/${localStorage.getItem(
                    "destinationCity"
                )}`
            );
            console.log(res.data, "test");
            setRecEvents(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    //   setResultsList([
    //     {
    //       name: "ROCKON",
    //       desctiption: "blabla",
    //       category: "rock",
    //       venue: "ITC",
    //       address: "bla",
    //       date: "20.03.2022",
    //       url: "www.google.com",
    //     },
    //     {
    //       name: "ROCKON",
    //       desctiption: "blabla",
    //       category: "rock",
    //       venue: "ITC",
    //       address: "bla",
    //       date: "20.03.2022",
    //       url: "www.google.com",
    //     },
    //     {
    //       name: "ROCKON",
    //       desctiption: "blabla",
    //       category: "rock",
    //       venue: "ITC",
    //       address: "bla",
    //       date: "20.03.2022",
    //       url: "www.google.com",
    //     },
    //   ]);
    // };
    // console.log("gilad", resultsList);

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

    useEffect(() => {}, []);

    return (
        <ResultsContext.Provider
            value={{
                getRecResults,
                eventId,
                homeEvents,
                originCity,
                setOriginCity,
                category,
                setCategory,
                destinationCity,
                setDestinationCity,
                getResultsByCity,
            }}
        >
            {children}
        </ResultsContext.Provider>
    );
}

// `https://itc-hackathon-socialize-me-server.vercel.app/ds/${localStorage.getItem(
//     "eventId"
// )}/${localStorage.getItem("originCity")}/${localStorage.getItem(
//     "destinationCity"
// )}`
