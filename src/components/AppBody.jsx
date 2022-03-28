import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FavoriteList from './FavoriteList'
import ResultWindow from './ResultWindow'
import { fetchCityData, fetchCityForecast } from './../asyncAction/index';


const AppBody = () => {
  const cityName = useSelector(store => store.city)
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(fetchCityData(cityName))
    dispatch(fetchCityForecast(cityName))
  }, [cityName])

  return (
    <div className='main'>
      <ResultWindow />
      <FavoriteList />
    </div>
  )
}

export default AppBody