import { createStore, applyMiddleware } from "redux";
import { cityReducer } from "./cityReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


export const store = createStore(cityReducer, composeWithDevTools(applyMiddleware(thunk)))
// store.subscribe(() => {
//   useSaveData()
// })
