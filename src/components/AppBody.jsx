import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { server } from '../API'
import { formatWeatherData } from '../utils/'
import FavoriteList from './FavoriteList'
import ResultWindow from './ResultWindow'


const AppBody = () => {
  const cityName = useSelector(store => store.city)
  const [cityData, setCityData] = useState({})
  const [forecastData, setForecastData] = useState({})

  useEffect(async () => {
    const response = await server.loadCity(cityName)
    formatWeatherData(response, setCityData)

    const response2 = await server.loadForecast(response.id)
    setForecastData(response2);
  }, [cityName])

  return (
    <div className='main'>
      <ResultWindow cityData={cityData} forecastData={forecastData} />
      <FavoriteList />
    </div>
  )
}

export default AppBody