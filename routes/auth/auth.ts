import { Router } from 'express';
import { Auth } from '@controllers/authController'; 

const router: Router = Router();
const auth: Auth = new Auth();

router.post("/getUser", auth.loginUser);
router.post("/registerUser", auth.registerUser);

export default router;