"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { use } from 'react'
import { motion } from 'motion/react'

const Header = () => {
 
  const text = "Hi! I'm Siti Mardhiyah";
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />        
      </motion.div>
      <motion.h3
        className="text-2xl md:text-3xl mb-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="font-SpaceGrotesk" 
          >
            {letter}
          </motion.span>
        ))}
      </motion.h3>
   
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-SpaceGrotesk'>
        fullstack web developer
      </h1>
        <p className='max-w-2xl mx-auto font-SpaceGrotesk'>
            Turning ideas into functional, fast, and visually engaging web applications—one line of code at a time</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.5}}
            href="/Resume-SitiMardhiyah.pdf" download 
            target="_blank" 
            rel="noopener noreferrer"
            className='px-10 py-3 border rounded-full border-gray-500
            flex items-center gap-2 bg-white dark:text-black'>
              My resume <Image src={assets.download_icon} alt='' className='w-4'/>
            </motion.a>
        </div>
    </div>
  )
}

export default Header
