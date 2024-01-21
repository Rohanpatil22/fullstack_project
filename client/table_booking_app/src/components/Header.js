import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav>

              <div className='text-center sm:text-xl sm:p-2 p-4 text-3xl text-slate-950 font-bold' style={{backgroundColor:"#727F7E"}}>Restaurant Table Booking</div>
              <div className='min-[600px]:flex min-[600px]:justify-around bg-neutral-600 min-[600px]:p-4 p-1 text-white font-bold  min-[600px]:text-xl text-sm items-center sm:p-2'>
                  <div >
                      <ul className='flex  min-[600px]:gap-28 sm:justify-around'>
                         <NavLink to="home" className={({isActive})=>`cursor-pointer ${isActive ? "text-black":"text-white"}`}><li className='sm:w-20 ' >Home</li></NavLink>
                         <NavLink to="about" className={({isActive})=>`cursor-pointer ${isActive ? "text-black":"text-white"}`}><li className=' sm:text-center' >About Us</li></NavLink> 
                         <NavLink to="contact" className={({isActive})=>`cursor-pointer ${isActive ? "text-black":"text-white"}`}><li className='sm:w-26 sm:text-center sm:pl-6 md:pl-0' >Contact Us</li></NavLink> 
                      </ul>
                  </div>
                  
                  <div className='sm:m-2'>
                      <ul className='flex gap-10 sm:justify-around'>
                          <Link to="signup"><li><button className='bg-sky-800 md:p-2 sm:p-1 sm:w-20 rounded-lg md:w-28 hover:scale-110 cursor-pointer'>Sign Up</button></li></Link>
                          <Link to="login"><li><button className='bg-red-600 md:p-2 sm:p-1  rounded-lg md:w-28  sm:w-20 hover:scale-110 cursor-pointer'>Login</button></li></Link>
                          <Link to="booktable"><li className='sm:block md:hidden'><button className='bg-red-600 sm:p-1 md:p-2 rounded-lg md:w-28 sm:w-22 hover:scale-110 cursor-pointer'>Book Table</button></li></Link>
                      </ul>

                  </div>
                  <div className='md:block sm:hidden'>
                        <Link to="booktable"><button className='bg-orange-600  p-2 rounded-lg w-32 hover:scale-110 cursor-pointer'>Book Table</button></Link>
                      
                  </div>
              </div>
    </nav>
    </>
  )
}

export default Header