import React from 'react'
import FavoriteItem from './FavoriteItem'
import { useSelector } from 'react-redux';

const FavoriteList = () => {
  const favorites = useSelector(store => store.favorites)

  return (
    <div className='main__favorite'>
      <div className="main__favorite-top">
        <p className="favorite-title">Added Locations:</p>
      </div>
      <div className='main__favorite-bottom'>
        {(favorites).map(city =>
          <FavoriteItem key={city} cityName={city} />
        )}
      </div>
    </div>
  )
}

export default FavoriteList