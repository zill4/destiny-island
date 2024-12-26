import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';

export async function submitScript(req: Request, res: Response) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    const { title, description, author, tags = [], script } = req.body;
    const userId = (req as any).user.id;

    // Create story
    const storyId = uuidv4();
    await connection.query(
      'INSERT INTO stories (id, title, summary, author_id) VALUES (?, ?, ?, ?)',
      [storyId, title, description, userId]
    );

    // Handle tags
    for (const tagName of tags) {
      // Insert tag if it doesn't exist
      const [existingTags]: any = await connection.query(
        'INSERT IGNORE INTO tags (name) VALUES (?)',
        [tagName]
      );
      
      // Get tag id
      const [tagRows]: any = await connection.query(
        'SELECT id FROM tags WHERE name = ?',
        [tagName]
      );
      const tagId = tagRows[0].id;

      // Create story-tag association
      await connection.query(
        'INSERT INTO story_tags (story_id, tag_id) VALUES (?, ?)',
        [storyId, tagId]
      );
    }

    // Here you would integrate with your AI service to analyze the script
    // and generate chapters, scenes, storyboards, and shots
    // This is a placeholder for the AI integration
    const storyStructure = await generateStoryStructure(script);

    // Create chapters, scenes, etc. based on AI output
    for (const chapterData of storyStructure.chapters) {
      const chapterId = uuidv4();
      await connection.query(
        'INSERT INTO chapters (id, name, story_id, sequence_number) VALUES (?, ?, ?, ?)',
        [chapterId, chapterData.name, storyId, chapterData.sequence]
      );

      // Create scenes for each chapter
      for (const sceneData of chapterData.scenes) {
        const sceneId = uuidv4();
        await connection.query(
          'INSERT INTO scenes (id, title, location, time_of_day, chapter_id, sequence_number) VALUES (?, ?, ?, ?, ?, ?)',
          [sceneId, sceneData.title, sceneData.location, sceneData.timeOfDay, chapterId, sceneData.sequence]
        );

        // Create storyboard for the scene
        const storyboardId = uuidv4();
        await connection.query(
          'INSERT INTO storyboards (id, scene_id) VALUES (?, ?)',
          [storyboardId, sceneId]
        );

        // Create shots for the storyboard
        for (const shotData of sceneData.shots) {
          await connection.query(
            'INSERT INTO shots (id, description, duration, camera_angle, transition, storyboard_id, sequence_number) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [uuidv4(), shotData.description, shotData.duration, shotData.cameraAngle, shotData.transition, storyboardId, shotData.sequence]
          );
        }
      }
    }

    await connection.commit();
    res.status(201).json({
      message: 'Story created successfully',
      storyId
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