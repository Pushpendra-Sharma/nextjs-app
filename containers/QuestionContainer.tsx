import { QuestionDetails } from '@/components';
import { questions } from '@/utils/constants';
import { QuestionType } from '@/types';
import {
  EmailInputContainer,
  NameInputContainer,
  RoleInputContainer,
} from './';

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
      {type === 'role' && <RoleInputContainer type={type} />}
      {type === 'email' && <EmailInputContainer type={type} />}
    </>
  );
}
