import React from 'react'
import logo from "../images/bg_img_1.jpg";
function Home() {
  return (
    <>
    <div style={{backgroundImage:'url({logo})',height:"50%"}}>
        <img src={logo}/>
    </div>
    </>
  )
}

export default Home