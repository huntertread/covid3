import React from 'react'
import './country.css'

const Country = ({ country }) => {
  return(
    <div className="country-container" >
      <p>{country.country}</p>
      <p>total number of cases: {country.cases}</p>
      <p>total number of new cases today: {country.todayCases}</p>
      <p>total number of deaths: {country.deaths}</p>
      <p>total number of deaths today: {country.todayDeaths}</p>
      <p>total number of recoveries: {country.recovered}</p>
      <p>total number of active cases: {country.active}</p>
      <p>total number of critical cases: {country.critical}</p>
    </div>
  )
}

export default Country