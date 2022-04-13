import { Request, Response, Router } from 'express';
import * as controllers from '../../controllers/auth'; 

const router: Router = Router();

router.post("/getUser", controllers.getUser);
router.post("/registerUser", controllers.registerUser)

export default router;