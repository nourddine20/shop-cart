import {createStore} from "redux"
import rootreducers from "./rootreducers"
export const storeapp = createStore(rootreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

