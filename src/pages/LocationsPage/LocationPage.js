import React from 'react'
import CityCard from '../../components/CityCard/CityCard'

function LocationPage() {
  return (
    <div>
<div>
  <h1>City From:</h1>
</div>

<label for="Location-From">City From:</label>
<select name="citiesfrom" id="citiesfrom" form="citiesfrom">
  <option value="LosAngeles">Los Angeles</option>
  <option value="Sacramento">Sacramento</option>
  <option value="NewYork">New York</option>
  <option value="Miami">Miami</option>
</select>

<div>
  <h1>City To:</h1>
</div>

<label for="Location-To">City To:</label>
<select name="citiesto" id="citiesto" form="citiesto">
  <option value="TelAviv">Tel Aviv</option>
  <option value="RishonLetziyon">Rishon Letziyon</option>
  <option value="Hertsiliya">Hertsiliya</option>
  <option value="BatYam">BatYam</option>
</select>

<button>Next</button>

<div>
  <CityCard/>
</div>
</div>

  )
}

export default LocationPage