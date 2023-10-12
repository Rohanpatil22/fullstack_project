import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faLinkedin,faFacebook,faTwitter,faDiscord,faInstagram} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
   <>
    <div className='flex justify-around bg-neutral-600 p-4 text-white font-bold text-xl items-center '>
                  <div >
                      <ul className='flex gap-28 '>
                          <li className='cursor-pointer'><FontAwesomeIcon  icon={faLinkedin} size="2xl" /></li>
                          <li className='cursor-pointer'><FontAwesomeIcon  icon={faFacebook} size="2xl" /></li>
                          <li className='cursor-pointer'><FontAwesomeIcon  icon={faTwitter} size="2xl" /></li>
                          <li className='cursor-pointer'><FontAwesomeIcon  icon={faDiscord} size="2xl" /></li>
                          <li className='cursor-pointer'><FontAwesomeIcon  icon={faInstagram} size="2xl" /></li>
                      </ul>
                  </div>
              </div>
   </>
  )
}

export default Footer