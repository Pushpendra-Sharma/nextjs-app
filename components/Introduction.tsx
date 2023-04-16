import { Button } from './Button';

export function Introduction() {
  return (
    <div className=''>
      <h1 className='text-xl my-2'>Up-skilling requires time commitment</h1>
      <p className='text-base text-gray-400'>
        The GrowthX experience is designed by keeping in mind the working hours
        founders &amp; full time operators typically work in.
      </p>
      <br />
      <p className='text-base text-gray-400'>You will spend</p>
      <p className='text-base text-gray-400'>
        - 6 hours/week for the first 5 weeks
      </p>
      <p className='text-base text-gray-400'>
        - 15 hours/week for the last 3 weeks
      </p>
      <br />
      <Button label='I agree' onClick={() => {}} />
    </div>
  );
}
