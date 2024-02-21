import express, { json } from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";
import Cors from "cors";


dotenv.config();


const app=express();

app.use(express.json());
app.use(Cors(
    {
        origin:"https://restaurant-booking-app.onrender.com",
        credentials:true
    }
));

app.use(cookieParser());
const PORT=process.env.PORT || 3000;

app.get("/",(req,res)=>{

    res.send(`<h2>Your backend is working fine on PORT ${PORT}</h2>`);
})

app.use("/api/v1",router);
app.listen(PORT,()=>{

    console.log("Your app is working fine");
})


export default app;