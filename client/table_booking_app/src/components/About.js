import React from 'react';
import bgImg from '../images/about_img_3.jpg'

function About() {
  return (
    <>
    <div className="m-auto md:h-[1400px] sm:h-[570px]" style={{backgroundImage:`url(${bgImg})`,width:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

        <div className='bg-rose-100 md:w-[36%]  sm:w-4/5 sm:h-[53%] md:h-auto md:p-10 sm:p-6 rounded-3xl md:text-xl sm:text-sm m-auto'>
          <div className='text-center md:text-xl sm:text-xl font-bold mb-3 '>About Us Section</div>
          <p className='text-neutral-900 text-justify md:text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis recusandae unde animi a voluptatum culpa iusto eligendi praesentium inventore assumenda distinctio aspernatur pariatur vero eum sapiente ipsum adipisci debitis consequatur ab optio, et molestiae. Necessitatibus voluptas minus sequi eos!</p>
        </div>
    </div>
    </>
  )
}

export default About