import { Router } from "express";
import { CreateUser,checkUser,ShowData } from "../controller/userController.js";

const router=Router();

router.use("/createUser",CreateUser);
router.use("/login",checkUser);
router.use("/getdata",ShowData);


export default router;