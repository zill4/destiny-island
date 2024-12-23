import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HomeIcon,  CogIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');  
  };

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
          to="/dashboard/createStory" 
          className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-200"
        >
          <span className="text-2xl">+</span>
        </Link>

        {/* Navigation Icons */}
        <nav className="flex flex-col space-y-6">
          <Link to="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg">
            <HomeIcon className="w-6 h-6 text-gray-600" />
          </Link>
        </nav>

        {/* Bottom Icons */}
        <div className="mt-auto flex flex-col space-y-6">
          <Link to="/dashboard/settings" className="p-2 hover:bg-gray-100 rounded-lg">
            <CogIcon className="w-6 h-6 text-gray-600" />
          </Link>
          <button onClick={handleLogout} className="p-2 hover:bg-gray-100 rounded-lg">
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