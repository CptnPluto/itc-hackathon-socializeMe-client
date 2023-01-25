import React from "react";
import Button from "../../components/Button/Button";
import "./ChooseEventPage.css";

export default function ChooseEventPage() {
  const buttonHandel = () => {
    console.log(`button`);
  };
  return (
    <>
      <div id="topButton">
        <Button buttonText={"prev"} callback={buttonHandel} width={`${16}%`} />
      </div>
      <div id="bottomButton">
        <Button buttonText={"NEXT"} callback={buttonHandel} width={`${84}%`} />
      </div>
    </>
  );
}
