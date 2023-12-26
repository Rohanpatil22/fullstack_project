import { Router } from "express";
import { CreateUser,checkUser,ShowData } from "../controller/userController.js";
import {booktable,bookedData} from "../controller/bookingController.js"
import { UserAuth } from "./middleware/Auth.js";
const router=Router();

router.use("/createUser",CreateUser);
router.use("/login",checkUser);
router.use("/getdata",UserAuth,ShowData);
router.use("/booktable",UserAuth,booktable);
router.use("/getBookingData",UserAuth,bookedData);


export default router;