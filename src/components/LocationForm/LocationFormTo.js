import React from 'react'
import { useNavigate } from "react-router-dom";

function LocationFormTo() {
    const navigate = useNavigate();

  return (

<div>

<div className='fromheader'>
<h3 htmlFor="Location-From">Choose the city you are travelling to:</h3>
</div>

<div className='locationtodiv'>
<select className='citytoform' name="citiesto" id="citiesto" form="citiesto">
  <option value="">Arriving To...</option>
  <option value="TelAviv">Tel Aviv</option>
  <option value="RishonLetziyon">Rishon Letziyon</option>
  <option value="Hertsiliya">Hertsiliya</option>
  <option value="BatYam">BatYam</option>
</select>
</div>



<button className='locationbutton'  onClick={() => {navigate("/chooseCategory")}}>Next</button>
</div>
  )
}

export default LocationFormTo