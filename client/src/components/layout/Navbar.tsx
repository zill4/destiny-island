import { Link } from 'react-router-dom';

export default function Navbar() {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-semibold text-indigo-600">
            Destiny Island
          </Link>
          
          <div className="flex space-x-4">
            {token ? (
              <>
                <Link to="/script-editor" className="px-3 py-2 rounded-md hover:bg-gray-100">
                  Script Editor
                </Link>
                <Link to="/scene-management" className="px-3 py-2 rounded-md bg-pink-200 hover:bg-pink-300">
                  Scene Management
                </Link>
                <Link to="/storyboard" className="px-3 py-2 rounded-md hover:bg-gray-100">
                  Storyboard Viewer
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 text-gray-700 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-gray-900">
                  Login
                </Link>
                <Link to="/register" className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}