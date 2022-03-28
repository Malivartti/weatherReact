import { server } from "../API"

export function timeConverter(value) {
  const date = new Date(value * 1000)
  let hours = date.getHours()
  let minutes = date.getMinutes()
  minutes = (minutes < 10) ? '0' + minutes : minutes
  hours = (hours < 10) ? '0' + hours : hours
  return hours + ':' + minutes
}

export function timeForecastConverter(value) {
  const date = new Date(value * 1000)
  let temhours = date.getHours();
  return {
    time: `${(temhours < 10) ? '0' + temhours : temhours}:${("0" + date.getMinutes()).slice(-2)}`,
    day: date.toLocaleString('en-US', { day: "numeric" }) + ' ' + date.toLocaleString('en-US', { month: "short" })
  }
}

export function formatWeatherData(cityData) {
  const data = cityData;
  const dir = {
    name: data.name,
    degree: Math.round(data.main.temp) + '°',
    feellike: Math.round(data.main.feels_like) + '°',
    weather: data.weather[0].main,
    sunrise: timeConverter(data.sys.sunrise),
    sunset: timeConverter(data.sys.sunset),
    picture: server.getPictureUrl(data.weather[0].icon, 4),
  }
  return dir
}

export function formatForecastData(forecastData) {
  const data = forecastData;
  const array = []

  data.list.forEach(data => {
    const date = timeForecastConverter(data.dt)
    array.push({
      day: date.day,
      time: date.time,
      degree: Math.round(data.main.temp) + '°',
      feellike: Math.round(data.main.feels_like) + '°',
      weather: data.weather[0].main,
      picture: server.getPictureUrl(data.weather[0].icon, 2),
    })
  })
  return ({ name: data.city.name, list: array })
}

export function isData() {
  return !!localStorage.getItem('city')
}

export function getData() {
  const dir = {
    city: localStorage.getItem('city'),
    favorites: localStorage.getItem('favorites')?.split(', ').filter(i => i !== '')
  }
  return dir
}