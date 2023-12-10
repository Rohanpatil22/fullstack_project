
import axios from 'axios';
import {useState,useEffect} from "react";
import toast, { Toast,Toaster } from 'react-hot-toast';
import BookingData from './BookingData.js';


function Table() {
    
    const [userAUth,setUserAuth]=useState(false);
    const [clickCheck,setClickCheck]=useState(true);
    
    const PopupStyle={

        display: clickCheck ? "block" : "none",
        position: "absolute",
        top:"30%",
        left:"40%",
        zIndex:"10"

    }
    const config={
        headers:{"Content-Type" : "application/json"},
        withCredentials:true
    }
    
   const getUserAuth=(async()=>{

        await axios.get("/getData",config)
         .then((res)=>{

            console.log(res);
            setUserAuth(res.data.success);

            if(!userAUth)
            {
                toast.error("Please login to book the table.");
            }
        });
        
    })();
     

    let tableName=["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10"];
    if(userAUth)
    {
        return (
            <>

            <div className='grid grid-cols-5 gap-20 m-20 '  style={clickCheck ? {height:"800px",opacity:"0.3"} :{height:"800px"}}>
                 {
                     tableName.map((item,index)=>(
                         <div key={index} className='w-60 h-40 border-2 border-black font-bold text-3xl p-4 hover:bg-zinc-500 rounded-xl'>{item}</div>
                     ))
                 }

                    
                 
                 
                 
            </div>

            <div style={PopupStyle}>
                 <BookingData/>
             </div>
            
          
            
            </>
           )
    }
    else{
        return(
            <>
                <Toaster toastOptions={{
                    className: '',
                    style: {
                    border: '1px solid #713200',
                    padding: '24px',
                    color: '#713200',
                    fontSize:"24px"
                    },
                }}/>
                <div style={{fontWeight:"bold",fontSize:"30px"}}>Please login</div>
            </>
        )
    }
 
}

export default Table