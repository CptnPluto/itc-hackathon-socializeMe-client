import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBackButton.css";

export default function GoBackButton() {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <button id="prevBtn" onClick={goBackHandler}>
        Go Back
      </button>
    </div>
  );
}
