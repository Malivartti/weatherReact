import { isData, getData, formatWeatherData, formatForecastData } from '../utils';
import { ACTION } from '../actions';

const defaultStore = isData()
  ? getData()
  : {
    city: 'Moscow',
    favorites: ['Los Angeles', 'New York', 'London', 'Paris', 'Moscow', 'Beijing', 'Tokyo']
  }

export const cityReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ACTION.ADD:
      return { ...state, favorites: [...state.favorites, action.payload] }
    case ACTION.REMOVE:
      return { ...state, favorites: state.favorites.filter(city => city !== action.payload) }
    case ACTION.CHANGE:
      return { ...state, city: action.payload }
    case ACTION.REQUEST_CITY:
      return { ...state, cityData: formatWeatherData(action.payload) }
    case ACTION.REQUSET_CITY_FORECAST:
      return { ...state, cityForecast: formatForecastData(action.payload) }
    default:
      return state
  }
}
