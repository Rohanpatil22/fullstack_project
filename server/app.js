import express, { json } from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";

dotenv.config();


const app=express();

app.use(express.json());
const PORT=process.env.PORT || 3000;

app.get("/",(req,res)=>{

    res.send(`<h2>Your backend is working fine on PORT ${PORT}</h2>`);
})

app.use("/api/v1",router);
app.listen(PORT,()=>{

    console.log("Your app is working fine");
})


export default app;