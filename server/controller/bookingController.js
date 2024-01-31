import mongoose, { get } from "mongoose";
import { json } from "express";
import BookingData from "../models/booktableSchema.js";
import sendmail from "../Nodemailer/SendEmail.js";


export const booktable=async(req,res)=>{

    const{name,email,mobno,bookingdate,tableName}=req.body.bookingInfo;
    const{userId,userName}=req.body.userData;
    
    if(!(name && email && mobno && bookingdate))
    {
        return res.status(200).json({

            success:false,
            msg:"All fields are mandatory."
        })
    }

    const existingBooking= await BookingData.findOne({bookingDate:bookingdate,tableName});

    // console.log(tableName,bookingdate);
    // console.log(existingBooking);
    if(existingBooking)
    {
        return res.status(200).json({

            success:false,
            msg:"Selected table already booked for the selected date."
        })
    }

    console.log(userId,userName);
    const book_table=await BookingData.create({email,name,mobno,bookingDate:bookingdate,tableName,userId,userName});

    if(!book_table)
    {
        // throw Error("Something went wrong. Table not booked.");

       return res.status(400).json({

            success:false,
            msg:"Something went wrong. Table not booked.",
            book_table
        })
    }

    
    res.status(200).json({

        success:true,
        msg:"Table Successfully booked for the selected date",
        book_table
    })

    let mail_msg=`You have Successfully booked table ${book_table.tableName} for Date ${book_table.bookingDate}.`;
    let mail_sub="Succesful Booking.";
    await sendmail(book_table.email,book_table.name,mail_msg,mail_sub);
   

};

 export const bookedData=async(req,res)=>{

    const {filterDate}=req.body;

    if(!filterDate)
    {
        return res.status(400).json({

            msg:"Date should not be blank.",
            success:false,
        })
    }

    const getData= await BookingData.find({bookingDate:filterDate});

    return res.status(200).json({
        
        success:true,
        bookingInfo:getData
    })


   


 }