import React, { useState } from 'react'
import Search from '../img/search_btn.svg'
import { useDispatch } from 'react-redux';
import { changeCity } from '../actions';


const SearchBar = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  function onSubmit(e) {
    e.preventDefault()
    if (value) dispatch(changeCity(value))
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className='input'
        onChange={e => setValue(e.target.value)}
        value={value}
        type='text'
        placeholder="Поиск"
      />
      <button
        className='button search_btn'
      ><img src={Search} /></button>
    </form>
  )
}

export default SearchBar;