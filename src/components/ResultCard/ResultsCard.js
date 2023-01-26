import React from "react";
import "./ResultsCard.css";
import Logo from "../../SVG/categories/music-c.svg";

export default function ResultsCard(result) {
  console.log("pppp", result);
  return (
    <div id="categories">
      <div id="middle-card">
        <div>
          <div id="eventInfo-main">
            <p>{result.name}</p>
          </div>
          <div id="eventInfo-sub">
            <p>{result.date}</p>
            <p>{result.time}</p>
          </div>
        </div>
        <div id="cardLink">
          <img id="music-logo" src={Logo}></img>
          <p>
            <b>Genre:</b> {result.genre}
          </p>
        </div>
        <button id="cardButton">
          <a href={result.url}>
            <b>Go To Website</b>
          </a>
        </button>
      </div>
    </div>
  );
}
