export interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export function Button({ text, className, onClick }: ButtonProps) {
  const classes = className
    ? className
    : 'bg-white hover:bg-slate-100 py-4 px-6 w-auto min-w-min max-w-max border border-gray-200 rounded-md cursor-pointer shadow-md';
  return (
    <div className={classes} onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
