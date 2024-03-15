import React, { useState } from 'react'
import bgImg from '../images/bg_img_2.jpg';
import axios from "axios";
import  { toast,Toaster } from "react-hot-toast";
import {useForm} from 'react-hook-form'

function Signup() {

    const{register,handleSubmit,formState:{errors}}=useForm();
    const [userData,setUserdata]=useState({name:"",email:"",mobno:"",password:""});

    const onErros= data=>{console.log(data)};
    // const onSubmit= data =>{console.log(data)};
    // const config={
    //     withCredentials:true,
    //     headers:{ 'Access-Control-Allow-Origin': '*',"Content-Type" : "application/json"},
       
    // }

    const getformData=async (event)=>{

        // event.preventDefault();
        console.log(userData);

        try{
        
            let res=await axios.post("/createUser",userData)
             //  .then((res)=>{

            if(res.data.newUser)
            {
                toast.success(res.data.msg);
            }
            else{

                toast.error(res.data.msg);
            }

        setUserdata({name:"",email:"",mobno:"",password:""});
           
      //  })
       // .catch(err=>{
        }
       catch(err){

        toast.error(err.response.data.msg);
       }
            
       // })

    }
  return (
    <>
    <div>
        <Toaster  
         toastOptions={{
         className: '',
         style: {
         border: '1px solid #713200',
         padding: '24px',
         color: '#713200',
         fontSize:"24px"
     },
  }}/></div>
    <div className="mx-auto md:pt-40 sm:pt-10 w-full md:h-[1400px] sm:h-[570px]" style={{backgroundImage:`url(${bgImg})`,width:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div className='md:w-2/5 sm:w-[90%] mx-auto bg-stone-400 md:p-20 sm:p-4 rounded-3xl' >
            <form onSubmit={handleSubmit(getformData,onErros)}>
               <table className='text-2xl m-auto'>
                <tbody>
                    <tr >
                        <td className='md:p-3 sm:p-1'><label htmlFor='name_inp' className='font-medium md:text-2xl sm:text-lg'>Name</label></td>
                        <td className='md:p-3 sm:p-1'><input className='rounded-xl md:p-1 sm:p-0 md:w-[400px] sm:w-[200px] text-black' type="text" id="name_inp" name="name_inp" {...register('name_inp',{required:"Name is required"})} autoFocus onChange={(e)=>{setUserdata((prev)=>{return {...prev,name:e.target.value}})}} value={userData.name}/><br/><small className='text-red-700'>{errors?.name_inp && errors.name_inp.message}</small></td>
                    </tr>
                         
                    <tr>
                        <td className='md:p-3 sm:p-1'><label htmlFor='email_inp' className='font-medium md:text-2xl sm:text-lg'>Email Id</label></td> 
                        <td className='md:p-3 sm:p-1'><input className='rounded-xl md:p-1 sm:p-0 md:w-[400px] sm:w-[200px] text-black' type="text" id="email_inp" name="email_inp" {...register('email_inp',{required:"Email is required"})} onChange={(e)=>{setUserdata((prev)=>{return {...prev,email:e.target.value}})}} value={userData.email} /><br/><small className='text-red-700'>{errors?.email_inp && errors.email_inp.message}</small></td>
                    </tr>

                    <tr>
                        <td className='md:p-3 sm:p-1'><label htmlFor='mob_inp' className='font-medium md:text-2xl sm:text-lg'>Mobile No</label></td>
                        <td className='md:p-3 sm:p-1'><input className='rounded-xl md:p-1 sm:p-0 md:w-[400px] sm:w-[200px] text-black' type="text" id="mob_inp" name="mob_inp" {...register('mob_inp',{required:"Moble number is required."})}maxLength={10} onChange={(e)=>{setUserdata((prev)=>{return {...prev,mobno:e.target.value}})}} value={userData.mobno} /><br/><small className='text-red-700'>{errors?.mob_inp && errors.mob_inp.message}</small></td>
                    </tr>

                    <tr>
                        <td className='md:p-3 sm:p-1'><label htmlFor='password_inp' className='font-medium md:text-2xl sm:text-lg'>Password</label></td>

                        <td className='md:p-3 sm:p-1'><input className='rounded-xl md:p-1 sm:p-0 md:w-[400px] sm:w-[200px] text-black' type="password" id="password_inp" name="password_inp" {...register('password_inp',{required:"Password is required.",validate:{minLength: (v)=>v.length>=7 && v.length<=10}})} onChange={(e)=>{setUserdata((prev)=>{return {...prev,password:e.target.value}})}} value={userData.password} /><br/><small className='text-red-700'>{errors?.password_inp && errors.password_inp.message}</small></td>
                    </tr>

                    <tr>
                        <td className='p-3 text-center md:pt-10 sm:pt-4' colSpan={2}><button className='md:p-3 sm:p-1 md:w-40 sm:w-28 bg-blue-900 md:rounded-xl sm:rounded-lg text-white font-medium hover:scale-110 cursot-pointer mr-2 md:text-2xl sm:text-lg' type="reset">Reset</button><button className='md:p-3 sm:p-1 md:w-40 sm:w-28 ml-3 bg-teal-800 text-white font-medium md:rounded-xl sm:rounded-lg hover:scale-110 cursot-pointer  md:text-2xl sm:text-lg'>Submit</button></td>
                        
                    </tr>
                </tbody>
               </table>
                    
              

               
                    
               

            </form>
        </div>
    </div>
    
    </>
  )
}

export default Signup