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

    const handleSignup = () => {
        console.log("sign up");
        navigate("/signup");
    };

    const handleLogin = () => {
        console.log("login");
        navigate("/login");
    };

    //This isn't working: no cookies found. Need to fix.
    const handleUserEvents = async () => {
        console.log("user events");
        const res = await axios.get("http://localhost:8080/users/usersEvents", {
            withCredentials: true,
        });
        console.log("Users Events: ", res.data);
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
                Welcome to SocializeMe - You Dont Knoe What You Dont Know...But
                We Do
            </h3>
            <div className="svg">
                <div className="homeDiv">
                    {" "}
                    <img
                        className="location"
                        src={location}
                        alt="location"
                    />{" "}
                    <span className="homespan">
                        Coose Your Current Location
                    </span>
                </div>
                <div className="homeDiv">
                    {" "}
                    <img
                        className="activities"
                        src={activities}
                        alt="activities"
                    />{" "}
                    <span className="homespan">
                        Choose Your Favorite Activities
                    </span>
                </div>
                <div className="homeDiv">
                    <img className="newEx" src={newEx} alt="newEx" />{" "}
                    <span className="homespan">
                        Discover New Cultural Experiences
                    </span>
                </div>
            </div>

            <div className="startButton">
                <button onClick={handleNavigate}>Start</button>
            </div>

            <div className="testDiv">
                <button type="button" classname="signup" onClick={handleSignup}>
                    Sign Up!
                </button>
                <button type="button" classname="login" onClick={handleLogin}>
                    Login!
                </button>
                <button
                    type="button"
                    classname="userEvents"
                    onClick={handleUserEvents}
                >
                    User Events!
                </button>
            </div>
        </>
    );
}
