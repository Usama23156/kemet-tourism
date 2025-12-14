"use client"; 

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 
import { FaBars } from 'react-icons/fa'; 
import { Cinzel } from 'next/font/google'
import { FaRegCircleUser } from 'react-icons/fa6';


 const CinzelFont = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollState = window.scrollY;
      if (currentScrollState > scrollPosition && currentScrollState > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollPosition(currentScrollState);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
    <div className='fixed z-[1000] right-0 top-0 w-full'>
      <div className={`flex justify-between items-center transition-[0.5s] px-6 lg:px-[100px] md:py-0 ${scrollPosition < 50 ? '' : 'opacity-70 bg-[#0C1135]' } ${isVisible ? 'top-0' : 'top-24'}`}>
        <Link href="/" className={`text-[1.1rem] font-semibold flex items-center gap-x-2 cursor-pointer ${scrollPosition > 50 ? 'text-[color:var(--text-color)]' : 'text-[color:var(--bg-color)]'}`}>
          <img src="/LOGO2.PNG" alt="Logo" className='max-w-36' />
        </Link>
        <div onClick={() => setOpen(!open)} className={`icon md:hidden cursor-pointer text-2xl z-[100001] flex flex-wrap md:flex-nowrap justify-between items-center mr-28 ${scrollPosition > 50 ? 'text-[color:var(--text-color)]' : 'text-[color:var(--bg-color)]'}`}>
          <FaBars />
        </div>
        <div className={`${open ? "flex bg-[#0C1135] absolute md:relative top-16 lg:top-1 left-0 w-full h-auto " : " hidden"} md:flex flex-col md:flex-row items-center md:justify-between md:space-x-12 lg:space-x-40 w-full md:w-auto  md:bg-transparent p-6 md:p-0 rounded-b-lg md:rounded-none`}>
          <ul className='flex flex-col md:flex-row md:text-center justify-center items-center md:space-x-0 gap-x-20 gap-y-5 py-5 '>
            <li className="relative">
              <Link href="/" onClick={() => setOpen(false)} className={`font-bold text-xl hover:text-[#b49e09] ${scrollPosition > 50 ? 'md:text-[#b49e09] hover:text-white' : 'md:text-[color:var(--main-color)]'} ${CinzelFont.className}`}>Home</Link>
            </li>
            <li className="relative">
              <Link href="/Destination" onClick={() => setOpen(false)} className={`font-bold text-xl hover:text-[#b49e09] ${scrollPosition > 50 ? 'md:text-[#b49e09] hover:text-white' : 'md:text-[color:var(--main-color)]'} ${CinzelFont.className}`}>Destination</Link>
            </li>
            <li className="relative">
              <Link href="/Escapes" onClick={() => setOpen(false)} className={`font-bold text-xl hover:text-[#b49e09]  ${scrollPosition > 50 ? 'md:text-[#b49e09] hover:text-white' : 'md:text-[color:var(--main-color)]'} ${CinzelFont.className}`}>Escapes</Link>
            </li>
            <li className="relative">
              <Link href="/About" onClick={() => setOpen(false)} className={`font-bold text-xl hover:text-[#b49e09]  ${scrollPosition > 50 ? 'md:text-[#b49e09] hover:text-white' : 'md:text-[color:var(--main-color)]'} ${CinzelFont.className}`}>About Us</Link>
            </li>
          </ul>
        </div>
          <div className="relative pr-5">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={` text-2xl ${scrollPosition > 50 ?  'text-[#b49e09]' : 'text-white' } bg-transparent  rounded cursor-pointer`}
              >
              <FaRegCircleUser />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded z-10">
                  <Link href="/login" className="block px-4 py-2 text-sm hover:bg-gray-100 text-black">Login</Link>
                  <Link href="/signup" className="block px-4 py-2 text-sm hover:bg-gray-100 text-black">Signup</Link>
                </div>
              )}
            </div>
      </div>
    </div>
    </>
  );
}