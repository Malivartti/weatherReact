import { server } from "../API"
import { requestCity, requestCityForecast } from '../actions';

export const fetchCityData = (cityName) => {
  return (dispatch) => {
    server.loadCity(cityName)
    .then(json => dispatch(requestCity(json)))
  }
}

export const fetchCityForecast = (cityName) => {
  return (dispatch) => {
    server.loadForecast(cityName)
    .then(json => dispatch(requestCityForecast(json)))
  }
}