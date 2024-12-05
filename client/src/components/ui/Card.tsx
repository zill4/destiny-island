interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Card({ children, className = '' }: CardProps) {
    return (
      <div className={`
        bg-white 
        rounded-apple-lg 
        shadow-apple
        p-6
        ${className}
      `}>
        {children}
      </div>
    );
  }