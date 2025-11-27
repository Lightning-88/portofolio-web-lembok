interface SeparatorProps {
  className?: string;
  orientation?: string;
}

export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <div className={`border border-stone-700 ${className}`} {...props}></div>
  );
}
