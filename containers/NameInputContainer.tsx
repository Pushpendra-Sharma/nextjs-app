import { useContext, useState } from 'react';
import { Button, TextInput } from '@/components';
import { AppContext } from '@/contexts/app-context';
import { QuestionType } from '@/types';

type Props = {
  type: QuestionType;
};

export function NameInputContainer({ type }: Props) {
  const { questionId, setQuestionId, dispatch } = useContext(AppContext);

  const [value, setValue] = useState('');

  const handleClick = () => {
    setQuestionId({
      prev: Number(questionId.prev) + 1,
      current: questionId.current + 1,
      next: questionId.next + 1,
    });
    dispatch({ type: `SET_${type.toUpperCase()}`, payload: value });
  };

  return (
    <>
      <TextInput value={value} handleChange={e => setValue(e.target.value)} />
      <Button label='OK' onClick={handleClick} />
    </>
  );
}
