import React from 'react'
import { Cinzel } from 'next/font/google'
import { Allura } from 'next/font/google'

 const CinzelFont = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})
const AlluraFont = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})
function page() {
  return (
    <div >
        <div className='flex justify-center items-center flex-col pt-6 pb-44 '>
           <p  data-aos="fade-up" className={`pb-3 lg:text-2xl ${AlluraFont.className}`}>Let’s plan your next trip</p>
           <h2  data-aos="fade-up" className={`text-4xl lg:text-5xl ${CinzelFont.className}`}> WHY CHOOSE US</h2>
           <div className='flex items-center relative min-w-2xl top-20'>
           <img data-aos="fade-left" src="/Why-us-circle.png" alt="" className=' min-w-52 absolute transition-transform duration-500 ease-in-out transform rotate-[360deg]'/>
           <img data-aos="fade-right" src="/Why-us-Statue.png" alt="" className=''/>
           <p data-aos="fade-right" className='absolute text-[#b49e09] left-36 md:left-1/5 lg:left-1/4 bottom-52 lg:top-1/12 text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>TRUST&CARE </p>
           <p data-aos="fade-left" className='absolute text-[#b49e09] md:right-14 right-36 lg:right-48 bottom-44 md:bottom-52 lg:bottom-80 w-24 lg:w-auto text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>AUTHENTIC EXPERIENCES </p>
           <p data-aos="fade-right" className='absolute text-[#b49e09]  left-36 md:left-1/9 bottom-6 md:bottom-14 lg:left-1/5 w-24 lg:w-auto text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>LUXURY ESCAPES</p>
           <p data-aos="fade-left" className='absolute text-[#b49e09]  right-36 md:right-24 lg:right-68 bottom-6 md:bottom-14 lg:bottom-20 w-20 lg:w-auto text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>LOCAL EXPERTS </p>
           <p data-aos="fade-up" className='absolute text-[#b49e09] left-60 -bottom-12 md:-bottom-16 lg:-bottom-20 md:left-68 lg:left-2/5 text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>COMPETITIVE PRICING </p>
           </div>
        </div>
    </div>
  )
}

export default page