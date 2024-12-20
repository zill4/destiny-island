import { useState } from 'react';

interface StoryData {
  title: string;
  description: string;
  author: string;
  series?: string;
  script: string;
}

export default function CreateStory() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement story creation logic
    console.log('Story data:', storyData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Script Editor Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Script Editor</h2>
          <textarea
            name="script"
            value={storyData.script}
            onChange={handleInputChange}
            placeholder="Write your script here..."
            className="w-full h-[600px] p-4 border rounded-lg resize-none"
          />
        </div>

        {/* About Section */}
        <div className="md:col-span-1">
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
              </div>

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
                className="w-full mt-6 bg-red-300 hover:bg-red-400 text-white py-2 px-4 rounded transition-colors"
              >
                Create Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}