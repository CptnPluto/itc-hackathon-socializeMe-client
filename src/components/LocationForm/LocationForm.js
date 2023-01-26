import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../Button/ButtonCustom";
import "./LocationForm.css";

function LocationForm({ setLoadIn }) {
    const navigate = useNavigate();

    const handleClick = () => {
        setLoadIn(false);
        setTimeout(() => {
            navigate("/chooseCategory");
        }, 500);
    };

    return (
        <div>
            <div className="fromheader">
                <h3 htmlFor="Location-From">
                    Choose the city you are coming from:
                </h3>
            </div>
            <div className="locationdiv">
                <select
                    className="cityfromform"
                    name="citiesfrom"
                    id="citiesfrom"
                    form="citiesfrom"
                >
                    <option value="">Coming From...</option>
                    <option value="LosAngeles">Los Angeles</option>
                    <option value="Sacramento">Sacramento</option>
                    <option value="NewYork">New York</option>
                    <option value="Miami">Miami</option>
                </select>
            </div>

            <div className="buttondiv">
                <ButtonCustom buttonText={"Next"} callback={handleClick} />
            </div>
        </div>
    );
}

export default LocationForm;
