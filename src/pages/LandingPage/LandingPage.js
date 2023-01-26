import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/chooseLocation");
  };

  return (
    <>
      <div className="head">
        <h2 className="headLine">SocializeMe</h2>
      </div>
      <div className="aboutText">
        "SocializeMe" help you find similar events in your current city by comparing it with your home city. Simply enter your
        home and current city and discover new cultural experiences.
      </div>
      <div className="startButton">
        <button onClick={handleNavigate}>Start</button>
      </div>
    </>
  );
}
