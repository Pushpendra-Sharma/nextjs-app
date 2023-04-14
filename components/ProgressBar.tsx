type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <progress
      id='progress'
      value={value}
      title='Progress Bar'
      max='100'
      className='w-full h-1 mt-0'
    ></progress>
  );
}
