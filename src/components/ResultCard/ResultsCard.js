import React from "react";
import "./ResultsCard.css";

export default function ResultsCard(result) {
  console.log("pppp", result);
  return (
    <div id="categories">
      <div id="eventInfo-main">
        <p>{result.name}</p>
        <p>category: {result.category}</p>
      </div>
      <div id="eventInfo-sub">
        <p>{result.time}</p>
        <p>{result.date}</p>
        <p>Genre: {result.genre}</p>
      </div>
      <div id="cardLink">
        <button>
          <a href={result.url}>Go To Website</a>
        </button>
      </div>
    </div>
  );
}
