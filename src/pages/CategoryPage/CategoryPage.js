import React from 'react'
import './CategoryPage.css'
import { useNavigate } from 'react-router-dom'
function CategoryPage() {
  const navigate = useNavigate()
const handleFood =(e)=>{
  e.preventDefault()
  console.log("food")
}
const handleMusic =(e)=>{
  e.preventDefault()
  console.log("music")
}
const handleMuseums =(e)=>{
  e.preventDefault()
  console.log("museums");
}
const handleOutDoors=(e)=>{
  e.preventDefault()
  console.log("outDoors");
}
const handleNext=(e)=>{
  e.preventDefault()
  console.log("next");
  navigate("/chooseEvent")
}
  return (
    <div className="categoryPage">
      <form onSubmit={handleNext}>
      <div className="categoryPageButtons">
        <button onClick={handleFood} className="btn btn-1 btn-sep icon-info">Food</button>
        <button onClick={handleMusic}className="btn btn-2 btn-sep icon-cart">Music</button>
        <button onClick={handleMuseums}className="btn btn-3 btn-sep icon-heart">Museums</button>
        <button onClick={handleOutDoors}className="btn btn-4 btn-sep icon-send">Outdoors</button>
        </div>
        <button>Next</button>
      </form>
    </div>
  )
}

export default CategoryPage