import React from 'react'
import CityCard from '../../components/CityCard/CityCard.js'
import LocationFormTo from '../../components/LocationForm/LocationFormTo'
import './LocationPage.css'
import skyline from '../../images/skyline.png'

function LocationPageTo() {
  return (
<div>
<div>
  <LocationFormTo/>
</div>
<div>
<img className='skylineimg' src={skyline}></img>
</div>
</div>

  )
}

export default LocationPageTo