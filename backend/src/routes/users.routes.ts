import { Router } from "express"
import { UsersController } from "../controllers/users.controller";


const router = Router();

router.post('/', UsersController.create)
router.get('/')
router.get('/')

export default router