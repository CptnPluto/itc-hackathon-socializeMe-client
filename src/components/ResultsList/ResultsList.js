import React, { useContext } from "react";
import { ResultsContext } from "../../context/ResultsContext";
import ResultsCard from "../ResultCard/ResultsCard";
import "./ResultsList.css";

export default function ResultsList() {
  const { resultsList } = useContext(ResultsContext);
  console.log(resultsList);
  return (
    <div id="card-container">
      {resultsList?.map((result) => (
        <ResultsCard key={result.eventId} {...result} />
      ))}
    </div>
  );
}
