import React from "react";
import Button from "../../components/Button/Button";
import "./ChooseEventPage.css";
import { useNavigate } from "react-router-dom";

export default function ChooseEventPage() {
    const navigate = useNavigate();
    const buttonHandel = () => {
        console.log(`button`);
        navigate("/results");
    };
    return (
        <>
            <div id="topButton">
                <Button
                    buttonText={"prev"}
                    callback={buttonHandel}
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
        </>
    );
}
