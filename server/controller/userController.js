import mongoose from "mongoose";
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs"
import { json } from "express";
import jwt from "jsonwebtoken";
import sendmail from '../Nodemailer/SendEmail.js';



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
      // throw Error("User not cretated.Something went wrong.");
      res.status(400).json({

        success:false,
        msg:"User not cretated.Something went wrong."
      })
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

    console.log(email,password);
    if(!(email && password))
    {
        console.log("inside if statement");
        return res.status(400).json({

            msg:"All fields are mandatory."
        })
    }

    const RegisterUser= await User.findOne({email});

    console.log(RegisterUser);
    if(RegisterUser && await bcrypt.compare(password,RegisterUser.password))
    {
        const token=jwt.sign(
            {id:RegisterUser._id,email},
            process.env.SECRET_KEY
            
        )

        const options={
            expires:new Date(Date.now()+ 10*60*1000),
            httpOnly:true,
            secure:true,      // comment for developement env
            // secure:false,  //uncomment for developement env
            // sameSite:"lax", //uncomment for developement env
            sameSite:"None", // comment for developement env
            // domain:".localhost"
           
          
        }

        console.log(token);
        // res.cookie("jwttoken",token,options);
         res.status(200).cookie("jwttoken",token,options).json({
        //  res.status(200).json({

            Success:true,
            token,
            msg:"User Authentication Successful",
            RegisterUser
        });

        // const mailInfo={
           
        //     from: '"<rohanpwinnernotes@gmail.com>', // sender address
        //     to: RegisterUser.email, // list of receivers
        //     subject: "=Login Info", // Subject line
        //     text: "You have successfully logged in.", // plain text body
        //     html: "<b>You have successfully logged in.</b>", // html body
        // }

        let mail_msg="You have Successfully logged in."
        let mail_sub="Succesful Login."
       await sendmail(RegisterUser.email,RegisterUser.name,mail_msg,mail_sub);
    }

    else{

        res.status(400).json({

            Success:false,
            msg:"Please check login credentials."
        })
    }
}

export const ShowData= async(req,res)=>{

    // console.log(req.cookies.jwttoken);

   
        res.status(200).json({

            success:true,
            msg:"This is data"
        })
    
   
}