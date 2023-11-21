import mongoose from "mongoose";
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs"
import { json } from "express";


export const CreateUser= async(req,res)=>{

    const{name,email,mobno,password}=req.body;

    if(!(name && email && mobno && password))
    {
       return res.json({
        
            msg:"All fields are mandatory."
        })
    }

    const existingUser= await User.findOne({email});

    if(existingUser)
    {
        res.json({
            msg:"User Already exists."
        })
    }

    const bcryptpassword=await bcrypt.hash(password,10);
    const newUser= await User.create({name,email,mobno,password:bcryptpassword})

    if(!newUser)
    {
       throw Error("User not cretated.Something went wrong.");
    }

    res.json({

        newUser,
        msg:"User created Successfully."
    })
}