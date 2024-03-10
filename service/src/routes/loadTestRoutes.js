import { Router } from 'express';
import createTest from '../controllers/loadTestController.js';

const router = Router();

router.post('/create', createTest);

export default router;
