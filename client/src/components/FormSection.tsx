interface FormSectionProps {
    title: string
    description?: string
    children: React.ReactNode
  }
  
  export function FormSection({ title, description, children }: FormSectionProps) {
    return (
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base/7 font-semibold text-gray-900">{title}</h2>
        {description && (
          <p className="mt-1 text-sm/6 text-gray-600">{description}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    )
  }