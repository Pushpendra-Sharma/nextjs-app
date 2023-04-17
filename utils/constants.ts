import { QuestionDetailsType, QuestionType } from '@/types';

export const questions: Record<QuestionType, QuestionDetailsType> = {
  name: {
    id: 1,
    type: 'name',
    heading: "What's your name?",
    description: '',
    required: true,
  },
  industry: {
    id: 2,
    type: 'industry',
    heading: 'What industry is your company in?',
    description: 'We will personalize your learning experience accordingly',
    required: true,
  },
  role: {
    id: 3,
    type: 'role',
    heading: 'Your role in your company?',
    description: 'We want to understand how you spend your time right now.',
    required: true,
  },
  goal: {
    id: 4,
    type: 'goal',
    heading: "What's your goal?",
    description: '',
    required: true,
  },
  email: {
    id: 5,
    type: 'email',
    heading: "What's your email?",
    description: '',
    required: true,
  },
};
