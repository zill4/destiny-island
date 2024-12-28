import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';

interface StoryRequest {
  title: string;
  description: string;
  author: string;
  tags: string[];
  script: string;
}

/*
  SubmitScript function
  This function is responsible for creating a new story in the database.
  Params:
  title: string - The title of the story
  description: string - A brief description of the story
  author: string - The author of the story
  tags: string[] - An array of tags associated with the story
*/
export async function submitScript(req: Request, res: Response) {
  const connection = await pool.getConnection();
  try {
    const { title, description, author, tags = [], script } = req.body as StoryRequest;
    const userId = (req as any).user.id;

    if (!title || !description || !script) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await connection.beginTransaction();

    // Create story with author field
    const storyId = uuidv4();
    await connection.query(
      'INSERT INTO stories (id, title, summary, author_id, author_name, content) VALUES (?, ?, ?, ?, ?, ?)',
      [storyId, title, description, userId, author, script]
    );

    // Handle tags
    for (const tagName of tags) {
      // Insert tag if doesn't exist and get its ID
      await connection.query(
        'INSERT IGNORE INTO tags (name) VALUES (?)',
        [tagName]
      );
      
      // Link tag to story
      await connection.query(
        'INSERT INTO story_tags (story_id, tag_name) VALUES (?, ?)',
        [storyId, tagName]
      );
    }

    await connection.commit();

    res.status(201).json({
      success: true,
      data: {
        id: storyId,
        title,
        description,
        author,
        tags,
        userId
      }
    });

  } catch (error) {
    await connection.rollback();
    console.error('Error creating story:', error);
    res.status(500).json({ error: 'Failed to create story' });
  } finally {
    connection.release();
  }
}

// Placeholder for AI integration
async function generateStoryStructure(script: string) {
  // This would be replaced with actual AI service integration
  // Return a mock structure for now
  return {
    chapters: [
      {
        name: 'Chapter 1',
        sequence: 1,
        scenes: [
          {
            title: 'Opening Scene',
            location: 'City Street',
            timeOfDay: 'Morning',
            sequence: 1,
            shots: [
              {
                description: 'Wide shot of city street',
                duration: 5,
                cameraAngle: 'Wide',
                transition: 'Cut',
                sequence: 1
              }
            ]
          }
        ]
      }
    ]
  };
}