import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../Button/ButtonCustom";
import "./LocationForm.css";
import { ResultsContext } from "../../context/ResultsContext";

function LocationForm({ setLoadIn }) {
    const navigate = useNavigate();
    const [city, setCity] = useState("");

    const handleClick = () => {
        console.log("City: ", city);
        localStorage.setItem("originCity", city);
        console.log("localStorage: ", localStorage.getItem("originCity"));
        setLoadIn(false);
        setTimeout(() => {
            navigate("/chooseCategory");
        }, 500);
    };

    return (
        <div>
            <div className="fromheader">
                <h3 className="comingfromheader" htmlFor="Location-From">
                    Choose the city you are coming from:
                </h3>
            </div>
            <div className="locationdiv">
                <select
                    onChange={(e) => setCity(e.target.value)}
                    className="cityfromform"
                    name="citiesfrom"
                    id="citiesfrom"
                    form="citiesfrom"
                >
                    <option value="">Coming From...</option>
                    <option value="NYC">New York</option>
                    <option value="TLV">Tel Aviv</option>
                    <option value="MSC">Moscow</option>
                    <option value="">Miami</option>
                </select>
            </div>

            <div className="buttondiv">
                <ButtonCustom buttonText={"Next"} callback={handleClick} />
            </div>
        </div>
    );
}

export default LocationForm;
