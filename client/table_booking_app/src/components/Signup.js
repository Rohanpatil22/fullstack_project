import React, { useState } from 'react'
import bgImg from '../images/bg_img_2.jpg';
import axios from "axios";
import  { toast,Toaster } from "react-hot-toast"

function Signup() {

    const [userData,setUserdata]=useState({name:"",email:"",mobno:"",password:""})
    const getformData=async (event)=>{

        event.preventDefault();
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
            <form>
               <table className='text-2xl m-auto'>
                <tbody>
                    <tr >
                        <td className='p-3'><label htmlFor='name_inp' className='font-medium'>Name</label></td>
                        <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="name_inp" autoFocus onChange={(e)=>{setUserdata((prev)=>{return {...prev,name:e.target.value}})}} /></td>
                    </tr>
                         
                    <tr>
                        <td className='p-3'><label htmlFor='email_inp' className='font-medium'>Email Id</label></td> 
                        <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="email_inp" onChange={(e)=>{setUserdata((prev)=>{return {...prev,email:e.target.value}})}} /></td>
                    </tr>

                    <tr>
                        <td className='p-3'><label htmlFor='mob_inp' className='font-medium'>Mobile No</label></td>
                        <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="mob_inp" maxLength={10} onChange={(e)=>{setUserdata((prev)=>{return {...prev,mobno:e.target.value}})}} /></td>
                    </tr>

                    <tr>
                        <td className='p-3'><label htmlFor='password_inp' className='font-medium'>Password</label></td>
                        <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="password" id="password_inp" onChange={(e)=>{setUserdata((prev)=>{return {...prev,password:e.target.value}})}} /></td>
                    </tr>

                    <tr>
                        <td className='p-3 text-center pt-10' colSpan={2}><button className='p-3 w-40 bg-blue-900 rounded-xl text-white font-medium hover:scale-110 cursot-pointer mr-2' type="reset">Reset</button><button className='p-3 ml-3 w-40 bg-teal-800 text-white font-medium rounded-xl hover:scale-110 cursot-pointer' onClick={getformData}>Submit</button></td>
                        
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