type ProgressBarProps = {
  value: number;
  max?: number;
};

export function ProgressBar({ value, max = 5 }: ProgressBarProps) {
  return (
    <progress
      id='progress'
      value={value}
      title='Progress Bar'
      max={max}
      className='w-full h-1 mt-0'
    ></progress>
  );
}
