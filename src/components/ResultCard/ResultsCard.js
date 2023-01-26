import React from "react";
import "./ResultsCard.css";
import Logo from "../../SVG/categories/music-c.svg";

export default function ResultsCard(result) {
  console.log("pppp", result);
  return (
    <div id="categories">
      <div id="middle-card">
        <div id="music-logo">
          <img src={Logo}></img>
        </div>
        <div>
          <div id="eventInfo-main">
            <p>{result.name}</p>
            <p>
              <b>category:</b> {result.category}
            </p>
          </div>
          <div id="eventInfo-sub">
            <p>{result.date}</p>
            <p>{result.time}</p>
            <p>
              <b>Genre:</b> {result.genre}
            </p>
          </div>
        </div>
      </div>
      <div id="cardLink">
        <button>
          <a href={result.url}>
            <b>Go To Website</b>
          </a>
        </button>
      </div>
    </div>
  );
}
