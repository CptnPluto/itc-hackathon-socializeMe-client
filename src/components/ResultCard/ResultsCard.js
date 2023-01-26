import React from "react";

export default function ResultsCard(result) {
  console.log(result);
  return (
    <div id="resultCardContainer">
      <div id="categories">
        <div id="eventInfo">
          <h3>Name</h3>
          <h3>Category</h3>
          <h3>Date</h3>
        </div>
        <div>
          <h3>Date</h3>
          <h3>Time</h3>
          <h3>Info</h3>
        </div>
        <div id="cardLink">
          <button>URL</button>
        </div>
      </div>
    </div>
  );
}
