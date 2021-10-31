import {Shift} from '../../lib/types';

export const SET_SHIFTS = 'SET_SHIFTS';

export interface ShiftsState {
  start: string;
  end: string;
  shiftsOneInvited: Shift[];
  shiftsOneUninvited: Shift[];
  shiftsTwoInvited: Shift[];
  shiftsTwoUninvited: Shift[];
}

interface SetShiftsAction {
  type: typeof SET_SHIFTS;
  start: string;
  end: string;
  shiftsOneInvited: Shift[];
  shiftsOneUninvited: Shift[];
  shiftsTwoInvited: Shift[];
  shiftsTwoUninvited: Shift[];
}

export type ShiftsAction = SetShiftsAction;