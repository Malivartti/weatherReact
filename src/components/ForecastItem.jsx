import React from 'react'


const ForecastItem = ({itemData}) => {
  return (
    <div className='forecast-item'>
      <div className="time-block">
        <p className="day">{itemData?.day}</p>
        <p className="hour">{itemData?.time}</p>
      </div>
      <div className="weather-block">
        <div className="weather-block-left">
          <p className="temperature">Temperature: {itemData?.degree}</p>
          <p className="feel">Feels like: {itemData?.feellike}</p>
        </div>
        <div className="weather-block-right">
          <p className="weather">{itemData?.weather}</p>
          <img className="pic" alt="" src={itemData?.picture} />
        </div>
      </div>
    </div>
  )
}

export default ForecastItem