import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import storyRoutes from './routes/story';
import { dbInit } from './config/database';

dotenv.config();

const app = express();

// Middleware setup
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173', // Vite's default port
  credentials: true
}));
app.use(express.json());

// Route mounting
// Auth routes: /api/auth/* (login, register, etc.)
app.use('/api/auth', authRoutes);
// Story routes: /api/stories/* (submit-script, etc.)
app.use('/api/stories', storyRoutes);

// Initialize database
dbInit();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// client/src/services/storyService.ts
// Define the CreateStoryPayload type
interface CreateStoryPayload {
  title: string;
  content: string;
}

export async function createStory(storyData: CreateStoryPayload) {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3000/api/stories/submit-script', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Add token for auth middleware
    },
    body: JSON.stringify(storyData),
  });

  if (!response.ok) {
    throw new Error('Failed to create story');
  }

  return response.json();
}