import { Router } from 'express';
import { getTasks } from './getTasks.controller';

const router = Router()

router.get('/tasks', getTasks)

export default router