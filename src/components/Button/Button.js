import React from "react";
import "./Button.css";

export default function Button({ callback, buttonText, heigth, width }) {
  //   const buttonStyle = {
  //     heigth: `${heigth}`,
  //     width: `${width}`,
  //   };
  return (
    <div id="buttonContainer">
      <button id="button" style={{ width: `${width}` }} onClick={() => callback()}>
        {buttonText}
      </button>
    </div>
  );
}
