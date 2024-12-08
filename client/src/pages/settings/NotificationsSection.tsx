interface NotificationsSectionProps {
    notifications: {
      newMessage: boolean
      newFollower: boolean
      productUpdates: boolean
      securityAlerts: boolean
      marketingEmails: boolean
    }
    onChange: (field: string, value: boolean) => void
  }
  
  export function NotificationsSection({ notifications, onChange }: NotificationsSectionProps) {
    const notificationOptions = [
      { id: 'newMessage', label: 'New Messages', description: 'Get notified when you receive a new message' },
      { id: 'newFollower', label: 'New Followers', description: 'Get notified when someone follows you' },
      { id: 'productUpdates', label: 'Product Updates', description: 'Get notified about new features and improvements' },
      { id: 'securityAlerts', label: 'Security Alerts', description: 'Get notified about security updates and unusual activity' },
      { id: 'marketingEmails', label: 'Marketing Emails', description: 'Receive emails about new products, features, and more' },
    ]
  
    return (
      <div className="space-y-6">
        {notificationOptions.map((option) => (
          <div key={option.id} className="flex items-start">
            <div className="flex h-6 items-center">
              <input
                id={option.id}
                type="checkbox"
                checked={notifications[option.id as keyof typeof notifications]}
                onChange={(e) => onChange(option.id, e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3">
              <label htmlFor={option.id} className="text-sm font-medium text-gray-900">
                {option.label}
              </label>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }