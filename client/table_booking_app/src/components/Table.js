
import axios from 'axios';
import {useState} from "react";
import toast, { Toast,Toaster } from 'react-hot-toast';
import BookingData from './BookingData.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Table() {
    
    const [userAUth,setUserAuth]=useState(false);
    const [clickCheck,setClickCheck]=useState(false);

    const [showtable,setShowtable]=useState(false);
    const [filterDate,setfilterdate]=useState('');
    
    

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
    
    const setCheck=()=>{

        setClickCheck(!clickCheck);
    }

    const getbookedData=async()=>{

            console.log(filterDate);
        // if(elem.current.value!="")
        // {
        //     alert("ok");
        // }
        // axios request

        setShowtable(!showtable);
    }

    let tableName=["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10"];
    if(userAUth)
    {
        return (
            <>
            <div className="h-[1000px]">
            <div className='mt-8 mb-8 text-center w-full flex justify-center items-center'>
               <div>
                    <label for="sel_date" className='text-2xl font-bold mr-10'>Select Date :</label>
                    <DatePicker className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white text-3xl" minDate={new Date(Date.now())} onChange={(date)=>{setfilterdate(date)}} selected={filterDate} dateFormat="dd-MM-yyyy"  />
               </div>
                <div>
                    <button className='bg-sky-800 p-4 text-white rounded-lg w-48 hover:scale-110 cursor-pointer ml-8 font-bold' onClick={getbookedData}>Check Availabilty</button>
                </div>
                
            </div>
            
            {showtable && <div className='grid grid-cols-5 gap-20 m-20 '  style={clickCheck ? {height:"800px",opacity:"0.3"} :{height:"800px"}}>
                 {
                     tableName.map((item,index)=>(
                         <div key={index} className='w-60 h-40 border-2 border-black font-bold text-3xl p-4 hover:bg-zinc-500 rounded-xl' onClick={setCheck}>{item}</div>
                     ))
                 }
                  </div>
            }

            </div>
                    
                 
                 
                 
           

            <div style={PopupStyle}>
                 <BookingData setFun={setCheck}/>
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