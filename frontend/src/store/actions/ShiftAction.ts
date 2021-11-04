import {
  SET_SHIFTS,
  SET_COUNT,
  ShiftsAction,
} from '../types/Shift';
import {Shift} from '../../lib/types';

export const setShiftsAction = (
  startDateOne: string,
  startDateTwo: string,
  shiftsOneInvited: Shift[],
  shiftsOneUninvited: Shift[],
  shiftsTwoInvited: Shift[],
  shiftsTwoUninvited: Shift[]
): ShiftsAction => ({
  type: SET_SHIFTS,
  startDateOne: startDateOne,
  startDateTwo: startDateTwo,
  shiftsOneInvited: shiftsOneInvited,
  shiftsOneUninvited: shiftsOneUninvited,
  shiftsTwoInvited: shiftsTwoInvited,
  shiftsTwoUninvited: shiftsTwoUninvited
})

export const SetCountAction = (
  count: number
): ShiftsAction => ({
  type: SET_COUNT,
  count: count
})