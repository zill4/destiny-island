import { useState } from 'react'
import { UserCircleIcon, KeyIcon, BellIcon } from '@heroicons/react/24/solid'
import { ProfileSection } from './settings/ProfileSection'
import { SecuritySection } from './settings/SecuritySection'
import { NotificationsSection } from './settings/NotificationsSection'
import { TabNavigation } from '../components/TabNavigation'
import { Toast } from '../components/Toast'

export default function Settings() {
  // State for profile section
  const [profileData, setProfileData] = useState({
    username: '',
    profilePicture: '',
  })

  // State for security section
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  // State for notifications
  const [notifications, setNotifications] = useState({
    newMessage: false,
    newFollower: false,
    productUpdates: false,
    securityAlerts: true, // Default on for security
    marketingEmails: false,
  })

  // Shared state
  const [activeTab, setActiveTab] = useState('profile')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserCircleIcon },
    { id: 'security', name: 'Security', icon: KeyIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
  ]

  // Handlers
  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleSecurityChange = (field: string, value: string) => {
    setSecurityData(prev => ({ ...prev, [field]: value }))
  }

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = async (file: File) => {
    try {
      // Implement image upload logic here
      // const uploadedUrl = await uploadImage(file)
      // setProfileData(prev => ({ ...prev, profilePicture: uploadedUrl }))
      setToast({ type: 'success', message: 'Profile picture updated successfully!' })
    } catch (error) {
      setToast({ type: 'error', message: `Failed to upload profile picture. ${error}` })
    }
  }

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        // Implement delete account logic here
        // await deleteAccount()
        setToast({ type: 'success', message: 'Account deleted successfully' })
      } catch (error) {
        setToast({ type: 'error', message: `Failed to delete account. ${error}` })
      }
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Profile validation
    if (activeTab === 'profile') {
      if (!profileData.username) {
        newErrors.username = 'Username is required'
      }
    }

    // Security validation
    if (activeTab === 'security') {
      if (securityData.newPassword && !securityData.currentPassword) {
        newErrors.currentPassword = 'Current password is required'
      }
      if (securityData.newPassword !== securityData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setToast({ type: 'error', message: 'Please fix the errors in the form' })
      return
    }
    
    setLoading(true)
    try {
      // Implement save logic based on active tab
      switch (activeTab) {
        case 'profile':
          // await updateProfile(profileData)
          break
        case 'security':
          // await updatePassword(securityData)
          break
        case 'notifications':
          // await updateNotifications(notifications)
          break
      }
      
      setToast({ type: 'success', message: 'Settings saved successfully!' })
    } catch (error) {
      setToast({ type: 'error', message: `Failed to save settings. ${error}` })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <TabNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      <div className="space-y-12">
        {activeTab === 'profile' && (
          <ProfileSection
            formData={profileData}
            errors={errors}
            onChange={handleProfileChange}
            onImageUpload={handleImageUpload}
          />
        )}

        {activeTab === 'security' && (
          <SecuritySection
            formData={securityData}
            errors={errors}
            onChange={handleSecurityChange}
            onDeleteAccount={handleDeleteAccount}
          />
        )}

        {activeTab === 'notifications' && (
          <NotificationsSection
            notifications={notifications}
            onChange={handleNotificationChange}
          />
        )}
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold text-gray-900"
          onClick={() => setActiveTab('profile')}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {toast && <Toast type={toast.type} message={toast.message} />}
    </form>
  )
}