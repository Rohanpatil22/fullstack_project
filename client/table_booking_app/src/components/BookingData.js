import React from 'react'

function BookingData() {
  return (
    <>
        <div class="w-[1000px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-2xl font-medium text-gray-900 dark:text-white">Book Selected Table</h5>
        <div>
            <label for="name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Name</label>
            <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required/>
        </div>
         <div>
            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>

        <div>
            <label for="mobno" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Mobile No</label>
            <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0123456789" maxLength={10} required/>
        </div>

       <div>
            <label for="date" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Select Date</label>
            <input type="date" name="date" id="date" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book your Table</button>
       
    </form>
</div>
    
    
    </>
  )
}

export default BookingData;


