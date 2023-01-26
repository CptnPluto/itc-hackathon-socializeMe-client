import React, { useEffect, useState } from "react";
import CityCard from "../../components/CityCard/CityCard.js";
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
      className={loadIn ? "page_container load_in" : "page_container load_out"}
    >
      <div>
        <LocationForm setLoadIn={setLoadIn} />
      </div>
      <div>
        <img className="skylineimg" src={skyline}></img>
      </div>
    </div>
  );
}

export default LocationPage;
