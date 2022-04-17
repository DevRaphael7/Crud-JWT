import { TaskController } from './../../controllers/tasksController';
import { Router } from 'express'

const router = Router()
const task = new TaskController();

router.post('/createTask', task.createTask)
router.post('/getTaskByUserId', task.getTaskByUserId)

export default router