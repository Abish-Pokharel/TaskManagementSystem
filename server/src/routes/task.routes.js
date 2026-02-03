import express from "express";
import { create_task , get_all , get_by_id ,delete_task ,update_task , pinned_task} from "../controllers/task.controller.js";
import { authenticate } from "../middlewares/auth_middleware.js";
const router = express.Router()
// CRUD
router.get("/" , authenticate,get_all)

router.post("/" , authenticate,create_task)

router.put("/:user" , authenticate,update_task)

router.get("/:user" , authenticate,get_by_id)

router.delete("/:user" , authenticate,delete_task)

router.get("/:user" , authenticate,pinned_task)
export default router;
