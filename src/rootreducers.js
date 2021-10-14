import { combineReducers } from "redux"
import {crudcart} from "./Reducers"

const rootreducers = combineReducers({
    crudcart:crudcart
})

export default rootreducers;