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
    const getformData=async (event)=>{

        // event.preventDefault();
        console.log(userData);

        await axios.post("/createUser",userData)
        .then((res)=>{

            if(res.data.newUser)
            {
                toast.success(res.data.msg);
            }
            else{

                toast.error(res.data.msg);
            }

        setUserdata({name:"",email:"",mobno:"",password:""});
           
        })

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
    <div className="m-auto pt-40" style={{backgroundImage:`url(${bgImg})`,width:"100%",height:"1400px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div className='w-2/5 m-auto bg-stone-400 p-20 rounded-3xl' >
            <form onSubmit={handleSubmit(getformData,onErros)}>
               <table className='text-2xl m-auto'>
                <tbody>
                    <tr >
                        <td className='p-3'><label htmlFor='name_inp' className='font-medium'>Name</label></td>
                        <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="name_inp" name="name_inp" {...register('name_inp',{required:"Name is required"})} autoFocus onChange={(e)=>{setUserdata((prev)=>{return {...prev,name:e.target.value}})}} value={userData.name}/><br/><small className='text-red-700'>{errors?.name_inp && errors.name_inp.message}</small></td>
                    </tr>
                         
                    <tr>
                        <td className='p-3'><label htmlFor='email_inp' className='font-medium'>Email Id</label></td> 
                        <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="email_inp" name="email_inp" {...register('email_inp',{required:"Email is required"})} onChange={(e)=>{setUserdata((prev)=>{return {...prev,email:e.target.value}})}} value={userData.email} /><br/><small className='text-red-700'>{errors?.email_inp && errors.email_inp.message}</small></td>
                    </tr>

                    <tr>
                        <td className='p-3'><label htmlFor='mob_inp' className='font-medium'>Mobile No</label></td>
                        <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="mob_inp" name="mob_inp" {...register('mob_inp',{required:"Moble number is required."})}maxLength={10} onChange={(e)=>{setUserdata((prev)=>{return {...prev,mobno:e.target.value}})}} value={userData.mobno} /><br/><small className='text-red-700'>{errors?.mob_inp && errors.mob_inp.message}</small></td>
                    </tr>

                    <tr>
                        <td className='p-3'><label htmlFor='password_inp' className='font-medium'>Password</label></td>
                        <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="password" id="password_inp" name="password_inp" {...register('password_inp',{required:"Password is required.",validate:{minLength: (v)=>v.length>=7 && v.length<=10,matchPattern:(v)=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(v)}})} onChange={(e)=>{setUserdata((prev)=>{return {...prev,password:e.target.value}})}} value={userData.password} /><br/><small className='text-red-700'>{errors?.password_inp && errors.password_inp.message}</small></td>
                    </tr>

                    <tr>
                        {/* <td className='p-3 text-center pt-10' colSpan={2}><button className='p-3 w-40 bg-blue-900 rounded-xl text-white font-medium hover:scale-110 cursot-pointer mr-2' type="reset">Reset</button><button className='p-3 ml-3 w-40 bg-teal-800 text-white font-medium rounded-xl hover:scale-110 cursot-pointer' onClick={getformData}>Submit</button></td> */}

                        <td className='p-3 text-center pt-10' colSpan={2}><button className='p-3 w-40 bg-blue-900 rounded-xl text-white font-medium hover:scale-110 cursot-pointer mr-2' type="reset">Reset</button><button className='p-3 ml-3 w-40 bg-teal-800 text-white font-medium rounded-xl hover:scale-110 cursot-pointer'>Submit</button></td>
                        
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