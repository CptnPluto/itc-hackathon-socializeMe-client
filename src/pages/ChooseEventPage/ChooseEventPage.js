import React from "react";
import Button from "../../components/Button/Button";
import "./ChooseEventPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ChooseEventPage() {
    const [loadIn, setLoadIn] = useState(false);
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
            navigate("/results");
        }, 500);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoadIn(true);
        }, 1);
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
