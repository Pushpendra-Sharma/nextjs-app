type QuestionDetailsProps = {
  heading: string;
  description?: string;
  isRequired?: boolean;
  name?: string;
};

export function QuestionDetails({
  heading,
  description,
  isRequired,
  name,
}: QuestionDetailsProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-2xl text-white'>
        {name && <span>{name}</span>}
        <span>{heading}</span>
        {isRequired && <span>*</span>}
      </div>
      {description && <p className=''>{description}</p>}
    </div>
  );
}
