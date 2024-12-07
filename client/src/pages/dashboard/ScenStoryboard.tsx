import { useState } from 'react';

interface Shot {
  id: number;
  imageUrl: string;
  description: string;
  notes: {
    staging: string;
    dialogue: string;
    soundCues: string;
    additional?: string;
  };
}

export default function SceneStoryboard() {
  const [shots] = useState<Shot[]>([
    {
      id: 1,
      imageUrl: "/storyboard/shot1.jpg", // You'll need to add actual images
      description: "Zoom out as cycles come down the hill.",
      notes: {
        staging: "Wide shot - Sea and BIC visible, Hot Rocks in frame",
        dialogue: "N/A",
        soundCues: "Bicycle wheels on gravel, wind",
      }
    },
    {
        id: 2,
        imageUrl: "/storyboard/shot1.jpg", // You'll need to add actual images
        description: "Zoom out as cycles come down the hill.",
        notes: {
          staging: "Wide shot - Sea and BIC visible, Hot Rocks in frame",
          dialogue: "N/A",
          soundCues: "Bicycle wheels on gravel, wind",
        }
      },
      {
        id: 3,
        imageUrl: "/storyboard/shot1.jpg", // You'll need to add actual images
        description: "Zoom out as cycles come down the hill.",
        notes: {
          staging: "Wide shot - Sea and BIC visible, Hot Rocks in frame",
          dialogue: "N/A",
          soundCues: "Bicycle wheels on gravel, wind",
        }
      },
      {
        id: 4,
        imageUrl: "/storyboard/shot1.jpg", // You'll need to add actual images
        description: "Zoom out as cycles come down the hill.",
        notes: {
          staging: "Wide shot - Sea and BIC visible, Hot Rocks in frame",
          dialogue: "N/A",
          soundCues: "Bicycle wheels on gravel, wind",
        }
      },
    // Add other shots similarly
  ]);

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Scene Storyboard</h1>
      
      {/* Storyboard Grid */}
      <div className="grid grid-cols-4 gap-6">
        {shots.map((shot) => (
          <div key={shot.id} className="bg-gray-50 rounded-lg p-4">
            {/* Shot Number */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-lg">Shot {shot.id}</span>
              <span className="text-sm text-gray-500">Duration: TBD</span>
            </div>
            
            {/* Storyboard Frame */}
            <div className="aspect-video bg-white border-2 border-gray-300 rounded-lg mb-4">
              <img
                src={shot.imageUrl}
                alt={`Shot ${shot.id}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-sm text-gray-700">{shot.description}</p>
            </div>

            {/* Production Notes */}
            <div className="space-y-2 text-sm">
              <div className="bg-blue-50 p-2 rounded">
                <span className="font-semibold text-blue-700">Staging: </span>
                <span className="text-blue-600">{shot.notes.staging}</span>
              </div>
              
              <div className="bg-purple-50 p-2 rounded">
                <span className="font-semibold text-purple-700">Dialogue: </span>
                <span className="text-purple-600">{shot.notes.dialogue}</span>
              </div>
              
              <div className="bg-green-50 p-2 rounded">
                <span className="font-semibold text-green-700">Sound: </span>
                <span className="text-green-600">{shot.notes.soundCues}</span>
              </div>

              {shot.notes.additional && (
                <div className="bg-yellow-50 p-2 rounded">
                  <span className="font-semibold text-yellow-700">Notes: </span>
                  <span className="text-yellow-600">{shot.notes.additional}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Production Overview */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Production Notes</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Equipment Needed</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Camera with wide-angle lens</li>
              <li>Drone for aerial shots</li>
              <li>Stabilizer for tracking shots</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Location Details</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Hot Rocks area</li>
              <li>Sea view required</li>
              <li>Steps location for final shot</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Special Requirements</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Cyclists needed</li>
              <li>Flag carrier</li>
              <li>Permission for location filming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}