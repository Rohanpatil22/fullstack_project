import React from 'react';
import bgImg from '../images/contact_img_1.jpg'

function Contact() {
  return (
    <>
    <div className="m-auto md:h-[1400px] sm:h-[570px]" style={{backgroundImage:`url(${bgImg})`,width:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

        <div className='bg-rose-100 md:w-1/3 sm:w-4/5 sm:h-[53%] md:h-auto md:p-20 sm:p-6 rounded-3xl md:text-xl sm:text-sm m-auto'>
          <div className='text-center md:text-3xl sm:text-xl font-bold mb-3 '>Contact Us Section</div>
          <p className='text-neutral-900 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsa iure, ducimus aut tempore dolore, dolorem nostrum harum exercitationem provident quaerat ipsam eos recusandae eius delectus ad accusantium. Ut, praesentium amet itaque minima consectetur quidem!</p>
        </div>
    </div>
    </>
  )
}

export default Contact