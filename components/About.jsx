import { assets, skills, education, certification } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('skills'); 

  return (
    <div id='about' className='w-full px-6 sm:px-[12%] py-10 scroll-mt-10'>
      <h2 className='text-center text-5xl font-SpaceGrotesk mb-10'>About me</h2> 
      
      <div className='flex w-full flex-col md:flex-row items-center md:items-start gap-12 my-10'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none md:mt-6'> 
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>

        <div className='flex-1 flex flex-col justify-center'>
          <p className='mb-5 max-w-full sm:max-w-2xl font-SpaceGrotesk text-left sm:text-justify break-words'>
            I'm an IT graduate passionate about web development and continuous learning. I have experience with PHP, SQL, and JavaScript and have been exploring full-stack technologies like React and Node.js. While I’m still growing as a developer, I enjoy building functional and visually engaging web applications. My goal is to keep improving, take on new challenges, and contribute to meaningful projects.
          </p>

          {/* Menu*/}
          <div className="relative flex flex-col sm:flex-row justify-start gap-2 sm:gap-6 mb-6 bg-white/10 backdrop-blur-lg rounded-lg p-2 border border-white/20 shadow-md dark:bg-black/20">
            {['skills', 'education', 'certification'].map((tab) => (
              <button
                key={tab}
                className={`relative w-full sm:w-auto px-5 py-2 text-sm font-semibold text-center transition-all duration-300 
                  ${activeTab === tab 
                    ? 'text-black dark:text-white after:w-full' 
                    : 'text-gray-500 hover:text-black dark:hover:text-white after:w-0'
                  } 
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black/60 dark:after:bg-white/60 after:transition-all after:duration-300 after:ease-in-out`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'skills' && (
            <ul className='grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl'>
              {skills.map(({ title, icon }, index) => (
                <li key={index} className='relative flex flex-col items-center cursor-pointer group'>
                  <span className='absolute top-[-15px] left-2/3 -translate-x-1/4 opacity-0 
                    group-hover:opacity-100 bg-gray-700 text-white text-xs px-2 py-1 rounded-md 
                    transition duration-300 whitespace-nowrap'>
                    {title}
                  </span>
                  <FontAwesomeIcon 
                    icon={icon} 
                    className='text-5xl text-gray-600 dark:text-white group-hover:text-black dark:group-hover:text-white/30 transition duration-300'
                  />
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'education' && (
            <div className='text-gray-600 dark:text-white'>
              {education.map((edu, index) => (
                <p key={index}>{edu}</p>
              ))}
            </div>
          )}

          {activeTab === 'certification' && (
            <ul className='text-gray-600 dark:text-white space-y-3'>
              {certification.map((cert, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FontAwesomeIcon icon={assets.faArrowRight} className="text-black dark:text-white/80" />
                  {cert.link !== "#" ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black dark:text-white/80"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    <span className="text-black dark:text-white/80">{cert.title}</span> 
                  )}
                </li>
              ))}
            </ul>
          
          )}
        </div>
      </div>
    </div>
  )
}

export default About
