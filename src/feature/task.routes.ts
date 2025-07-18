import { Router } from 'express';
import { createTask } from './createTask/createTask.controller';
import { deleteTask } from './deleteTask/deleteTask.controller';
import { getTasks } from './getTasks/getTasks.controller';
import { getTasksById } from './getTasks/getTasksById.controller';
import { updateTask } from './updateTask/updateTask.controller';

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTasksById)
router.delete('/tasks/:id', deleteTask)
router.post('/tasks', createTask)
router.patch('/tasks/:id', updateTask)

export default router