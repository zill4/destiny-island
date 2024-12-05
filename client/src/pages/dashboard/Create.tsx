import { ComputerDesktopIcon, VideoCameraIcon, CubeIcon, CubeTransparentIcon, ArrowUpTrayIcon, BookOpenIcon, PlayIcon, RocketLaunchIcon, PencilSquareIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';

export default function Create() {
  const createOptions = [
    {
      title: "Prototype",
      description: "Geometry-only 3D assets for environment or character blockouts.",
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Scene",
      description: "Create an entire scene comprised of multiple 3D assets.",
      icon: <VideoCameraIcon className="w-8 h-8" />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Game-ready",
      description: "Highly detailed and textured 3D assets with LODs.",
      icon: <CubeIcon className="w-8 h-8" />,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Game-ready with rig",
      description: "Highly detailed and textured 3D assets with rigging and LODs.",
      icon: <CubeTransparentIcon className="w-8 h-8" />,
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      title: "Upload 3D Model",
      description: "Upload your own 3D model to improve or build upon it.",
      icon: <ArrowUpTrayIcon className="w-8 h-8" />,
      iconBg: "bg-pink-50",
      iconColor: "text-pink-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-8">✨ What would you like to create? ✨</h1>
      
      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        <button className="px-6 py-2 rounded-full bg-gray-900 text-white">
          General
        </button>
        <button className="px-6 py-2 rounded-full text-gray-500 hover:bg-gray-100">
          Custom
        </button>
      </div>

      {/* Creation Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {createOptions.map((option) => (
          <div key={option.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className={`${option.iconBg} ${option.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              {option.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
            <p className="text-gray-600 text-sm">{option.description}</p>
          </div>
        ))}
      </div>

      {/* Learning Center */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <BookOpenIcon className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Learning Center</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Quick-start Guide', icon: <PlayIcon className="w-5 h-5" /> },
            { title: 'Kaedim Web App Demo', icon: <RocketLaunchIcon className="w-5 h-5" /> },
            { title: 'Request Revisions', icon: <PencilSquareIcon className="w-5 h-5" /> },
            { title: 'Upgrade to Game-Ready', icon: <ArrowUpCircleIcon className="w-5 h-5" /> },
          ].map((item) => (
            <div key={item.title} className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <button className="text-red-500 text-sm hover:text-red-600">
                Watch now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}