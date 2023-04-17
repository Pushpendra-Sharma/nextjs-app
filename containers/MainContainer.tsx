import { useContext } from 'react';
import { AppContext } from '@/contexts/app-context';
import { IntroductionContainer, QuestionContainer } from './';

export function MainContainer() {
  const { questionId } = useContext(AppContext);
  const { prev, current, next } = questionId;

  return (
    <>
      {current === 0 && <IntroductionContainer />}
      {current === 1 && <QuestionContainer type='name' />}
      {current === 2 && <QuestionContainer type='industry' />}
      {current === 3 && <QuestionContainer type='role' />}
      {current === 4 && <QuestionContainer type='goal' />}
      {current === 5 && <QuestionContainer type='email' />}
      {current === 6 && <>All done! Thanks for your time.</>}
    </>
  );
}
