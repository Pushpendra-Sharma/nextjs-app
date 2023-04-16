type ButtonProps = {
  label: string;
  onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className='bg-[#0077ff] px-4 py-2 text-lg rounded' onClick={onClick}>
      {label}
    </button>
  );
}
