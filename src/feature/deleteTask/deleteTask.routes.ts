import { Router } from 'express';
import { deleteTask } from './deleteTask.controller';

const router = Router()

router.delete('/tasks/:id', deleteTask)

export default router