import React from "react";
import Button from "../../components/Button/Button";
import ResultsList from "../../components/ResultsList/ResultsList";
import "../ChooseEventPage/ChooseEventPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ResultsContext } from "../../context/ResultsContext";

export default function ChooseEventPage() {
    const [loadIn, setLoadIn] = useState(false);
    const { getRecResults, recEvents } = useContext(ResultsContext);
    const navigate = useNavigate();

    const goBack = () => {
        setLoadIn(false);
        setTimeout(() => {
            navigate("/chooseCategory");
        }, 500);
    };

    const buttonHandel = () => {
        console.log(`button`);
        setLoadIn(false);
        setTimeout(() => {
            navigate("/chooseLocationTo");
        }, 500);
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoadIn(true);
    //     }, 1);
    //     try {
    //         getEvents();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    const getResults = async () => {
        const res = await getRecResults();
        return res;
    };

    useEffect(() => {
        try {
            console.log("Getting results");
            const list = getResults();
        } catch (error) {
            console.log(error);
        }
    }, []);

    console.log(
        "Data: ",
        localStorage.getItem("originCity"),
        localStorage.getItem("destinationCity"),
        localStorage.getItem("eventId")
    );

    return (
        <div
            className={
                loadIn ? "page_container load_in" : "page_container load_out"
            }
        >
            <div id="topButton">
                <Button
                    buttonText={"prev"}
                    callback={goBack}
                    width={`${16}%`}
                />
            </div>
            <ResultsList list={recEvents} />
            <div id="bottomButton">
                <Button
                    buttonText={"NEXT"}
                    callback={buttonHandel}
                    width={`${84}%`}
                />
            </div>
        </div>
    );
}
