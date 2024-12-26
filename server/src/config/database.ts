import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function dbInit() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Stories table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS stories (
        id VARCHAR(36) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        genre VARCHAR(100),
        summary TEXT,
        author_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (author_id) REFERENCES users(id)
      )
    `);

    // Chapters table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS chapters (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        story_id VARCHAR(36),
        sequence_number INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (story_id) REFERENCES stories(id) ON DELETE CASCADE
      )
    `);

    // Scenes table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS scenes (
        id VARCHAR(36) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        time_of_day VARCHAR(50),
        chapter_id VARCHAR(36),
        sequence_number INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
      )
    `);

    // Storyboards table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS storyboards (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255),
        scene_id VARCHAR(36) UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (scene_id) REFERENCES scenes(id) ON DELETE CASCADE
      )
    `);

    // Shots table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS shots (
        id VARCHAR(36) PRIMARY KEY,
        description TEXT,
        duration FLOAT,
        camera_angle VARCHAR(100),
        transition VARCHAR(100),
        storyboard_id VARCHAR(36),
        sequence_number INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (storyboard_id) REFERENCES storyboards(id) ON DELETE CASCADE
      )
    `);

    // Tags table and story_tags junction table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tags (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) UNIQUE NOT NULL
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS story_tags (
        story_id VARCHAR(36),
        tag_id INT,
        PRIMARY KEY (story_id, tag_id),
        FOREIGN KEY (story_id) REFERENCES stories(id) ON DELETE CASCADE,
        FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
      )
    `);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
  }
}

export default pool;