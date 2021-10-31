export const SET_COUNT = 'SET_COUNT';

export interface CountState {
  count: number
}

interface SetCountAction {
  type: typeof SET_COUNT;
  count: number
}

export type CountAction = SetCountAction;