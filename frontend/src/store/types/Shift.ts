import {Shift} from '../../lib/types';

export const SET_SHIFTS = 'SET_SHIFTS';
export const SET_COUNT = 'SET_COUNT';

interface ShiftsMix {
  startDateOne: string;
  startDateTwo: string;
  shiftsOneInvited: Shift[];
  shiftsOneUninvited: Shift[];
  shiftsTwoInvited: Shift[];
  shiftsTwoUninvited: Shift[];
}
export interface ShiftsState extends ShiftsMix {
  count: number;
}

interface SetCountAction {
  type: typeof SET_COUNT;
  count: number
}
interface SetShiftsAction extends ShiftsMix {
  type: typeof SET_SHIFTS
}

export type ShiftsAction = SetShiftsAction | SetCountAction;