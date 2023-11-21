import app from "./app.js";
import mongoose from "mongoose";

const MongoUrl=process.env.MONGO_URL;

(async()=>{
    try {
        
        await mongoose.connect(MongoUrl);
        console.log("Database Connected Successfully!!!");
    } catch (error) {
        console.log(error);
    }
})();