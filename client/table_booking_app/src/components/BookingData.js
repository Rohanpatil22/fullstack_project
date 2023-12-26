import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import{toast,Toaster} from 'react-hot-toast';
import {Datepicker} from 'flowbite-react'

function BookingData(props) {

    const{register,handleSubmit,formState:{errors}}=useForm();
    const[selDate,setSelDate]=useState();

    const[bookingInfo,setBookingInfo]=useState({email:"",name:"",mobno:"",bookingdate:"",tableName:props.table});

    const onErros= data=>{console.log(data)};

    const bookTable=async()=>{

       
        console.log(bookingInfo);

         await axios.post("/booktable",bookingInfo)
         .then((data)=>{

            console.log(data);

            if(data.data.success)
            {
                toast.success("Table Booked successfully.");
            }
            else{

                toast.error(data.data.msg);
            }
         })
    }

    const format_date=(val)=>{

        let day=val.getDate();
        let month=val.getMonth()+1;
        let year=val.getFullYear();

        let formated_date=day+"/"+month+"/"+year;

        setBookingInfo((prev)=>{return{...prev,bookingdate:formated_date,tableName:props.table}})
    }

  return (
    <>

<div>
        <Toaster  
         toastOptions={{
         className: '',
         style: {
         border: '1px solid #713200',
         padding: '20px',
         color: '#713200',
         fontSize:"22px",
      
     },
  }}/></div>

    <div class="w-[500px] p-4 bg-slate-800 text-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
    <form class="space-y-6" action="#" onSubmit={handleSubmit(bookTable,onErros)}>
        <div class="text-right"><button class="bg-red-500 p-3 rounded-lg text-white w-[40px] font-bold text-xl" onClick={props.setFun}>X</button></div>
        <h5 class="text-2xl font-medium text-gray-900 text-white">Book {props.table} Table </h5>
        <div>
            <label for="user_name" class="block mb-2 text-xl font-medium text-gray-900 text-white">Your Name</label>
            <input type="text" name="user_name" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="John Doe" {...register("user_name",{required:"Name is required."})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,name:e.target.value}})}} value={bookingInfo.name} /><small className='text-red-400 text-lg'>{errors?.user_name && errors.user_name.message}</small>
        </div>
         <div>
            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" {...register("email",{required:"email is required."})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,email:e.target.value}})}} /><small className='text-red-400 text-lg'>{errors?.email && errors.email.message}</small>
        </div>

        <div>
            <label for="mobno" class="block mb-2 text-xl font-medium text-gray-900 text-white">Your Mobile No</label>
            <input type="text" name="mobno" id="mobno" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="0123456789" maxLength={10} {...register("mobno",{required:"mobile no is required"})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,mobno:e.target.value}})}} /><small className='text-red-400 text-lg'>{errors?.mobno && errors.mobno.message}</small>
        </div>

       <div>
         <label for="bookdate" class="block mb-2 text-xl font-medium text-gray-900 text-white">Booking Date</label>
           <Datepicker id="bookdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white pl-8" value={bookingInfo.bookingdate} placeholder='Select Date' onSelectedDateChanged={(date)=>{format_date(date)}} minDate={new Date()}/>
        </div>

        <div className='w-full m-auto text-center'> <button class="w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 m-auto" >Book your Table</button></div>
       
       
    </form>
</div>
    
    
    </>
  )
}

export default BookingData;


