import React, { useState } from "react";
import ButtonCustom from "../Button/ButtonCustom";
import { useNavigate } from "react-router-dom";
import "./LocationForm.css";

function LocationFormTo({ setLoadIn }) {
    const navigate = useNavigate();
    const [city, setCity] = useState("");

    const handleClick = () => {
        localStorage.setItem("destinationCity", city);
        setLoadIn(false);
        setTimeout(() => {
            navigate("/recResults");
        }, 500);
    };

    return (
        <div>
            <div className="fromheader">
                <h3 className="locationtoheader" htmlFor="Location-From">
                    Choose the city you are travelling to:
                </h3>
            </div>

            <div className="locationtodiv">
                <select
                    onChange={(e) => setCity(e.target.value)}
                    className="citytoform"
                    name="citiesto"
                    id="citiesto"
                    form="citiesto"
                >
                    <option value="">Arriving To...</option>
                    <option value="TLV">Tel Aviv</option>
                    <option value="RishonLetziyon">Rishon Letziyon</option>
                    <option value="NYC">NYC</option>
                    <option value="MSC">Moscow</option>
                </select>
            </div>

            <div className="buttondiv">
                <ButtonCustom buttonText={"Next"} callback={handleClick} />
            </div>
        </div>
    );
}

export default LocationFormTo;
