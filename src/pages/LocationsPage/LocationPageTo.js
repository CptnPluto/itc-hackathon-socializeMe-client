import React from "react";
import LocationFormTo from "../../components/LocationForm/LocationFormTo";
import "./LocationPage.css";
import skyline from "../../images/skyline.png";
import { useState } from "react";

function LocationPageTo() {
    const [loadIn, setLoadIn] = useState(false);

    return (
        <div>
            <div>
                <LocationFormTo setLoadIn={setLoadIn} />
            </div>
            <div>
                <img className="skylineimg" src={skyline}></img>
            </div>
        </div>
    );
}

export default LocationPageTo;
