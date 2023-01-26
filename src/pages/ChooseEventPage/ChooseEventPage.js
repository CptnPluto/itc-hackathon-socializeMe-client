import React from "react";
import Button from "../../components/Button/Button";
import ResultsList from "../../components/ResultsList/ResultsList";
import "./ChooseEventPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ResultsContext } from "../../context/ResultsContext";

export default function ChooseEventPage() {
    const [loadIn, setLoadIn] = useState(false);
    const { homeEvents, getResultsByCity, originCity } =
        useContext(ResultsContext);
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

    const getEvents = async () => {
        const res = await getResultsByCity(originCity);
        console.log(res);
    };

    useEffect(() => {
        try {
            console.log("originCity: ", originCity);
            console.log("HomeEvents: ", homeEvents);
            getEvents();
            setTimeout(() => {
                setLoadIn(true);
            }, 1);
        } catch (error) {
            console.log(error);
        }
    }, []);

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
            {homeEvents && <ResultsList list={homeEvents} />}
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
