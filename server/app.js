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
        origin:"https://65d61b10a53d28ca0d78c173--effervescent-cascaron-d4b467.netlify.app",
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