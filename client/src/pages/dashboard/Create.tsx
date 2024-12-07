import {BookOpenIcon} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const navigate = useNavigate();

  const createOptions = [
    {
      title: "Story",
      description: "Create a new story by uploading a script/book, or pasting in a script/book.",
      icon: <BookOpenIcon className="w-8 h-8" />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      path: "/dashboard/createStory"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-8">✨ What would you like to create? ✨</h1>
      

      {/* Creation Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {createOptions.map((option) => (
          <div onClick={() => navigate(option.path)} key={option.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow hover:cursor-pointer">
            <div className={`${option.iconBg} ${option.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              {option.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
            <p className="text-gray-600 text-sm">{option.description}</p>
          </div>
        ))}
      </div>

    </div>  
  );
}