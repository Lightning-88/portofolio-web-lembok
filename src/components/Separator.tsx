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
    <div
      className={`border border-stone-700 ${className} ${
        orientation == "vertical" ? "rotate-90" : "rotate-0"
      }`}
      {...props}
    ></div>
  );
}
