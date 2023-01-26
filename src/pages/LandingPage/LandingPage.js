import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import skyline from "../../images/skyline.avif";
import location from "../../images/location.svg";
import activities from "../../images/activities.svg";
import newEx from "../../images/newEx.svg";
import ButtonCustom from "../../components/Button/ButtonCustom";
import Typewriter from "react-typewriter";

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
      <div className="welcome">
        <h3>Welcome to SocializeMe</h3>
        <h4>You Dont Know What You Dont Know...</h4>
        <h3>But we do</h3>
      </div>
      <Typewriter
        className="typewriter - effect"
        options={{
          strings: ["...But We Do"],
          autoStart: true,
          delay: 40,
        }}
      />

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
      <ButtonCustom buttonText={"Let's Go"} callback={handleNavigate} />
    </>
  );
}
