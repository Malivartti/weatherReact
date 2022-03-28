export const server = {
  serverUrl: 'https://api.openweathermap.org/data/2.5/weather',
  apiKey: 'eee1cd17e13322cf43e90f619f3b4197',

  loadCity: async function (cityName) {
    const response = await fetch(this.getCityUrl(cityName));
    return response.json();
  },

  loadForecast: async function (cityName) {
    const city = await this.loadCity(cityName)
    const cityId = await city.id
    const response = await fetch(this.getForecastUrl(cityId));
    return response.json()
  },

  getPictureUrl: function (icon, x) {
    return `https://openweathermap.org/img/wn/${icon}@${x}x.png`
  },

  getCityUrl: function (cityName) {
    return `${this.serverUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`;
  },

  getForecastUrl: function (cityId) {
    return `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${this.apiKey}&units=metric`;
  },
}
