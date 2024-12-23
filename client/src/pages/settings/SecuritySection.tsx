interface SecuritySectionProps {
    formData: {
      currentPassword: string
      newPassword: string
      confirmPassword: string
    }
    errors: Record<string, string>
    onChange: (field: string, value: string) => void
    onDeleteAccount: () => void
  }
  
  export function SecuritySection({ formData, errors, onChange, onDeleteAccount }: SecuritySectionProps) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="currentPassword" className="block text-sm/6 font-medium text-gray-900">
              Current Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="currentPassword"
                value={formData.currentPassword}
                onChange={(e) => onChange('currentPassword', e.target.value)}
                className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
              {errors.currentPassword && (
                <p className="mt-2 text-sm text-teal-600">{errors.currentPassword}</p>
              )}
            </div>
          </div>
  
          <div className="sm:col-span-4">
            <label htmlFor="newPassword" className="block text-sm/6 font-medium text-gray-900">
              New Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="newPassword"
                value={formData.newPassword}
                onChange={(e) => onChange('newPassword', e.target.value)}
                className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
              {errors.newPassword && (
                <p className="mt-2 text-sm text-teal-600">{errors.newPassword}</p>
              )}
            </div>
          </div>
  
          <div className="sm:col-span-4">
            <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900">
              Confirm New Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => onChange('confirmPassword', e.target.value)}
                className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-teal-600">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-900/10 pt-8">
          <h2 className="text-base font-semibold text-teal-600">Danger Zone</h2>
          <p className="mt-1 text-sm text-gray-600">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={onDeleteAccount}
              className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    )
  }