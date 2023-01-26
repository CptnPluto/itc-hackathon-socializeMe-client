import React, { useContext } from "react";
import { ResultsContext } from "../../context/ResultsContext";
import ResultsCard from "../ResultCard/ResultsCard";

export default function ResultsList() {
  const { resultsList } = useContext(ResultsContext);
  console.log(resultsList);
  return resultsList?.map((result) => <ResultsCard key={result.eventId} result={result} />);
}
