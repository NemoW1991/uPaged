import {
  SET_COUNT,
  CountAction
} from '../types/Count';

export const setCountAction = (
  count: number
): CountAction => ({
  type: SET_COUNT,
  count: count
})