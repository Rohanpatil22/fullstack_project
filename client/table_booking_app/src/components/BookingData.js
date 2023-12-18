import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import dayjs from "dayjs";

function BookingData(props) {

    const{register,handleSubmit,formState:{errors}}=useForm();
    const[selDate,setSelDate]=useState(new Date());

    const[bookingInfo,setBookingInfo]=useState({email:"",name:"",mobno:"",bookingdate:""});

    const onErros= data=>{console.log(data)};

    const bookTable=async()=>{

        console.log(bookingInfo,selDate);
        //    await axios.post("/booktable",bookingInfo)
        //    .then((data)=>{

        //    })
    }

    const getDate=(date_val)=>{

       
       let year=date_val.getFullYear();
       let month=date_val.getMonth()+1;
       let day=date_val.getDate();

    //    setSelDate(day+"-"+month+"-"+year);
       //setBookingInfo((prev)=>{return{...prev,bookingdate:day+"-"+month+"-"+year}})
       //setSelDate(new Date(bookingInfo.bookingdate));
        // setSelDate(dayjs(date_val).format("DD/MM/YYYY"));
        // console.log(selDate);

    }

  return (
    <>
        <div class="w-[500px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#" onSubmit={handleSubmit(bookTable,onErros)}>
        <div class="text-right"><button class="bg-red-500 p-3 rounded-lg text-white w-[40px] font-bold text-xl" onClick={props.setFun}>X</button></div>
        <h5 class="text-2xl font-medium text-gray-900 dark:text-white">Book Selected Table</h5>
        <div>
            <label for="user_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Name</label>
            <input type="text" name="user_name" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" {...register("user_name",{required:"Name is required."})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,name:e.target.value}})}} value={bookingInfo.name} /><small className='text-red-400 text-lg'>{errors?.user_name && errors.user_name.message}</small>
        </div>
         <div>
            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" {...register("email",{required:"email is required."})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,email:e.target.value}})}} /><small className='text-red-400 text-lg'>{errors?.email && errors.email.message}</small>
        </div>

        <div>
            <label for="mobno" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Mobile No</label>
            <input type="text" name="mobno" id="mobno" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0123456789" maxLength={10} {...register("mobno",{required:"mobile no is required"})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,mobno:e.target.value}})}} /><small className='text-red-400 text-lg'>{errors?.mobno && errors.mobno.message}</small>
        </div>

       <div>
            <label for="date" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Select Date</label>
            <DatePicker className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" minDate={new Date(Date.now())} icon="fa fa-calendar"  id="date" name="date" dateFormat="dd-MM-yyyy" onChange={(date)=>{getDate(date)}} selected={selDate}/><small className={selDate?'text-red-400 text-lg':'hidden'}>Date is required</small>
        </div>

        <div className='w-full m-auto text-center'> <button class="w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-auto" >Book your Table</button></div>
       
       
    </form>
</div>
    
    
    </>
  )
}

export default BookingData;


