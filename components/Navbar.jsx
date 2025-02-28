import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* Background header */}
      <div className='fixed top-0 left-[5%] w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full' />
      </div>

      {/* Navbar */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 md:py-4
      flex items-center justify-between z-50 min-h-[56px] flex-wrap
      ${isScroll ? "bg-white bg-opacity-60 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>

        {/* Logo */}
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-12 cursor-pointer mr-4 md:mr-14' />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-4 lg:gap-8
        rounded-full px-6 py-2 md:px-12 md:py-3 truncate
        ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li><a className='font-Ovo' onClick={closeSideMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeSideMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeSideMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={closeSideMenu} href="#contact">Contact me</a></li>
        </ul>

        {/* Right-side buttons */}
        <div className='flex items-center gap-3 md:gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-6 py-2.5 md:px-10
          border border-gray-500 rounded-full font-Ovo dark:border-white/50'>
            Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' />
          </a>

          {/* Mobile Menu Button */}
          <button className='block md:hidden ml-2' onClick={openSideMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

          <div className='absolute top-6 right-6' onClick={closeSideMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          <li><a className='font-Ovo' onClick={closeSideMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeSideMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeSideMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={closeSideMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
