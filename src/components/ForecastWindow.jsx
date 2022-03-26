import React, { useState, useEffect } from 'react'
import { formatForecastData } from '../utils'
import ForecastItem from './ForecastItem'

const ForecastWindow = ({ forecastData }) => {
  const [data, setData] = useState({})
  
  useEffect(() => {
    formatForecastData(forecastData, setData)
  }, [forecastData])

  return (
    <div className='content'>
      <p className='city city-forecast'>{data.name}</p>
      <div className='forecast-list'>
        {(data?.list || []).map((item, index) =>
          <ForecastItem key={index} itemData={item} />
        )}
      </div>
    </div>
  )
}

export default ForecastWindow