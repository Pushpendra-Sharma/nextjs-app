import { QuestionDetails } from '@/components';
import { questions } from '@/utils/constants';
import { QuestionType } from '@/types';
import { NameInputContainer } from './';

type Props = {
  type: QuestionType;
};

export function QuestionContainer({ type }: Props) {
  const { heading, description, required } = questions[type];

  return (
    <>
      <QuestionDetails
        heading={heading}
        description={description}
        isRequired={required}
      />
      {type === 'name' && <NameInputContainer type={type} />}
    </>
  );
}
