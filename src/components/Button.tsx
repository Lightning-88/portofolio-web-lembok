interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-amber-500 text-stone-900 font-semibold hover:bg-amber-600 ${className}`}
    >
      {children}
    </button>
  );
}
