
import axios from 'axios';
import {useContext, useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import BookingData from './BookingData.js';
import {Datepicker} from 'flowbite-react'
import { PopupContext } from './Context.js';


function Table() {
    
   const {popup,setpopup}=useContext(PopupContext);
    const [userAUth,setUserAuth]=useState(false);
    const [clickCheck,setClickCheck]=useState(false);
    const [selTable,setSelTable]=useState("");
    const [showtable,setShowtable]=useState(false);
    const [filterDate,setfilterdate]=useState("");
    const [bookingData,setBookingDate]=useState("");
    const[bookedtblarr,setbookedtblarr]=useState([]);
    
    

    // const PopupStyle={

    //     display: popup ? "block" : "none",
    //     position: "absolute",
    //     top:"30%",
    //     left:"40%",
    //     zIndex:"10"

    // }
    // const config={

    //     withCredentials:true,
    //     credentials: 'include',

    // }
    
   const getUserAuth=(async()=>{

    try{
       
       let res= await axios.post("/getdata")
        
         //.then((res)=>{

            console.log(res);
            setUserAuth(res.data.success);

            if(!userAUth)
            {
                toast.error("Please login to book the table.");
            }
      //  });
        }
        catch(err)
        {
            console.log(err);

        }
        
    })();
    
    const setCheck=()=>{

        // setClickCheck(!clickCheck);
        setpopup(!popup);
       
    }

   useEffect(()=>{

    if(popup==false && filterDate!=="" )
    {
        getbookedData();
    }
  
   },[popup])

    const getbookedData=async()=>{

        console.log(filterDate);
        if(filterDate!=="")
        {
            let bookedTableArr=[];

        try{
           let data= await axios.post("/getBookingData",{filterDate})
           // .then((data)=>{

                console.log(data);
                setBookingDate(data.data.bookingInfo);
                setbookedtblarr([]);
                 let temp=data.data.bookingInfo;
               
                for(let x=0;x<temp.length;x++)
                {
                    
                    if(!(bookedTableArr.includes(temp[x].tableName)))
                    {
                        bookedTableArr.push(temp[x].tableName);
                    //    setbookedtblarr((prev)=>{return [...prev,temp[x].tableName]});
                    }

                    setbookedtblarr(bookedTableArr);
                }

                if(showtable==false)
                {
                    setShowtable(true);
                }
                
          //  })
            }

            catch (err){

                console.log(err);
            }

        
            // if(showtable==false)
            // {
            //     setShowtable(true);
            // }
            
        }
        else{

            
            if(userAUth)
            {
                toast("Please select date.");
            }
           
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
            <div>
              <Toaster toastOptions={{
                    className: '',
                    style: {
                    border: '1px solid #713200',
                    padding: '24px',
                    color: '#713200',
                    fontSize:"24px"
                    },
                }}/>
                </div>
            <div className="md:h-[1000px] sm:h-[850px]">
            <div className='mt-8 mb-8 p-2 text-center w-full flex md:justify-center sm:justify-around items-center'>
                <div className='sm:hidden md:inline-block'> <label for="bookdate" className='md:text-2xl sm:text-lg font-bold md:mr-10 '>Select Date :</label></div>
               <div>
                   
                    <Datepicker id="bookdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[420px] sm:w-[190px] md:p-2.5 sm:p-1 sm:pl-8 bg-gray-600 border-gray-500 placeholder-gray-400 text-white md:pl-8 sm:text-sm md:text-lg" value={filterDate} placeholder='Select Date' onSelectedDateChanged={(date)=>{formarseldate(date)}} minDate={new Date()} />
               </div>
                <div>
                    <button className='bg-sky-800 md:p-4 sm:p-2 text-white rounded-lg md:w-48  sm:w-38 hover:scale-110 cursor-pointer md:ml-8 sm:ml-2 font-bold sm:text-xs md:text-lg' onClick={getbookedData}>Check Availabilty</button>
                </div>
                
            </div>
            {/* <div className='md:hidden text-center'><button className='bg-sky-800 p-2 text-white rounded-lg  sm:w-40 hover:scale-110 cursor-pointer sm:ml-2 font-bold' onClick={getbookedData}>Check Availabilty</button></div> */}
            
            {showtable && <div className='grid sm:justify-items-center md:grid-cols-5 sm:grid-cols-2 md:gap-20 sm:gap-x-2 sm:gap-y-1 md:m-20 '  style={popup ? {height:"800px",opacity:"0.3"} :{height:"800px"}}>
                 {
                     tableName.map((item,index)=>{

                       
                       // console.log(bookedtblarr);
                        if(bookedtblarr.includes(item))
                        {
                            return <div key={index} className='md:w-60 md:h-40 sm:w-32 sm:h-20 border-2 border-black font-bold md:text-3xl sm:text-xl md:p-4 rounded-xl bg-green-500'>{item}</div>;
                        }
                        else{

                            
                            return <div key={index} className='md:w-60 md:h-40 sm:w-32 sm:h-20 border-2 border-black font-bold md:text-3xl sm:text-xl md:p-4 hover:bg-zinc-500 rounded-xl' onClick={()=>{setCheck();setSelTable(item)}}>{item}</div>;
                        }
                         
    })
                    
                 
               }
                 
                  </div>
            }

            </div>
                    
                 
                 
                 
           
            
            <div className={popup ? 'absolute block z-10 top-[30%] md:left-[40%] sm:left-[4%]':'absolute hidden z-10 top-[30%] md:left-[40%] sm:left-[10%]'}>
                 <BookingData setFun={setCheck} table={selTable} bookDate={filterDate}/>
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
                <div style={{fontWeight:"bold"}} className='md:text-4xl sm:text-lg'>Please login</div>
            </>
        )
    }
 
}

export default Table