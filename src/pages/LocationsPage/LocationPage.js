import React from 'react'
import CityCard from '../../components/CityCard/CityCard.js'
import LocationForm from '../../components/LocationForm/LocationForm'
import './LocationPage.css'

function LocationPage() {
  return (
<div>
<div>
  <LocationForm/>
</div>

<div >
  <CityCard/> 
</div>
</div>

  )
}

export default LocationPage