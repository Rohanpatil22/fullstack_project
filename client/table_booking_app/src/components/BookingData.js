import React from 'react'

function BookingData(props) {
  return (
    <>
        <div class="w-[500px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <div class="text-right"><button class="bg-red-500 p-3 rounded-lg text-white w-[40px] font-bold text-xl" onClick={props.setFun}>X</button></div>
        <h5 class="text-2xl font-medium text-gray-900 dark:text-white">Book Selected Table</h5>
        <div>
            <label for="name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Name</label>
            <input type="text" name="user_name" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" />
        </div>
         <div>
            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
        </div>

        <div>
            <label for="mobno" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Mobile No</label>
            <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0123456789" maxLength={10} />
        </div>

       <div>
            <label for="date" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Select Date</label>
            <input type="date" name="date" id="date" placeholder="••••••••" class="w-[430px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
        </div>

        <div className='w-full m-auto text-center'> <button class="w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-auto" >Book your Table</button></div>
       
       
    </form>
</div>
    
    
    </>
  )
}

export default BookingData;


