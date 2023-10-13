import React from 'react';
import bgImg from '../images/contact_img_1.jpg'

function Contact() {
  return (
    <>
    <div className="m-auto" style={{backgroundImage:`url(${bgImg})`,width:"100%",height:"1400px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

        <div className='bg-rose-100 w-1/3 p-20 rounded-3xl text-xl m-auto'>
          <div className='text-center text-3xl font-bold mb-3 '>Contact Us Section</div>
          <p className='text-neutral-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsa iure, ducimus aut tempore dolore, dolorem nostrum harum exercitationem provident quaerat ipsam eos recusandae eius delectus ad accusantium. Ut, praesentium amet itaque minima consectetur quidem!</p>
        </div>
    </div>
    </>
  )
}

export default Contact