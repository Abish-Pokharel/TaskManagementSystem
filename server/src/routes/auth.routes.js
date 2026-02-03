import express from "express";
import {register , login, getUserDetail} from "../controllers/auth_controller.js"
import { authenticate } from "../middlewares/auth_middleware.js";
const router = express.Router();

router.post("/register",register)
router.post("/login" ,login)
router.get('/getuser',authenticate, getUserDetail )
export default router