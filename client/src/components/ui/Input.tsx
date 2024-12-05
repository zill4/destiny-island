interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
  }
  
  export function Input({ 
    label, 
    error, 
    className = '', 
    ...props 
  }: InputProps) {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-primary-700">
            {label}
          </label>
        )}
        <input
          className={`
            w-full px-3 py-2 
            bg-white border border-primary-300 
            rounded-apple-sm
            text-primary-900 
            placeholder-primary-400
            focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500
            disabled:bg-primary-50 disabled:text-primary-500
            transition-colors duration-200
            ${error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-sm text-error-600">{error}</p>
        )}
      </div>
    );
  }