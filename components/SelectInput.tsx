import { SelectOptionsType } from '@/types/misc';
import { MouseEventHandler } from 'react';

type SelectInputProps = {
  title: string;
  value: string;
  options: SelectOptionsType;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export const SelectInput = ({
  title,
  value,
  options,
  handleClick,
}: SelectInputProps) => {
  return (
    <div className='my-2 flex flex-col gap-2'>
      {options.map((item, index) => (
        <button
          key={item.label}
          className={`p-2 border-2  max-w-max bg-neutral-950 text-white min-w-full text-lg rounded flex gap-4 items-center  hover:bg-neutral-800 hover:border-white ${
            item.value === value ? 'border-white' : 'border-gray-500'
          }`}
          onClick={handleClick}
          value={item.value}
        >
          <span
            className={`border p-1 w-8 aspect-square rounded text-sm font-medium  ${
              item.value === value ? 'bg-white text-black' : 'bg-zinc-950'
            }`}
          >
            {String.fromCharCode(65 + index)}
          </span>
          <span className=''>{item.label}</span>
        </button>
      ))}
    </div>
  );
};
