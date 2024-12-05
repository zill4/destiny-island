interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'text';
    size?: 'sm' | 'md' | 'lg';
  }
  
  export function Button({ 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    children, 
    ...props 
  }: ButtonProps) {
    const baseStyles = "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-500",
      secondary: "bg-primary-100 hover:bg-primary-200 text-primary-900 focus:ring-primary-500",
      text: "hover:bg-primary-50 text-primary-900"
    };
  
    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-apple-sm",
      md: "px-4 py-2 text-base rounded-apple",
      lg: "px-6 py-3 text-lg rounded-apple-lg"
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }