
import { useSelector } from 'react-redux';

export function useSaveData() {
  const cityName = useSelector(store => store.city)
  const favorites = useSelector(store => store.favorites)
  
  localStorage.setItem('city', cityName)
  localStorage.setItem('favorites', favorites.join(', '))
}
