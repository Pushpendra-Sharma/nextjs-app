import { Button } from './Button';

export function Introduction() {
  return (
    <div className='p-8'>
      <p>
        Up-skilling requires time commitment The GrowthX experience is designed
        by keeping in mind the working hours founders &amp; full time operators
        typically work in.
      </p>
      <br />
      <p>You will spend</p>
      <p>- 6 hours/week for the first 5 weeks</p>
      <p>- 15 hours/week for the last 3 weeks</p>
      <br />
      <Button label='I agree' onClick={() => {}} />
    </div>
  );
}
