import { Router } from "express";
import { CreateUser,checkUser } from "../controller/userController.js";

const router=Router();

router.use("/createUser",CreateUser);
router.use("/login",checkUser);


export default router;