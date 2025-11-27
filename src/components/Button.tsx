import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-stone-500 rounded-md hover:bg-stone-600 ${className}`}
    >
      {children}
    </button>
  );
}
