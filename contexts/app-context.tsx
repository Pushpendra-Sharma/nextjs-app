import { createContext, useMemo, useReducer, useState } from 'react';
import { appReducer } from '@/reducers';
import { AppContextType, AppProviderType, QuestionStatusType } from '@/types';

export const AppContext = createContext<AppContextType>({
  questionId: {
    prev: null,
    current: 0,
    next: 1,
  },
  setQuestionId: () => {},
  dispatch: () => {},
  progress: 0,
  responses: {},
});

AppContext.displayName = 'AppContext';

export const AppProvider = ({ children }: AppProviderType) => {
  const [questionId, setQuestionId] = useState<QuestionStatusType>({
    prev: null,
    current: 0,
    next: 1,
  });

  const [state, dispatch] = useReducer(appReducer, {});

  const progress = useMemo(() => {
    let answeredQuestions = 0;
    Object.keys(state).forEach(key => answeredQuestions++);
    return answeredQuestions;
  }, [state]);

  const contextValue = {
    questionId,
    setQuestionId,
    responses: state,
    dispatch,
    progress,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};