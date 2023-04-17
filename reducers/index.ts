import { QuestionType } from '@/types';
import {
  ActionType,
  SET_EMAIL,
  SET_GOAL,
  SET_INDUSTRY,
  SET_NAME,
  SET_ROLE,
} from './actions';

export type ResponseStateType = Record<QuestionType, string>;

export const initialState: ResponseStateType = {
  name: '',
  email: '',
  industry: '',
  role: '',
  goal: '',
};

export function appReducer(
  state: ResponseStateType,
  action: ActionType
): ResponseStateType {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };

    case SET_INDUSTRY:
      return { ...state, industry: action.payload };

    case SET_ROLE:
      return { ...state, role: action.payload };

    case SET_GOAL:
      return { ...state, goal: action.payload };

    case SET_EMAIL:
      return { ...state, email: action.payload };

    default:
      return state;
  }
}
