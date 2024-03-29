import express from 'express';
import { register, login } from '../controller/create';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;
