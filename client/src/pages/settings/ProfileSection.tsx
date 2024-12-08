import {  UserCircleIcon } from '@heroicons/react/24/solid'

interface ProfileSectionProps {
  formData: {
    username: string
    profilePicture?: string
  }
  errors: Record<string, string>
  onChange: (field: string, value: string) => void
  onImageUpload: (file: File) => void
}

export function ProfileSection({ formData, errors, onChange, onImageUpload }: ProfileSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
          Username
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={(e) => onChange('username', e.target.value)}
            className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          {errors.username && (
            <p className="mt-2 text-sm text-red-600">{errors.username}</p>
          )}
        </div>
      </div>

      <div className="col-span-full">
        <label className="block text-sm/6 font-medium text-gray-900">
          Profile Picture
        </label>
        <div className="mt-2 flex items-center gap-x-3">
          {formData.profilePicture ? (
            <img
              src={formData.profilePicture}
              alt="Profile"
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <UserCircleIcon className="h-12 w-12 text-gray-300" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && onImageUpload(e.target.files[0])}
            className="hidden"
            id="profile-upload"
          />
          <label
            htmlFor="profile-upload"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Change
          </label>
        </div>
      </div>
    </div>
  )
}