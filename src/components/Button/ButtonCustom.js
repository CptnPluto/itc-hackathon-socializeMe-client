import React from "react";
import "./ButtonCustom.css";

export default function ButtonCustom({ callback, buttonText, heigth, width }) {
  //   const buttonStyle = {
  //     heigth: `${heigth}`,
  //     width: `${width}`,
  //   };
  return (
    <div id="buttonContainerCustom">
      <button id="buttonCustom" style={{ width: `${width}` }} onClick={() => callback()}>
        {buttonText}
      </button>
    </div>
  );
}
