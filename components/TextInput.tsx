import { ChangeEventHandler } from 'react';

type TextInputProps = {
  value: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

export function TextInput({ value, handleChange }: TextInputProps) {
  return (
    <input
      type='text'
      placeholder='Type your answer here...'
      value={value}
      onChange={handleChange}
      className='py-2 text-2xl border-b border-gray-400 text-white bg-inherit focus:outline-none focus:border-b focus:border-white'
    ></input>
  );
}
