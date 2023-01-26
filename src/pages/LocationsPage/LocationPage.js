import React from "react";
import LocationForm from "../../components/LocationForm/LocationForm";
import "./LocationPage.css";
import skyline from "../../images/skyline.png";

function LocationPage() {
  return (
    <div>
      <div>
        <LocationForm />
      </div>
      <div>
        <img className="skylineimg" src={skyline}></img>
      </div>
    </div>
  );
}

export default LocationPage;
