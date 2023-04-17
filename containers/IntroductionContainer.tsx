import { useContext } from 'react';
import { Button, Introduction } from '@/components';
import { AppContext } from '@/contexts/app-context';

export function IntroductionContainer() {
  const { questionId, setQuestionId } = useContext(AppContext);

  const handleClick = () => {
    setQuestionId({
      prev: Number(questionId.prev),
      current: questionId.current + 1,
      next: questionId.next + 1,
    });
  };

  return (
    <>
      <Introduction />
      <Button label='OK' onClick={handleClick} />
    </>
  );
}
