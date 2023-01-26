import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import skyline from "../../images/skyline.avif";
import location from "../../images/location.svg";
import activities from "../../images/activities.svg";
import newEx from "../../images/newEx.svg";
import ButtonCustom from "../../components/Button/ButtonCustom";
import Typewriter from "react-typewriter";

import "../../App.css";

export default function LandingPage() {
    let navigate = useNavigate();
    const [loadIn, setLoadIn] = useState(false);

    const handleNavigate = () => {
        setLoadIn(false);
        setTimeout(() => {
            navigate("/chooseLocation");
        }, 500);
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

    useEffect(() => {
        setLoadIn(true);
    }, []);

    return (
        <>
            <div
                className={
                    loadIn
                        ? "container page_container load_in"
                        : "container page_container load_out"
                }
            >
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
            <ButtonCustom buttonText={"Let's Go"} callback={handleNavigate} />

            <div className="testDiv">
                <button type="button" className="signup" onClick={handleSignup}>
                    Sign Up!
                </button>
                <button type="button" className="login" onClick={handleLogin}>
                    Login!
                </button>
                <button
                    type="button"
                    className="userEvents"
                    onClick={handleUserEvents}
                >
                    User Events!
                </button>
            </div>
        </>
    );
}
