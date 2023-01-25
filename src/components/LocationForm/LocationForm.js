import React from 'react'

function LocationForm() {
  return (
    <div className='locationdiv'>


<label htmlFor="Location-From">City From:</label>
<select className='cityfromform' name="citiesfrom" id="citiesfrom" form="citiesfrom">
  <option value="LosAngeles">Los Angeles</option>
  <option value="Sacramento">Sacramento</option>
  <option value="NewYork">New York</option>
  <option value="Miami">Miami</option>
</select>



<label htmlFor="Location-To">City To:</label>
<select className='citytoform' name="citiesto" id="citiesto" form="citiesto">
  <option value="TelAviv">Tel Aviv</option>
  <option value="RishonLetziyon">Rishon Letziyon</option>
  <option value="Hertsiliya">Hertsiliya</option>
  <option value="BatYam">BatYam</option>
</select>

<button className='locationbutton'>Next</button>
</div>
  )
}

export default LocationForm