import mongoose from "mongoose";
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs"
import { json } from "express";
import jwt from "jsonwebtoken";



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
    
    const token=jwt.sign(
        
        {id:newUser._id,email},
        process.env.SECRET_KEY

        );

    const options={

        expires:new Date(Date.now()+ 60*1000),
        httpOnly:true
    }
    res.status(200).cookie("jwttoken",token,options).json({

        newUser,
        msg:"User created Successfully."
    })
}

export const checkUser=async(req,res)=>{

    const{email,password}=req.body;

    if(!(email && password))
    {
        return res.status(400).json({

            msg:"All fields are mandatory."
        })
    }

    const RegisterUser= await User.findOne({email});

    if(RegisterUser && await bcrypt.compare(password,RegisterUser.password))
    {
        const token=jwt.sign(
            {id:RegisterUser._id,email},
            process.env.SECRET_KEY
            
        )

        const options={
            expires:new Date(Date.now()+ 60*1000),
            httpOnly:true
        }

        res.status(200).cookie("jwttoken",token,options).json({

            Success:true,
            token,
            msg:"User Authentication Successful"
        })
    }

    else{

        res.status(400).json({

            Success:false,
            msg:"Something went wrong"
        })
    }
}

export const ShowData= async(req,res)=>{

    console.log(req.cookies.jwttoken);

    res.status(200).json({

        Success:true,
        msg:"This is data"
    })
}