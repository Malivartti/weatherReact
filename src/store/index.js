import { createStore } from "redux";
import { cityReducer } from "./cityReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { useSaveData } from './../hooks/useSaveData';
import { useSelector } from 'react-redux';


export const store = createStore(cityReducer, composeWithDevTools())
// store.subscribe(() => {
//   useSaveData()
// })
