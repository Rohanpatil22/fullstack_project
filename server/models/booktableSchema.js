import mongoose from "mongoose";
import { Schema } from "mongoose";

const tableBookingSchema= new mongoose.Schema({

    name:{
        type:String
    },

    email:{
        type:String
    },

    mobno:{

        type:String
    },

    bookingDate:{

        type:String
    },

    tableName:{

        type:String
    },
    userId:{
        type:String
    },
    userName:{
        type:String
    }
},{timestamps:true});

export default mongoose.model("BookingData",tableBookingSchema);

