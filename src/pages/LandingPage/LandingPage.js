import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import skyline from "../../images/skyline.avif";
import location from "../../images/location.svg";
import activities from "../../images/activities.svg";
import newEx from "../../images/newEx.svg";

export default function LandingPage() {
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/chooseLocation");
  };
  return (
    <>
      <div className="container">
        <div className="bgImg">
          <img
            className="imgCover"
            src={skyline}
            alt="Front "
            width="200"
            height="100"
          />
        </div>
      </div>
      <h3 className="welcome">
        Welcome to SocializeMe - You Dont Knoe What You Dont Know...But We Do
      </h3>
      <div className="svg">
        <div className="homeDiv">
          {" "}
          <img className="location" src={location} alt="location" />{" "}
          <span className="homespan">Coose Your Current Location</span>
        </div>
        <div className="homeDiv">
          {" "}
          <img className="activities" src={activities} alt="activities" />{" "}
          <span className="homespan">Choose Your Favorite Activities</span>
        </div>
        <div className="homeDiv">
          <img className="newEx" src={newEx} alt="newEx" />{" "}
          <span className="homespan">Discover New Cultural Experiences</span>
        </div>
      </div>

      <div className="startButton">
        <button onClick={handleNavigate}>Start</button>
      </div>
    </>
  );
}
