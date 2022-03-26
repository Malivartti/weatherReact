import React from 'react'

const DetailsWindow = ({ cityData }) => {
  return (
    <div className="content content_details">
      <p className="city city-detailed">{cityData.name}</p>
      <ul className="data">
        <li className="data-item">Temperature: <span className="degree">{cityData.degree}</span></li>
        <li className="data-item">Feels like: <span className="feel-like">{cityData.feellike}</span></li>
        <li className="data-item">Weather: <span className="weather-detailed">{cityData.weather}</span></li>
        <li className="data-item">Sunrise: <span className="sunrise">{cityData.sunrise}</span></li>
        <li className="data-item">Sunset: <span className="sunset">{cityData.sunset}</span></li>
      </ul>
    </div>
  )
}

export default DetailsWindow