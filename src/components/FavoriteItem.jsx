import React from 'react'
import { useDispatch } from 'react-redux';
import Remove from '../img/remove.svg';
import { changeCity, removeCity } from './../store/cityReducer';

const FavoriteItem = ({ cityName }) => {
  const dispatch = useDispatch()

  function remove(e) {
    e.stopPropagation()
    dispatch(removeCity(cityName))
  }

  return (
    <div className='favorite-item' onClick={() => dispatch(changeCity(cityName))}>
      <p className="item-name">{cityName}</p>
      <button
        type="button"
        className="button remove_btn"
        onClick={remove}>
        <img src={Remove} alt="" />
      </button>
    </div>
  )
}

export default FavoriteItem
