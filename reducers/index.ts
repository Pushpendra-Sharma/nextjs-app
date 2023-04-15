import { ActionType, SET_NAME } from './actions';

export interface AppStateType {
  [question: string]: string;
}

export const initialState: AppStateType = {};

export function appReducer(state: AppStateType, action: ActionType) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
}
