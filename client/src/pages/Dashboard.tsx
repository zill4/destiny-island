import { Link, Outlet } from 'react-router-dom';
import { HomeIcon, SparklesIcon, BookOpenIcon, CogIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-16 bg-white border-r flex flex-col items-center py-6 space-y-8">
        {/* Logo */}
        <div className="w-8 h-8">
          <img src="/logo.png" alt="Logo" className="w-full h-full" />
        </div>

        {/* Create Button */}
        <Link 
          to="/dashboard/create" 
          className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 hover:bg-red-200"
        >
          <span className="text-2xl">+</span>
        </Link>

        {/* Navigation Icons */}
        <nav className="flex flex-col space-y-6">
          <Link to="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg">
            <HomeIcon className="w-6 h-6 text-gray-600" />
          </Link>
          <Link to="/dashboard/scripts" className="p-2 hover:bg-gray-100 rounded-lg">
            <SparklesIcon className="w-6 h-6 text-gray-600" />
          </Link>
          <Link to="/dashboard/learning" className="p-2 hover:bg-gray-100 rounded-lg">
            <BookOpenIcon className="w-6 h-6 text-gray-600" />
          </Link>
        </nav>

        {/* Bottom Icons */}
        <div className="mt-auto flex flex-col space-y-6">
          <Link to="/dashboard/settings" className="p-2 hover:bg-gray-100 rounded-lg">
            <CogIcon className="w-6 h-6 text-gray-600" />
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowRightOnRectangleIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}