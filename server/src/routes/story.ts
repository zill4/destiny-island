import { Router } from 'express';
import type { RequestHandler } from 'express';
import { submitScript } from '../controllers/story';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/submit-script', authenticateToken as RequestHandler, submitScript as RequestHandler);

export default router; 