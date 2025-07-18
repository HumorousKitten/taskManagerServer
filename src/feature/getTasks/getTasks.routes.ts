import { Router } from 'express';
import { getTasks } from './getTasks.controller';
import { getTasksById } from './getTasksById.controller'

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTasksById)

export default router