import React from "react";
import "./CategoryPage.css";
import { useNavigate } from "react-router-dom";
function CategoryPage() {
  const navigate = useNavigate();
  const handleFood = (e) => {
    e.preventDefault();
    console.log("food");
  };
  const handleMusic = (e) => {
    e.preventDefault();
    console.log("music");
  };
  const handleMuseums = (e) => {
    e.preventDefault();
    console.log("museums");
  };
  const handleOutDoors = (e) => {
    e.preventDefault();
    console.log("outDoors");
  };
  const handleNext = (e) => {
    e.preventDefault();
    console.log("next");
    navigate("/chooseEvent");
  };
  return (
    <div className="categoryPage">
      <form onSubmit={handleNext}>
        <div className="categoryPageButtons">
          <button onClick={handleFood} className="btn btn-1 btn-sep icon-info">
            <div className="categoryBox">
          
            </div>
            <div className="categoryBox">Food</div>
          </button>
          <button onClick={handleMusic} className="btn btn-2 btn-sep icon-cart">
            <div className="categoryBox">
              
            </div>

            <div className="categoryBox">Music</div>
          </button>
          <button
            onClick={handleMuseums}
            className="btn btn-3 btn-sep icon-heart"
          >
            <div className="categoryBox">
             
            </div>
            <div className="categoryBox">Attractions</div>
          </button>
          <button
            onClick={handleOutDoors}
            className="btn btn-4 btn-sep icon-send"
          >
            <div className="categoryBox">
             
            </div>
            <div className="categoryBox">Outdoors</div>
          </button>
        </div>
        <button>Next</button>
      </form>
    </div>
  );
}

export default CategoryPage;
