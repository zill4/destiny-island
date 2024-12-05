import { Router } from 'express';
import type { RequestHandler } from 'express';
import { register, login, updateUser, deleteUser } from '../controllers/auth';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/register', register as RequestHandler);
router.post('/login', login as RequestHandler);
router.put('/update', authenticateToken as RequestHandler, updateUser as RequestHandler);
router.delete('/delete', authenticateToken as RequestHandler, deleteUser as RequestHandler);

export default router;