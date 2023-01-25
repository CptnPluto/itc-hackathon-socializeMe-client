import React, { useState } from "react";

export default function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    rePassword: "",
    firstName: "",
    lastName: "",
  });

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
      <div>
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
