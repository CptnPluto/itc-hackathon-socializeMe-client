import React from 'react'
import './CategoryPage.css'
function CategoryPage() {

  return (
    <div className="categoryPage">
      <form>
      <div className="categoryPageButtons">
        <button className="btn btn-1 btn-sep icon-info">Food</button>
        <button className="btn btn-2 btn-sep icon-cart">Music</button>
        <button className="btn btn-3 btn-sep icon-heart">Museums</button>
        <button className="btn btn-4 btn-sep icon-send">Outdoors</button>
        </div>
        <button>Next</button>
      </form>
    </div>
  )
}

export default CategoryPage