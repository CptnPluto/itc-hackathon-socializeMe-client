import React, { useContext } from "react";
import { ResultsContext } from "../../context/ResultsContext";
import ResultsCard from "../ResultCard/ResultsCard";
import "./ResultsList.css";

export default function ResultsList({ list }) {
    // const { eventId } = useContext(ResultsContext);
    // console.log("Event Id on load: ",eventId);

    return (
        <div id="card-container">
            {list?.map((result) => (
                <ResultsCard key={result.eventId} {...result} />
            ))}
        </div>
    );
}
