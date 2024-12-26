import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStory } from '../../services/storyService';

interface StoryData {
  title: string;
  description: string;
  author: string;
  series?: string;
  script: string;
}

export default function CreateStory() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [storyData, setStoryData] = useState<StoryData>({
    title: '',
    description: '',
    author: '',
    series: '',
    script: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStoryData(prev => ({
      ...prev,
      [name]: value
    }));  
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await createStory({
        ...storyData,
        tags: [], // Add tags if needed
      });

      // Navigate to the story details page with the new story ID
      navigate(`/dashboard/story/${response.storyId}`);
    } catch (err) {
      setError('Failed to create story. Please try again.');
      console.error('Error creating story:', err);
    } finally {
      setLoading(false);
    }
  };

  const characterCount = storyData.script.length;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Script Editor</h2>
        {characterCount > 0 && (
          <span className="text-sm text-gray-500">
            {characterCount.toLocaleString()} characters
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <textarea
            name="script"
            value={storyData.script}
            onChange={handleInputChange}
            placeholder="Write your script here..."
            className="w-full h-[calc(100vh-200px)] p-4 border rounded-lg resize-none"
          />
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">About</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={storyData.title}
                    onChange={handleInputChange}
                    placeholder="Add scene tags..."
                    className="w-full p-2 border rounded"
                  />
                </div>=

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <input
                    type="text"
                    name="description"
                    value={storyData.description}
                    onChange={handleInputChange}
                    placeholder="Add people tags..."
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={storyData.author}
                    onChange={handleInputChange}
                    placeholder="Add place tags..."
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Series (optional)</label>
                  <input
                    type="text"
                    name="series"
                    value={storyData.series}
                    onChange={handleInputChange}
                    placeholder="Add thing tags..."
                    className="w-full p-2 border rounded"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full mt-6 bg-teal-300 hover:bg-teal-400 text-white py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Story...' : 'Create Story'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}