type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border rounded-lg p-4 shadow hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}
