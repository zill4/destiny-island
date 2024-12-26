interface CreateStoryPayload {
  title: string;
  description: string;
  author: string;
  series?: string;
  script: string;
  tags?: string[];
}

export async function createStory(storyData: CreateStoryPayload) {
  const response = await fetch('/api/stories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(storyData),
  });

  if (!response.ok) {
    throw new Error('Failed to create story');
  }

  return response.json();
} 