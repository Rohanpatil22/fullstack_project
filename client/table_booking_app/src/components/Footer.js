import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faLinkedin,faFacebook,faTwitter,faDiscord,faInstagram} from '@fortawesome/free-brands-svg-icons'


function Footer() {

    let wind_width=window.innerWidth;
  return (
   <>

    {wind_width>450 ?
        (<div className='flex justify-around bg-neutral-600 md:p-4 text-white font-bold text-xl items-center '>
                    <div >
                        <ul className='flex md:gap-28 sm:gap-10 '>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faLinkedin} size="2xl" /></li>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faFacebook} size="2xl" /></li>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faTwitter} size="2xl" /></li>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faDiscord} size="2xl" /></li>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faInstagram} size="2xl" /></li>
                        </ul>
                    </div>
                </div>
        )
        :
        (
            <div className='flex justify-around bg-neutral-600 p-3 text-white font-bold text-xl items-center '>
                    <div >
                        <ul className='flex md:gap-28 sm:gap-10 '>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faLinkedin} size="lg" /></li>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faFacebook} size="lg" /></li>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faTwitter} size="lg" /></li>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faDiscord} size="lg" /></li>
                            <li className='cursor-pointer'><FontAwesomeIcon  icon={faInstagram} size="lg" /></li>
                        </ul>
                    </div>
                </div>
        )
    }
   </>
  )
}

export default Footer