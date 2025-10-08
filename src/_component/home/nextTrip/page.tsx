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
           <div className='flex items-center relative min-w-4xl top-20'>
           <img data-aos="fade-left" src="/Why-us-circle.png" alt="" className=' min-w-56 absolute '/>
           <img data-aos="fade-right" src="/Why-us-Statue.png" alt="" className=''/>
           <p data-aos="fade-right" className='absolute text-[#b49e09] left-2/7 md:left-1/4 bottom-64 lg:top-1/12 text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>TRUST&CARE </p>
           <p data-aos="fade-left" className='absolute text-[#b49e09] md:right-36 right-64 bottom-64 lg:bottom-80 w-24 md:w-auto text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>AUTHENTIC EXPERIENCES </p>
           <p data-aos="fade-right" className='absolute text-[#b49e09]  left-2/7 md:left-1/6 bottom-6 md:bottom-20 w-24 md:w-auto text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>LUXURY ESCAPES</p>
           <p data-aos="fade-left" className='absolute text-[#b49e09]  right-60 md:right-40 lg:right-52 bottom-6 md:bottom-20 lg:bottom-20 w-20 md:w-auto text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>LOCAL EXPERTS </p>
           <p data-aos="fade-up" className='absolute text-[#b49e09] left-96 -bottom-12 md:-bottom-16 lg:-bottom-20 md:left-2/5 text-base md:text-lg lg:text-xl hover:scale-110 duration-initial transition-transform '>COMPETITIVE PRICING </p>
           </div>
        </div>
    </div>
  )
}

export default page