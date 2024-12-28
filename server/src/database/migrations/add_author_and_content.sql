ALTER TABLE stories 
ADD COLUMN author_name VARCHAR(255) AFTER author_id,
ADD COLUMN content TEXT AFTER summary;

CREATE TABLE IF NOT EXISTS story_tags (
  story_id VARCHAR(36),
  tag_name VARCHAR(255),
  PRIMARY KEY (story_id, tag_name),
  FOREIGN KEY (story_id) REFERENCES stories(id) ON DELETE CASCADE
);