import React from 'react'
import './globaldata.css'

const GlobalData = ({ data }) => {
  return(
    <div className="global-data-container" >
      <h1>Global Cases: {data.cases}</h1>
      <h1>Global Deaths: {data.deaths}</h1>
      <h1>Global Recoveries: {data.recovered}</h1>
    </div>
  )
}

export default GlobalData