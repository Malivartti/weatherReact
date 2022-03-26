import React, { useState } from 'react'
import DetailsWindow from './DetailsWindow'
import ForecastWindow from './ForecastWindow'
import NowWindow from './NowWindow'

const ResultWindow = ({ cityData, forecastData }) => {
  const [currentTab, setCurrentTab] = useState('Now')

  return (
    <div className='main__result'>
      <div className='main__result-top'>
        {currentTab === 'Now'
          ? <NowWindow cityData={cityData} />
          : currentTab === 'Details'
            ? <DetailsWindow cityData={cityData} />
            : <ForecastWindow forecastData={forecastData} />
        }
      </div>
      <div className='main__result-bottom'>
        <button
          className='tab-item btn-reset'
          onClick={e => setCurrentTab(e.target.textContent)}
          style={currentTab === 'Now' ? {backgroundColor: 'black', color: 'white'} : {}}
        >Now</button>
        <button
          className='tab-item btn-reset'
          onClick={e => setCurrentTab(e.target.textContent)}
          style={currentTab === 'Details' ? {backgroundColor: 'black', color: 'white'} : {}}
        >Details</button>
        <button
          className='tab-item btn-reset'
          onClick={e => setCurrentTab(e.target.textContent)}
          style={currentTab === 'Forecast' ? {backgroundColor: 'black', color: 'white'} : {}}
        >Forecast</button>
      </div>
    </div>
  )
}

export default ResultWindow