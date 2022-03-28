export const ACTION = {
  ADD: 'ADD_CITY',
  REMOVE: 'REMOVE_CITY',
  CHANGE: 'CHANGE_CITY',
  REQUEST_CITY: 'REQUEST_CITY',
  REQUSET_CITY_FORECAST: 'REQUSET_CITY_FORECAST',
}

export const addCity = (payload) => ({ type: ACTION.ADD, payload })
export const removeCity = (payload) => ({ type: ACTION.REMOVE, payload })
export const changeCity = (payload) => ({ type: ACTION.CHANGE, payload })
export const requestCity = (payload) => ({ type: ACTION.REQUEST_CITY, payload })
export const requestCityForecast = (payload) => ({ type: ACTION.REQUSET_CITY_FORECAST, payload })
