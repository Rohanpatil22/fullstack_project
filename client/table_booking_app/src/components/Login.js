import React, { useState } from 'react';
import bgImg from '../images/bg_img_2.jpg'
import axios from 'axios';
import {useForm} from 'react-hook-form';
import{toast,Toaster} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Context';

function Login() {

    const {setUserData}=useContext(UserContext);
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

                setUserData({userName:res.data.RegisterUser.email,userId:res.data.RegisterUser.name})
                setloginData({email:"",password:""});

                setTimeout(()=>{

                    navigate("/booktable");
                },1000);
                
            }
            else{

                toast.error(res.data.msg);
            }
       })
       .catch(err=>{
        toast.error(err.response.data.msg);
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
    <div className="mx-auto md:pt-40 sm:pt-10 w-full md:h-[1400px] sm:h-[570px]" style={{backgroundImage:`url(${bgImg})`,width:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
    <div className='md:w-2/5 sm:w-[90%] mx-auto bg-stone-400 md:p-20 sm:p-4 rounded-3xl' >
        <form onSubmit={handleSubmit(loginUser,onErrors)}>
           <table className='text-2xl m-auto'>
            <tbody>
                  
                <tr>
                    <td className='md:p-3 sm:p-1'><label htmlFor='email_inp' className='font-medium md:text-2xl sm:text-lg'>Email Id</label></td> 
                    <td className='md:p-3 sm:p-1'><input className='rounded-xl p-1 md:p-1 sm:p-0 md:w-[400px] sm:w-[200px] text-black' type="text" id="email_inp" name="email_inp" value={loginData.email} autoFocus  {...register('email_inp',{required:"Email is required."})} onChange={(e)=>{setloginData((prev)=>{return{...prev,email:e.target.value}})}} /><br/><small className='text-red-700'>{errors?.email_inp && errors.email_inp.message}</small></td>
                </tr>

                <tr >
                    <td className='md:p-3 sm:p-1'><label htmlFor='pass_inp' className='font-medium md:text-2xl sm:text-lg'>Password</label></td>
                    <td className='md:p-3 sm:p-1'><input className='rounded-xl p-1 md:p-1 sm:p-0 md:w-[400px] sm:w-[200px] text-black' type="password" id="pass_inp" name="pass_inp" value={loginData.password} {...register('pass_inp',{required:"Password is required."})} onChange={(e)=>{setloginData((prev)=>{return{...prev,password:e.target.value}})}}  /><br/><small className='text-red-700'>{errors?.pass_inp && errors.pass_inp.message}</small></td>
                </tr>

                <tr>
                    <td className='md:p-3 sm:pt-4 md:pt-10 text-center' colSpan={2}><button className='md:p-3 sm:p-1 md:w-40 sm:w-28 bg-blue-900 md:rounded-xl sm:rounded-lg text-white font-medium hover:scale-110 cursot-pointer mr-2 md:text-2xl sm:text-lg' type="reset">Reset</button><button className='md:p-3 sm:p-1 md:w-40 sm:w-28 ml-3 bg-teal-800 text-white font-medium md:rounded-xl sm:rounded-lg hover:scale-110 cursot-pointer  md:text-2xl sm:text-lg' >Submit</button></td>
                    
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