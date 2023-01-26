import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        email: "",
        password: "",
        rePassword: "",
        firstName: "",
        lastName: "",
    });
    const navigate = useNavigate();

    const handleSignupInfo = (e) => {
        setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
        console.log(signupInfo);
    };

    const signupUser = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/users/signup",
                signupInfo
            );
            if (res.data.ok) {
                console.log("successful signup");
                navigate("/login");
            }
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser();
    };

    return (
        <>
            <div className="signupForm">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h2>Create Account</h2>
                    <input
                        className="signup-input"
                        type="email"
                        value={signupInfo.email}
                        placeholder="Email"
                        name="email"
                        onChange={handleSignupInfo}
                    ></input>
                    <input
                        className="signup-input"
                        type="password"
                        value={signupInfo.password}
                        name="password"
                        //What is this? What is it doing here?
                        ain
                        placeholder="Password"
                        onChange={handleSignupInfo}
                    ></input>
                    <input
                        className="signup-input"
                        type="password"
                        value={signupInfo.rePassword}
                        name="rePassword"
                        placeholder="Enter Password Again"
                        onChange={handleSignupInfo}
                    ></input>
                    <input
                        className="signup-input"
                        type="text"
                        value={signupInfo.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleSignupInfo}
                    ></input>
                    <input
                        className="signup-input"
                        type="text"
                        value={signupInfo.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleSignupInfo}
                    ></input>
                    <button type="submit" className="signup-button">
                        Signup
                    </button>
                </form>
            </div>
        </>
    );
}
