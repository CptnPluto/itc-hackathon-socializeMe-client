import React, { useState } from "react";

export default function Login() {
  const [currentName, setCurrentName] = useState("");
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  async function login(userLogin) {
    try {
      const res = await axios.post(
        "http://localhost:8080/users/login",
        userLogin,
        { withCredentials: true }
      );
      console.log(res.data);
      setCurrentName(res.data.name);
    } catch (err) {
      console.log(err);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginDetails);
  };

  const handleLoginDetails = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-section">
      <h1>Login</h1>
      <input
        className="signup-input"
        type="email"
        onChange={handleLoginDetails}
        value={loginDetails.email}
        placeholder="Email"
        name="email"
      ></input>
      <input
        className="signup-input"
        type="password"
        onChange={handleLoginDetails}
        value={loginDetails.password}
        placeholder="Password"
        name="password"
      ></input>
      <button className="signup-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
