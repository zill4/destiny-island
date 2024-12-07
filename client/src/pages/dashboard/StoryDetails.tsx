import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface Scene {
  id: string;
  title: string;
  type: string;
  duration: string;
  description: string;
  plotType?: string;
}

export default function StoryDetail() {
  const navigate = useNavigate();
  const [scenes] = useState<Scene[]>([
    {
      id: '1',
      title: 'Scene Creation',
      type: 'Key Plot Moment',
      duration: '60 mins',
      description: 'Set the stage for a new story arc with this pivotal scene. Let the adventure begin!'
    },
    {
      id: '2',
      title: 'Encounter with a Stranger',
      type: 'Mysterious Encounter',
      duration: '30 mins',
      description: 'Regular Plot Development',
    }
  ]);

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Story Manager: My First Story</h1>
        <button className="px-4 py-2 bg-red-200 text-red-600 rounded-lg hover:bg-red-300">
          Add
        </button>
      </div>

      {/* Tabs */}
      <Tab.Group>
        <Tab.List className="flex space-x-8 border-b">
          <Tab className={({ selected }) =>
            `pb-4 px-2 focus:outline-none ${
              selected ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'
            }`
          }>
            Scenes
          </Tab>
          <Tab className={({ selected }) =>
            `pb-4 px-2 focus:outline-none ${
              selected ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'
            }`
          }>
            Characters
          </Tab>
          <Tab className={({ selected }) =>
            `pb-4 px-2 focus:outline-none ${
              selected ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'
            }`
          }>
            Locations
          </Tab>
          <Tab className={({ selected }) =>
            `pb-4 px-2 focus:outline-none ${
              selected ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'
            }`
          }>
            Actions
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-8">
          <Tab.Panel>
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-64 px-4 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-200"
              />
            </div>

            {/* Scenes Grid */}
            <div className="grid grid-cols-2 gap-6">
              {scenes.map((scene) => (
                <div key={scene.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-200 rounded-full" />
                      <div>
                        <h3 className="font-medium">{scene.title}</h3>
                        <p className="text-sm text-gray-500">{scene.type}, {scene.duration}</p>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">{scene.description}</p>
                  <div className="flex space-x-4 mt-4">
                    <button onClick={() => navigate(`/dashboard/sceneStoryboard`)} className="px-4 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                      View
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>
          
          <Tab.Panel>
            {/* Characters content */}
          </Tab.Panel>
          
          <Tab.Panel>
            {/* Locations content */}
          </Tab.Panel>
          
          <Tab.Panel>
            {/* Actions content */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}