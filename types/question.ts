export type QuestionStatusType = {
  prev: number | null;
  current: number;
  next: number;
};

export type QuestionType = 'name' | 'email' | 'industry' | 'role' | 'goal';

export type QuestionDetailsType = {
  id: number;
  type: QuestionType;
  heading: string;
  description?: string;
  required: boolean;
};
