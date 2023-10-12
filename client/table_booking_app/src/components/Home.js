import React from 'react'
import logo from "../images/bg_img_1.jpg";
function Home() {
  return (
    <>
    <div className="m-auto" style={{backgroundImage:`url(${logo})`,width:"100%",height:"1400px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

        <div className='bg-rose-100 w-1/3 p-20 rounded-3xl text-xl m-auto'>
          <div className='text-center text-3xl font-bold mb-3 '>Home Section</div>
          <p className='text-neutral-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis recusandae unde animi a voluptatum culpa iusto eligendi praesentium inventore assumenda distinctio aspernatur pariatur vero eum sapiente ipsum adipisci debitis consequatur ab optio, et molestiae. Necessitatibus voluptas minus sequi eos!</p>
        </div>
    </div>
    </>
  )
}

export default Home