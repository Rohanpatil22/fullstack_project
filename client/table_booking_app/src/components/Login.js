import React from 'react';
import bgImg from '../images/bg_img_2.jpg'

function Login() {
  return (
    <>
    <div className="m-auto pt-40" style={{backgroundImage:`url(${bgImg})`,width:"100%",height:"1400px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
    <div className='w-2/5 m-auto bg-stone-400 p-20 rounded-3xl' >
        <form >
           <table className='text-2xl m-auto'>
            <tbody>
                  
                <tr>
                    <td className='p-3'><label htmlFor='email_inp' className='font-medium'>Email Id</label></td> 
                    <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="email_inp" autoFocus /></td>
                </tr>

                <tr >
                    <td className='p-3'><label htmlFor='pass_inp' className='font-medium'>Password</label></td>
                    <td className='p-3'><input className='rounded-xl p-1 w-[400px] text-black' type="text" id="pass_inp"  /></td>
                </tr>

                <tr>
                    <td className='p-3 text-center pt-10' colSpan={2}><button className='p-3 w-40 bg-blue-900 rounded-xl text-white font-medium hover:scale-110 cursot-pointer mr-2' type="reset">Reset</button><button className='p-3 ml-3 w-40 bg-teal-800 text-white font-medium rounded-xl hover:scale-110 cursot-pointer' type="submit">Submit</button></td>
                    
                </tr>
            </tbody>
           </table>
                
          

           
                
           

        </form>
    </div>
</div>
</>
  )
}

export default Login