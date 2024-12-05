import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold">Destiny Island</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <Link to="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gray-900">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}