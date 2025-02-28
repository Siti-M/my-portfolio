import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-12 mx-auto mb-2"/>

          <div className="w-max mx-auto flex flex-col items-center gap-2">
            {/* Email */}
            <div className="flex items-center gap-2">
              <Image
                src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                alt=""
                className="w-6"
              />
              sitimardhiyah777@gmail.com
            </div>

            {/* Social Links */}
            <div className="flex gap-6 items-center mt-1">
              {/* GitHub */}
              <a
                target="_blank"
                href="https://github.com/Siti-M"
                className="flex items-center gap-2 text-lg"
                style={{ color: isDarkMode ? "white" : "black" }}
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/siti-mardhiyah/"
                className="flex items-center gap-2 text-lg"
                style={{ color: isDarkMode ? "white" : "black" }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                LinkedIn
              </a>
            </div>
          </div>
      </div>


      <div className='text-center sm:flex items-center justify-center border-t
      border-gray-400 mx-[10%] mt-3 py-3'>
        <p>© 2025 Siti Mardhiyah. Built with inspiration from GreatStack</p>        
      </div>
    </div>
  )
}

export default Footer
