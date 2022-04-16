import { TaskController } from './../../controllers/tasksController';
import { Router } from 'express'

const router = Router()
const task = new TaskController();

router.post('/createTask', task.createTask)

export default router