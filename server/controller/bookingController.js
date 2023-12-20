import mongoose from "mongoose";
import { json } from "express";
import BookingData from "../models/booktableSchema.js"


export const booktable=async(req,res)=>{

    const{name,email,mobno,bookingdate}=req.body;

    if(!(name && email && mobno && bookingdate))
    {
        return res.status(400).json({

            success:false,
            msg:"All fields are mandatory."
        })
    }

    const existingBooking= await BookingData.findOne({bookingdate});

    if(existingBooking)
    {
        return res.status(400).json({

            success:false,
            msg:"Selected table already booked for the selected date."
        })
    }

    const book_table=await BookingData.create({email,name,mobno,bookingDate:bookingdate});

    if(!book_table)
    {
        throw Error("Something went wrong. Table not booked.");
    }

    res.status(200).json({

        success:true,
        msg:"Table Successfully booked for the selected date",
        book_table
    })

}