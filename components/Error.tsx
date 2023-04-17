import Image from 'next/image';
import errorImage from '@/public/error.svg';

type ErrorProps = {
  message: string;
};

export function Error({ message }: ErrorProps) {
  return (
    <div className='flex rounded bg-red-100 px-2 py-1 gap-2 items-center max-w-max my-2'>
      <Image src={errorImage} alt='error' width={16} height={16} />
      <span className='text-red-700 text-sm font-medium'>{message}</span>
    </div>
  );
}
