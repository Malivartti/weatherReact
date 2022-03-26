import { isData, getData } from './../utils';

const defaultStore = isData()
  ? getData()
  : {
    city: 'Moscow',
    favorites: ['Los Angeles', 'New York', 'London', 'Paris', 'Moscow', 'Beijing', 'Tokyo']
  }

const ACTION = {
  ADD: 'ADD_CITY',
  REMOVE: 'REMOVE_CITY',
  CHANGE: 'CHANGE_CITY',
}

export const cityReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case ACTION.ADD:
      return { ...store, favorites: [...store.favorites, action.payload] }
    case ACTION.REMOVE:
      return { ...store, favorites: store.favorites.filter(city => city !== action.payload) }
    case ACTION.CHANGE:
      return { ...store, city: action.payload }
    default:
      return store
  }
}

export const addCity = (payload) => ({ type: ACTION.ADD, payload })
export const removeCity = (payload) => ({ type: ACTION.REMOVE, payload })
export const changeCity = (payload) => ({ type: ACTION.CHANGE, payload })