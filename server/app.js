import express, { json } from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config();


const app=express();

app.use(cors({

    //origin:'http://localhost:3000', 
    origin:'https://fullstack-project-restaurant-table-acoi.onrender.com', 
    credentials:true,            //access-control-allow-credentials:true
    
    
}));
app.use(express.json());


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