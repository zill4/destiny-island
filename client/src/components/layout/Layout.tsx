import { useNavigate } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/sign-up');
    }
    const returnHome = () => {
        navigate('/');
    }
    const handleLogIn = () => {
        navigate('/sign-in');
    }

    return (
      <div className="min-h-screen bg-white">
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <button onClick={returnHome} className="text-xl font-semibold text-indigo-600">Destiny Island</button>
              <div className="flex space-x-4">
                <button onClick={handleSignUp} className="text-gray-700 hover:text-gray-900">Sign Up</button>
                <button onClick={handleLogIn} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </div>
    );
  }