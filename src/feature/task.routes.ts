import { Router } from 'express';
import { createTask } from './createTask/createTask.controller';
import { deleteTask } from './deleteTask/deleteTask.controller';
import { getTasks } from './getTasks/getTasks.controller';
import { getTasksById } from './getTasks/getTasksById.controller';

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTasksById)
router.delete('/tasks/:id', deleteTask)
router.post('/tasks', createTask)

export default router