import { Router } from "express"
import { UsersController } from "../controllers/users.controller";


const router = Router();

router.post('/', UsersController.create)
router.get('/', UsersController.getAll)
router.get('/:ID', UsersController.getId)

export default router