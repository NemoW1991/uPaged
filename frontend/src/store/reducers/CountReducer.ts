import {
  SET_COUNT,
  CountState,
  CountAction,
} from '../types/Count'
const initialShiftsState: CountState = {
  count: 0
}

export const getCountReducer = (
  state = initialShiftsState,
  action: CountAction
): CountState => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.count
      }
    default:
      return state;
  }
}