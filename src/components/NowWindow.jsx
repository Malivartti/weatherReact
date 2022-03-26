import React from 'react'
import Like from '../img/like_btn.svg?component';
import { useSelector, useDispatch } from 'react-redux';
import { addCity, removeCity } from '../store/cityReducer';


const NowWindow = ({ cityData }) => {
  const dispatch = useDispatch()
  const isFavorite = useSelector(store => store.favorites).includes(cityData?.name)
  
  function handleClick() {
    if (isFavorite) {
      dispatch(removeCity(cityData.name))
    } else {
      dispatch(addCity(cityData.name))
    }
  }

  return (
    <div className='content'>
      <p className='degree degree-title'>{cityData?.degree}</p>
      <img className='picture' src={cityData?.picture} />
      <div className='bottom'>
        <p className='city'>{cityData?.name}</p>
        <Like className="like_btn" fill={isFavorite ? 'black' : 'none'} onClick={handleClick} />
      </div>
    </div>
  )
}

export default NowWindow