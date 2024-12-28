import { Router } from 'express';
import type { RequestHandler } from 'express';
import { submitScript } from '../controllers/story';
import { authenticateToken } from '../middleware/auth';

const router = Router();

/**
 * Story Routes (/api/stories)
 * POST /submit-script - Create a new story
 * Requires authentication
 * Expected payload: { title, description, author, tags, script }
 */
router.post('/submit-script', authenticateToken as RequestHandler, submitScript as RequestHandler);

export default router;