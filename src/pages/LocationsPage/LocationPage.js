import React, { useEffect, useState } from "react";
import LocationForm from "../../components/LocationForm/LocationForm";
import "./LocationPage.css";
import skyline from "../../images/skyline.png";

import "../../App.css";

function LocationPage() {
    const [loadIn, setLoadIn] = useState(false);

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
            
                <LocationForm setLoadIn={setLoadIn} />
                <img className="skylineimg" src={skyline}></img>
            
            
            
        </div>
    );
}

export default LocationPage;
