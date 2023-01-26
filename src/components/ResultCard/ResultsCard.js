import React, { useState } from "react";
import "./ResultsCard.css";
import Logo from "../../SVG/categories/music-c.svg";
import { ResultsContext } from "../../context/ResultsContext";
import { useContext } from "react";

export default function ResultsCard(result) {
    // const { setEventId } = useContext(ResultsContext);
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        localStorage.setItem("eventId", result.id);
        console.log("Event Id on click: ", result.id);
        setSelected(!selected);
    };

    return (
        <div id="categories" onClick={handleClick}>
            <div id="middle-card" className={selected ? "selected" : ""}>
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
