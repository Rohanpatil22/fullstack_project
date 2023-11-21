import { Router } from "express";
import { CreateUser } from "../controller/userController.js";

const router=Router();

router.use("/createUser",CreateUser);


export default router;