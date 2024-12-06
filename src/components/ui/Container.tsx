type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>{children}</div>
  );
}
