import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

export default function Dashboard() {
  return (
    <Layout>
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Tools</h2>
          <nav className="space-y-1">
            <Link to="/manage-scenes" className="block p-3 rounded-md bg-gray-100 hover:bg-gray-200">
              Manage Scenes
            </Link>
            <Link to="/people" className="block p-3 rounded-md hover:bg-gray-100">
              People
            </Link>
            <Link to="/places" className="block p-3 rounded-md hover:bg-gray-100">
              Places
            </Link>
            <Link to="/things" className="block p-3 rounded-md hover:bg-gray-100">
              Things
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Storyboard Viewer</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Scene Cards */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="/path-to-scene1-image.jpg" 
                alt="Scene 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Scene 1: The Beginning</h3>
                <button className="px-4 py-2 bg-pink-200 rounded hover:bg-pink-300">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="/path-to-scene2-image.jpg" 
                alt="Scene 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Scene 2: City Life</h3>
                <button className="px-4 py-2 bg-pink-200 rounded hover:bg-pink-300">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="/path-to-scene3-image.jpg" 
                alt="Scene 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Scene 3: Forest Encounter</h3>
                <button className="px-4 py-2 bg-pink-200 rounded hover:bg-pink-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}