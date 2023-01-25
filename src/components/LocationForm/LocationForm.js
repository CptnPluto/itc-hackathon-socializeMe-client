import React from 'react'
import { useNavigate } from "react-router-dom";
import './LocationForm.css'

function LocationForm() {
    const navigate = useNavigate();

  return (

<div>

<div className='fromheader'>
<h3 htmlFor="Location-From">Choose the city you are coming from:</h3>
</div>
<div className='locationdiv'>


<select className='cityfromform' name="citiesfrom" id="citiesfrom" form="citiesfrom" >
  <option value="">Coming From...</option>
  <option value="LosAngeles">Los Angeles</option>
  <option value="Sacramento">Sacramento</option>
  <option value="NewYork">New York</option>
  <option value="Miami">Miami</option>
</select>
</div>



<button className='locationbutton'  onClick={() => {navigate("/chooseLocationTo")}}>Next</button>
</div>
  )
}

export default LocationForm