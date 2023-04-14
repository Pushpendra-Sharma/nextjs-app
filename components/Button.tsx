type ButtonProps = {
  label: string;
  onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className='bg-sky-500 px-4 py-2 text-bold' onClick={onClick}>
      {label}
    </button>
  );
}
