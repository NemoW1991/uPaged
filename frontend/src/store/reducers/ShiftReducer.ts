import {
  SET_SHIFTS,
  SET_COUNT,
  ShiftsState,
  ShiftsAction,
} from '../types/Shift'

const initialShiftsState: ShiftsState = {
  count: 0,
  startDateOne: '',
  startDateTwo: '',
  shiftsOneInvited: [],
  shiftsOneUninvited: [],
  shiftsTwoInvited: [],
  shiftsTwoUninvited: []
}

export const getShiftsReducer = (
  state = initialShiftsState,
  action: ShiftsAction
): ShiftsState => {
  switch (action.type) {
    case SET_SHIFTS:
      return {
        ...state,
        startDateOne: action.startDateOne,
        startDateTwo: action.startDateTwo,
        shiftsOneInvited: action.shiftsOneInvited,
        shiftsOneUninvited: action.shiftsOneUninvited,
        shiftsTwoInvited: action.shiftsTwoInvited,
        shiftsTwoUninvited: action.shiftsTwoUninvited
      }
    case SET_COUNT:
      return {
        ...state,
        count: action.count,
      }
    default:
      return state;
  }
}