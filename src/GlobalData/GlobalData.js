import React from 'react'

const GlobalData = ({ data }) => {
  return(
    <div>
      <h1>Global Cases: {data.cases}</h1>
      <h1>Global Deaths: {data.deaths}</h1>
      <h1>Global Recoveries: {data.recovered}</h1>
    </div>
  )
}

export default GlobalData