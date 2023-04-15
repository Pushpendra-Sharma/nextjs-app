import { Dispatch, ReactNode, SetStateAction } from 'react';
import { QuestionStatusType } from './question';
import { ActionType } from '@/reducers/actions';

export type AppContextType = {
  questionId: QuestionStatusType;
  setQuestionId: Dispatch<SetStateAction<QuestionStatusType>>;
  responses: {
    [questionId: string]: string;
  };
  dispatch: Dispatch<ActionType>;
  progress: number;
};

export type AppProviderType = {
  children: ReactNode;
};
