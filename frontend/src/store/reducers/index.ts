import { combineReducers } from "redux";
import { getShiftsReducer } from "./ShiftReducer";
import {getCountReducer } from "./CountReducer";

const rootReducer = combineReducers({
  shifts: getShiftsReducer,
  count: getCountReducer
})

export default rootReducer;