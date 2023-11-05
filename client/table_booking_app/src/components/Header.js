import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav>

              <div className='text-center p-4 text-3xl text-slate-950 font-bold' style={{backgroundColor:"#727F7E"}}>Restaurant Table Booking</div>
              <div className='flex justify-around bg-neutral-600 p-4 text-white font-bold text-xl items-center '>
                  <div >
                      <ul className='flex gap-28 '>
                         <NavLink to="home" className={({isActive})=>`cursor-pointer ${isActive ? "text-black":"text-white"}`}><li >Home</li></NavLink>
                         <NavLink to="about" className={({isActive})=>`cursor-pointer ${isActive ? "text-black":"text-white"}`}><li >About Us</li></NavLink> 
                         <NavLink to="contact" className={({isActive})=>`cursor-pointer ${isActive ? "text-black":"text-white"}`}><li >Contact Us</li></NavLink> 
                      </ul>
                  </div>
                  <div>
                      <ul className='flex gap-10'>
                          <Link to="signup"><li><button className='bg-sky-800 p-2 rounded-lg w-28 hover:scale-110 cursor-pointer'>Sign Up</button></li></Link>
                          <Link to="login"><li><button className='bg-red-600 p-2 rounded-lg w-28 hover:scale-110 cursor-pointer'>Login</button></li></Link>
                      </ul>

                  </div>
                  <div>
                        <Link to="booktable"><button className='bg-orange-600  p-2 rounded-lg w-32 hover:scale-110 cursor-pointer'>Book Table</button></Link>
                      
                  </div>
              </div>
    </nav>
    </>
  )
}

export default Header