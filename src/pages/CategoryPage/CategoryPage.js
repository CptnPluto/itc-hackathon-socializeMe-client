import React, { useState } from "react";
import "./CategoryPage.css";
import foodSvg from "../../SVG/categories/food-c.svg";
import foodSvgBW from "../../SVG/categories/food-b&w.svg";
import musicSvg from "../../SVG/categories/music-c.svg";
import musicSvgBW from "../../SVG/categories/music-b&w.svg";
import attractionsSvg from "../../SVG/categories/attractions-c.svg";
import attractionsSvgBW from "../../SVG/categories/attractions-b&w.svg";
import outDoorsSvg from "../../SVG/categories/advanture-c.svg";
import outDoorsSvgBW from "../../SVG/categories/advanture-b&w.svg";
import ButtonCustom from "../../components/Button/ButtonCustom";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import GoBackButton from "../../components/Button/GoBackButton";

function CategoryPage() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const [food, setFood] = useState(false);
  const [music, setMusic] = useState(false);
  const [attractions, setAttractions] = useState(false);
  const [outDoors, setOutDoors] = useState(false);

  const handleFood = (e) => {
    e.preventDefault();
    setFood(!food);
    if (music == true) {
      setMusic(false);
    }
    if (attractions == true) {
      setAttractions(false);
    }
    if (outDoors == true) {
      setOutDoors(false);
    }
  };

  const handleMusic = (e) => {
    e.preventDefault();
    setMusic(!music);
    if (food == true) {
      setFood(false);
    }
    if (attractions == true) {
      setAttractions(false);
    }
    if (outDoors == true) {
      setOutDoors(false);
    }
  };
  const handleMuseums = (e) => {
    e.preventDefault();
    setAttractions(!attractions);
    if (music == true) {
      setMusic(false);
    }
    if (food == true) {
      setFood(false);
    }
    if (outDoors == true) {
      setOutDoors(false);
    }
  };
  const handleOutDoors = (e) => {
    e.preventDefault();
    setOutDoors(!outDoors);
    if (food == true) {
      setFood(false);
    }
    if (music == true) {
      setMusic(false);
    }
    if (attractions == true) {
      setAttractions(false);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/chooseEvent");
  };
  return (
    <>
      <div className="categoryPage">
        <form onSubmit={handleNext}>
          <div className="categoryPageButtons">
            <button onClick={handleFood} className={food ? "btnAlive" : "btn"}>
              <div className="buttonContent">
                <img id="catButton" src={food ? foodSvg : foodSvgBW}></img>
                <div className="buttonText"> Food</div>
              </div>
            </button>
            <button onClick={handleMusic} className={music ? "btnAlive" : "btn"}>
              <div className="buttonContent">
                <img id="catButton" src={music ? musicSvg : musicSvgBW}></img>
                <div className="buttonText"> Music</div>
              </div>
            </button>
            <button onClick={handleMuseums} className={attractions ? "btnAlive" : "btn"}>
              <div className="buttonContent">
                <img id="catButton" src={attractions ? attractionsSvg : attractionsSvgBW}></img>
                <div className="buttonText"> Attractions</div>
              </div>
            </button>
            <button onClick={handleOutDoors} className={outDoors ? "btnAlive" : "btn"}>
              <div className="buttonContent">
                <img id="catButton" src={outDoors ? outDoorsSvg : outDoorsSvgBW}></img>
                <div className="buttonText"> Outdoors</div>
              </div>
            </button>
          </div>
          <ButtonCustom buttonText={"Next"} type="submit" />
        </form>
      </div>
      <GoBackButton />
    </>
  );
}

export default CategoryPage;
