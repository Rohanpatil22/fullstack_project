
import axios from 'axios';
import {useState} from "react";
import toast, { Toast,Toaster } from 'react-hot-toast';
import BookingData from './BookingData.js';
import {Datepicker} from 'flowbite-react'


function Table() {
    
    const [userAUth,setUserAuth]=useState(false);
    const [clickCheck,setClickCheck]=useState(false);
    const [selTable,setSelTable]=useState("");
    const [showtable,setShowtable]=useState(false);
    const [filterDate,setfilterdate]=useState("");
    const [bookingData,setBookingDate]=useState("");
    const[bookedtblarr,setbookedtblarr]=useState([]);
    
    

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
        if(filterDate!="")
        {
            await axios.post("/getBookingData",{filterDate})
            .then((data)=>{

                console.log(data);
                setBookingDate(data.data.bookingInfo);
                setbookedtblarr([]);
                 let temp=data.data.bookingInfo;
               
                for(let x=0;x<temp.length;x++)
                {
                    
                    if(!(bookedtblarr.includes(temp[x].tableName)))
                    {
                       
                       setbookedtblarr((prev)=>{return [...prev,temp[x].tableName]});
                    }
                }
                
            })

        
            if(showtable==false)
            {
                setShowtable(true);
            }
            
        }
        else{

            toast.error("Please select date.");
        }
       
       

       
    }

    const formarseldate=(val)=>{

        let day=val.getDate();
        let month=val.getMonth()+1;
        let year=val.getFullYear();

        let formated_date=day+"/"+month+"/"+year;
        setfilterdate(formated_date);

    }
    let tableName=["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10"];
    if(userAUth)
    {
        return (
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
            <div className="h-[1000px]">
            <div className='mt-8 mb-8 text-center w-full flex justify-center items-center'>
                <div> <label for="bookdate" className='text-2xl font-bold mr-10'>Select Date :</label></div>
               <div>
                   
                    <Datepicker id="bookdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white pl-8" value={filterDate} placeholder='Select Date' onSelectedDateChanged={(date)=>{formarseldate(date)}} minDate={new Date()} />
               </div>
                <div>
                    <button className='bg-sky-800 p-4 text-white rounded-lg w-48 hover:scale-110 cursor-pointer ml-8 font-bold' onClick={getbookedData}>Check Availabilty</button>
                </div>
                
            </div>
            
            {showtable && <div className='grid grid-cols-5 gap-20 m-20 '  style={clickCheck ? {height:"800px",opacity:"0.3"} :{height:"800px"}}>
                 {
                     tableName.map((item,index)=>{

                       
                       // console.log(bookedtblarr);
                        if(bookedtblarr.includes(item))
                        {
                            return <div key={index} className='w-90 h-40 border-2 border-black font-bold text-3xl p-4 rounded-xl bg-green-500'>{item}</div>;
                        }
                        else{

                            
                            return <div key={index} className='w-60 h-40 border-2 border-black font-bold text-3xl p-4 hover:bg-zinc-500 rounded-xl' onClick={()=>{setCheck();setSelTable(item)}}>{item}</div>;
                        }
                         
    })
                    
                 
               }
                 
                  </div>
            }

            </div>
                    
                 
                 
                 
           

            <div style={PopupStyle}>
                 <BookingData setFun={setCheck} table={selTable}/>
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