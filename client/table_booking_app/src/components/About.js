import React from 'react';
import bgImg from '../images/about_img_3.jpg'

function About() {
  return (
    <>
    <div className="m-auto" style={{backgroundImage:`url(${bgImg})`,width:"100%",height:"1400px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

        <div className='bg-rose-100 w-1/3 p-20 rounded-3xl text-xl m-auto'>
          <div className='text-center text-3xl font-bold mb-3 '>About Us Section</div>
          <p className='text-neutral-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis recusandae unde animi a voluptatum culpa iusto eligendi praesentium inventore assumenda distinctio aspernatur pariatur vero eum sapiente ipsum adipisci debitis consequatur ab optio, et molestiae. Necessitatibus voluptas minus sequi eos!</p>
        </div>
    </div>
    </>
  )
}

export default About