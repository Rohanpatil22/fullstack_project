import React, { useState } from 'react';
import bgImg from '../images/bg_img_2.jpg'
import axios from 'axios';
import {useForm} from 'react-hook-form';
import{toast,Toaster} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

function Login() {

    const [loginData,setloginData]=useState({email:"",password:""});
    const{register,handleSubmit,formState:{errors}}=useForm();

    const navigate=useNavigate();
    const onErrors= (data)=>{console.log(data)};

    const loginUser=async()=>{

       await axios.post("/login",loginData)
       .then((res)=>{

          console.log(res);

          if(res.data.Success)
            {
                 toast.success(res.data.msg);
                setloginData({email:"",password:""});

                setTimeout(()=>{

                    navigate("/booktable");
                },1000);
                
            }
            else{

                toast.error(res.data.msg);
            }
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
         padding: '20px',
         color: '#713200',
         fontSize:"22px",
      
     },
  }}/></div>
    <div className="m-auto pt-40" style={{backgroundImage:`url(${bgImg})`,width:"100%",height:"1400px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
    <div className='w-2/5 m-auto bg-stone-400 p-20 rounded-3xl' >
        <form onSubmit={handleSubmit(loginUser,onErrors)}>
           <table className='text-2xl m-auto'>
            <tbody>
                  
                <tr>
                    <td className='p-3'><label htmlFor='email_inp' className='font-medium'>Email Id</label></td> 
                    <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="email_inp" name="email_inp" value={loginData.email} autoFocus  {...register('email_inp',{required:"Email is required."})} onChange={(e)=>{setloginData((prev)=>{return{...prev,email:e.target.value}})}} /><br/><small className='text-red-700'>{errors?.email_inp && errors.email_inp.message}</small></td>
                </tr>

                <tr >
                    <td className='p-3'><label htmlFor='pass_inp' className='font-medium'>Password</label></td>
                    <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="pass_inp" name="pass_inp" value={loginData.password} {...register('pass_inp',{required:"Password is required."})} onChange={(e)=>{setloginData((prev)=>{return{...prev,password:e.target.value}})}}  /><br/><small className='text-red-700'>{errors?.pass_inp && errors.pass_inp.message}</small></td>
                </tr>

                <tr>
                    <td className='p-3 text-center pt-10' colSpan={2}><button className='p-3 w-40 bg-blue-900 rounded-xl text-white font-medium hover:scale-110 cursot-pointer mr-2' type="reset">Reset</button><button className='p-3 ml-3 w-40 bg-teal-800 text-white font-medium rounded-xl hover:scale-110 cursot-pointer' >Submit</button></td>
                    
                </tr>
            </tbody>
           </table>
           </form>
          

           
                
           


    </div>
</div>
</>
  )
}

export default Login