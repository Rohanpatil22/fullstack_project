
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import BookingData from './BookingData.js';
import { Datepicker } from 'flowbite-react'
import { PopupContext } from './Context.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Table() {

    const { popup, setpopup } = useContext(PopupContext);
    const [userAUth, setUserAuth] = useState(false);
    const [clickCheck, setClickCheck] = useState(false);
    const [selTable, setSelTable] = useState("");
    const [showtable, setShowtable] = useState(false);
    const [filterDate, setfilterdate] = useState("");
    const [bookingData, setBookingDate] = useState("");
    const [bookedtblarr, setbookedtblarr] = useState([]);

    const [loader, setLoader] = useState(true);


    const getUserAuth = (async () => {


        try {

            let res = await axios.post("/getdata")

            console.log(res);
            setUserAuth(res.data.success);

            if (!userAUth) {
                console.log("alert render");
                toast.error("Please login to book the table.");
            }

            setLoader(false);
           
        }
        catch (err) {
            console.log(err);

            setLoader(false)

        }

    })();

    const setCheck = () => {

       
        setpopup(!popup);

    }

    useEffect(() => {

        if (popup == false && filterDate !== "") {
            getbookedData();
        }

    }, [popup])

    const getbookedData = async () => {

        console.log(filterDate);

        if (filterDate !== "") {
            let bookedTableArr = [];
            setLoader(true);

            try {
                let data = await axios.post("/getBookingData", { filterDate })
               
                console.log(data);
                setBookingDate(data.data.bookingInfo);
                setbookedtblarr([]);
                let temp = data.data.bookingInfo;

                for (let x = 0; x < temp.length; x++) {

                    if (!(bookedTableArr.includes(temp[x].tableName))) {
                        bookedTableArr.push(temp[x].tableName);
                       
                    }

                    setbookedtblarr(bookedTableArr);
                }

                if (showtable == false) {
                    setShowtable(true);
                }

                setLoader(false);
              
            }

            catch (err) {

                console.log(err);

                setLoader(false);
            }

        }
        else {


            if (userAUth) {
                toast.warning("Please Select Date.");
            }

        }




    }

    const formarseldate = (val) => {

        let day = val.getDate();
        let month = val.getMonth() + 1;
        let year = val.getFullYear();

        let formated_date = day + "/" + month + "/" + year;
        setfilterdate(formated_date);

    }
    let tableName = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10"];
    if (userAUth) {
        return (
            <>
                <div>
                
                </div>
                <div className="md:h-[1000px] sm:h-[850px]">
                    <div className='mt-8 mb-8 p-2 text-center w-full flex md:justify-center sm:justify-around items-center'>
                        <div className='sm:hidden md:inline-block'> <label for="bookdate" className='md:text-xl sm:text-lg font-bold md:mr-10 '>Select Date :</label></div>
                        <div>

                            <Datepicker id="bookdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[380px] sm:w-[190px] md:p-2 sm:p-1 sm:pl-8 bg-gray-600 border-gray-500 placeholder-gray-400 text-white md:pl-8 sm:text-sm md:text-[17px]" value={filterDate} placeholder='Select Date' onSelectedDateChanged={(date) => { formarseldate(date) }} minDate={new Date()} />
                        </div>
                        <div>
                            <button className='bg-sky-800 md:p-3 sm:p-2 text-white rounded-lg md:w-40  sm:w-38 hover:scale-110 cursor-pointer md:ml-8 sm:ml-2 font-bold sm:text-xs md:text-sm' onClick={getbookedData}>Check Availabilty</button>
                        </div>

                    </div>
                   

                    {showtable && <div className='grid sm:justify-items-center md:grid-cols-5 sm:grid-cols-2 md:gap-2 sm:gap-x-2 sm:gap-y-1 md:m-20 ' style={popup ? { height: "700px", opacity: "0.3" } : { height: "700px" }}>
                        {
                            tableName.map((item, index) => {


                                // console.log(bookedtblarr);
                                if (bookedtblarr.includes(item)) {
                                    return <div key={index} className='md:w-48 md:h-32 sm:w-32 sm:h-20 border-2 border-black font-bold md:text-2xl sm:text-xl md:p-3 rounded-xl bg-green-500'>{item}</div>;
                                }
                                else {


                                    return <div key={index} className='md:w-48 md:h-32 sm:w-32 sm:h-20 border-2 border-black font-bold md:text-2xl sm:text-xl md:p-3 hover:bg-zinc-500 rounded-xl cursor-pointer' onClick={() => { setCheck(); setSelTable(item) }}>{item}</div>;
                                }

                            })


                        }

                    </div>
                    }

                </div>


                <div className={popup ? 'absolute block z-10 top-[30%] md:left-[36%] sm:left-[4%]' : 'absolute hidden z-10 top-[30%] md:left-[40%] sm:left-[10%]'}>
                    <BookingData setFun={setCheck} table={selTable} bookDate={filterDate} />
                </div>

                {<div className={loader ? 'absolute top-[0px] md:h-[1250px] sm:h-[1070px] w-full block opacity-70 bg-gray-400 flex gap-4  justify-center items-center' : 'hidden'} >

                    <div
                        class="inline-block z-10 md:h-20 sm:h-12 md:w-20 sm:w-12 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                    </div>

                </div>}

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"

                    className={'md:text-[17px] md:w-[700px] md:h-[60px] sm:text-[15px] sm:w-[450px] sm:h-[40px]'}
                    // style={{ fontSize: "24px", width: "500px", height: "60px" }}
                />

            </>
        )
    }
    else {
        return (
            <>
                
                <div style={{ fontWeight: "bold" }} className='md:text-3xl sm:text-lg h-[1000px]'>Please login</div>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    className={'md:text-[17px] md:w-[700px] md:h-[60px] sm:text-[15px] sm:w-[450px] sm:h-[40px]'}
                    // style={{ fontSize: "24px", width: "500px", height: "60px" }}
                />
            </>
        )
    }

}

export default Table