import React from 'react'
import ButtonCustom from '../Button/ButtonCustom';
import { useNavigate } from "react-router-dom";
import './LocationForm.css'




function LocationFormTo() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/chooseCategory")
    }

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

<div className='buttondiv'>
<ButtonCustom buttonText={'Next'}callback={handleClick}/>
</div>

</div>
  )
}

export default LocationFormTo