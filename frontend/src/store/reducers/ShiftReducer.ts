import {
  SET_SHIFTS,
  ShiftsState,
  ShiftsAction
} from '../types/Shift'
const initialShiftsState: ShiftsState = {
  start: '',
  end: '',
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
        start: action.start,
        end: action.end,
        shiftsOneInvited: action.shiftsOneInvited,
        shiftsOneUninvited: action.shiftsOneUninvited,
        shiftsTwoInvited: action.shiftsTwoInvited,
        shiftsTwoUninvited: action.shiftsTwoUninvited
      }
    default:
      return state;
  }
}