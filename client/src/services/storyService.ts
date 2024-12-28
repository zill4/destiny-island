interface CreateStoryPayload {
  title: string;
  description: string;
  author: string;
  tags?: string[];
  script: string;
}

export async function createStory(storyData: CreateStoryPayload) {
  const token = localStorage.getItem('token');
  // TODO: Swap out URL based on environment
  const response = await fetch('http://localhost:3000/api/stories/submit-script', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(storyData),
  });

  if (!response.ok) {
    throw new Error('Failed to create story');
  }

  return response.json();
}