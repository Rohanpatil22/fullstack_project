import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import{toast,Toaster} from 'react-hot-toast';
import {Datepicker} from 'flowbite-react'
import { useContext } from 'react';
import { UserContext,PopupContext } from './Context.js';

import {loadScript} from '../RazorpayLoader.js'

function BookingData(props) {

    const {userData}= useContext(UserContext);
    const {popup,setpopup}= useContext(PopupContext);
    const{register,handleSubmit,formState:{errors}}=useForm();
    const[selDate,setSelDate]=useState();

    const[bookingInfo,setBookingInfo]=useState({email:"",name:"",mobno:"",bookingdate:"",tableName:props.table});

    const onErros= data=>{console.log(data)};

    useEffect(()=>{
        setBookingInfo((prev)=>{return{...prev,bookingdate:props.bookDate,tableName:props.table}});
    },[props.bookDate,props.table]);


    const bookTable=async()=>{

        console.log(bookingInfo);
         await axios.post("/booktable",{bookingInfo,userData})
         .then((data)=>{

            console.log(data);

            if(data.data.success)
            {
                toast.success("Table Booked successfully.");

                setTimeout(()=>{
                    setpopup(!popup);
                },2000);
              


            }
            else{

                toast.error(data.data.msg);
            }
         })
    }
    const makePayment=async()=>{

        console.log(userData);
        // setBookingInfo((prev)=>{return{...prev,userId:userData.userId,userName:userData.userName}});

        // console.log(bookingInfo);
        //  await axios.post("/booktable",{bookingInfo,userData})
        //  .then((data)=>{

        //     console.log(data);

        //     if(data.data.success)
        //     {
        //         toast.success("Table Booked successfully.");

        //         setTimeout(()=>{
        //             setpopup(!popup);
        //         },2000);
              


        //     }
        //     else{

        //         toast.error(data.data.msg);
        //     }
        //  })

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        console.log(res);
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post("/payment");

        const { amount, order_id, currency } = result.data;

        const options = {
            key: "rzp_test_TBQ5PsVya0EtLH", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Restaurant",
            description: "Test Transaction",
            image: {  },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                bookTable();

                // const result = await axios.post("/payment", data);

                // alert(result.data.msg);
            },
            prefill: {
                name: "Rohan Patil",
                email: "rohanpatil1797@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Restaurant Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        
      
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
    
    <div class="md:w-[500px] sm:w-full  md:p-4 bg-slate-800 text-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
    <form class="space-y-6" action="#" onSubmit={handleSubmit(makePayment,onErros)}>
        <div class="text-right"><label class="bg-red-500 md:p-3 sm:p-1 rounded-lg text-white md:w-[40px] sm:w-[30px] font-bold md:text-xl sm:text-lg" onClick={props.setFun}>X</label></div>
        <h5 class="md:text-2xl sm:text-lg font-medium text-gray-900 text-white">Book {props.table} Table </h5>
        <div>
            <label for="user_name" class="block mb-2 md:text-xl sm:text-sm font-medium text-gray-900 text-white">Your Name</label>
            <input type="text" name="user_name" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[420px] sm:w-[300px] md:p-2.5 sm:p-1 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="John Doe" {...register("user_name",{required:"Name is required."})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,name:e.target.value}})}} value={bookingInfo.name} /><small className='text-red-400 text-lg'>{errors?.user_name && errors.user_name.message}</small>
        </div>
         <div>
            <label for="email" class="block mb-2 md:text-xl sm:text-sm font-medium text-gray-900 text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[420px] sm:w-[300px] md:p-2.5 sm:p-1 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" {...register("email",{required:"email is required."})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,email:e.target.value}})}} /><small className='text-red-400 text-lg'>{errors?.email && errors.email.message}</small>
        </div>

        <div>
            <label for="mobno" class="block mb-2 md:text-xl sm:text-sm  font-medium text-gray-900 text-white">Your Mobile No</label>
            <input type="text" name="mobno" id="mobno" class="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[420px] sm:w-[300px] md:p-2.5 sm:p-1 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="0123456789" maxLength={10} {...register("mobno",{required:"mobile no is required"})} onChange={(e)=>{setBookingInfo((prev)=> {return{...prev,mobno:e.target.value}})}} /><small className='text-red-400 text-lg'>{errors?.mobno && errors.mobno.message}</small>
        </div>

       <div>
         <label  class="block mb-2 md:text-xl sm:text-sm font-medium text-gray-900 text-white">Booking Date</label>
           {/* <Datepicker id="bookdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white pl-8" value={bookingInfo.bookingdate} placeholder='Select Date' onSelectedDateChanged={(date)=>{format_date(date)}} minDate={new Date()}/> */}
           <input type='text' class="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[420px] sm:w-[300px] md:p-2.5 sm:p-1 bg-gray-600 border-gray-500 placeholder-gray-400 text-white pl-8" value={props.bookDate} readOnly/>
        </div>

        <div className='w-full m-auto text-center'> <button type='submit' class="md:w-[300px] sm:w-[230px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg md:px-5 sm:px-3 md:py-2.5 sm:py-1.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 m-auto" >Book your Table</button></div>
       
       
    </form>
</div>
    
    
    </>
  )
}

export default BookingData;


