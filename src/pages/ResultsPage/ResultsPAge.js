import React, { useState } from "react";
import axios from "axios";
import "./ResultsPage.css";

export default function ResultsPAge() {
    const [textDescription, setTextDescription] = useState("");


    //NOTE: Needs the city value from wherever it is we're storing it. The context?
    const handleClick = async (e) => {
        console.log("clicked");
        console.log(textDescription);
        const res = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/ds/${textDescription}/${city}`
        );
        //Display res the same way we were going to display the result the first time. Updating the context state?
        console.log("res: ", res);
    };

    return (
        <>
            <div>ResultsPAge</div>

            {/* This container will submit a text description to the DS api, isntead of the event id that we are doing previously. */}
            <div className="text-description-container">
                <label htmlFor="userDescription">
                    Don't see what you're looking for?
                </label>
                <textarea
                    name="userDescription"
                    id="userDescription"
                    rows="5"
                    cols="33"
                    value={textDescription}
                    onChange={(e) => setTextDescription(e.target.value)}
                    placeholder="Describe the kind of event you'd like!"
                ></textarea>
                <button type="button" onClick={handleClick}>
                    See what you get!
                </button>
            </div>
        </>
    );
}
