import {
  SET_SHIFTS,
  ShiftsAction
} from '../types/Shift';
import {Shift} from '../../lib/types';

export const setShiftsAction = (
  start: string,
  end: string,
  shiftsOneInvited: Shift[],
  shiftsOneUninvited: Shift[],
  shiftsTwoInvited: Shift[],
  shiftsTwoUninvited: Shift[]
): ShiftsAction => ({
  type: SET_SHIFTS,
  start: start,
  end: end,
  shiftsOneInvited: shiftsOneInvited,
  shiftsOneUninvited: shiftsOneUninvited,
  shiftsTwoInvited: shiftsTwoInvited,
  shiftsTwoUninvited: shiftsTwoUninvited
})