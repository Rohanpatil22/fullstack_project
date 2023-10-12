import React from 'react'

function Header() {
  return (
    <>
    <nav>

              <div className='text-center p-4 text-3xl text-slate-950 font-bold' style={{backgroundColor:"#727F7E"}}>Restaurant Table Booking</div>
              <div className='flex justify-around bg-neutral-600 p-4 text-white font-bold text-lg items-center '>
                  <div >
                      <ul className='flex gap-28 '>
                          <li>Home</li>
                          <li>About Us</li>
                          <li>Contact Us</li>
                      </ul>
                  </div>
                  <div>
                      <ul className='flex gap-10'>
                          <li><button className='bg-sky-800 p-2 rounded-lg w-28 hover:scale-110'>Sign Up</button></li>
                          <li><button className='bg-red-600 p-2 rounded-lg w-28 hover:scale-110'>Login</button></li>
                      </ul>

                  </div>
                  <div>
                      <button className='bg-orange-600  p-2 rounded-lg w-28 hover:scale-110'>Book Table</button>
                  </div>
              </div>
    </nav>
    </>
  )
}

export default Header