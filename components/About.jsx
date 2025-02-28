import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>
        About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                I'm an IT graduate passionate about web development and continuous learning. I have experience with PHP, SQL, and JavaScript and have been exploring full-stack technologies like React and Node.js. While I’m still growing as a developer, I enjoy building functional and visually engaging web applications. My goal is to keep improving, take on new challenges, and contribute to meaningful projects.</p>
            
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description,}, index) => (
                    <li className='border-[0.5px] border-gray-400 rounded-xl
                    p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                    hover:shadow-brown dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                    key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>

    </div>
  )
}

export default About
