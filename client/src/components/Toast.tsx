interface ToastProps {
    type: 'success' | 'error'
    message: string
  }
  
  export function Toast({ type, message }: ToastProps) {
    return (
      <div 
        className={`
          fixed bottom-4 right-4 rounded-md p-4 shadow-lg
          ${type === 'success' ? 'bg-green-50 text-green-800' : 'bg-teal-50 text-teal-800'}
        `}
      >
        {message}
      </div>
    )
  }