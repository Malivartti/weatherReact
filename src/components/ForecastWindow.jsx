import React from 'react'
import ForecastItem from './ForecastItem'

const ForecastWindow = ({ forecastData }) => {
  return (
    <div className='content'>
      <p className='city city-forecast'>{forecastData.name}</p>
      <div className='forecast-list'>
        {(forecastData.list).map((item, index) =>
          <ForecastItem key={index} itemData={item} />
        )}
      </div>
    </div>
  )
}

export default ForecastWindow