import { combineReducers } from "redux"
import gamesReducer from "./gamesReducer"
import fetchReducer from "./fetchReducer"

const rootReducer = combineReducers({
    games: gamesReducer,
    details: fetchReducer

})
export default rootReducer;