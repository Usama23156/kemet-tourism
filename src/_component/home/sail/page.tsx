import React from 'react'
import { Cinzel } from 'next/font/google'
import Map from '../../map/page'
import "@/app/globals.css";

 const CinzelFont = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})

function page() {
  return (
    <>
     <div className='flex justify-center items-center flex-col pt-6 gap-y-8 '>
      <div>
        <img  data-aos="fade-right" src="/Sail-into-1.1.png" alt="" className='lg:max-w-xl md:max-w-lg max-w-80'/>
        <img  data-aos="fade-right" src="/Sail-into-1.2.png" alt="" className='lg:max-w-xl md:max-w-lg max-w-80'/>
      </div>
        <div className='flex justify-center items-center  '>
        {/* <img data-aos="fade-up" src="/last-round-trip-3.png" alt="" className='lg:max-w-2xl md:max-w-lg absolute '/>
        <img data-aos="fade-right" src="/last-round-trip-4.png" alt="" className='lg:max-w-2xl md:max-w-lg absolute'/>
        <img data-aos="fade-up" src="/last-Round-Trip-2.png" alt="" className='lg:max-w-2xl md:max-w-lg absolute min-w-56 '/> */}
        <img data-aos="fade-up"  src="/New-idea-round-trip2.png" alt="" className='lg:max-w-4xl md:max-w-xl  min-w-80 '/>
        <img
    src="/last-round-trip-4.png"
    alt="Description of the image"
    className="lg:max-w-2xl md:max-w-lg absolute animate-path"
/>
        </div>
        <p  data-aos="fade-up" className={`lg:text-4xl sm:text-2xl md:text-4xl text-xl max-w-3xl text-center uppercase font-extrabold ${CinzelFont.className}`}>The Nile carries more than water; it carries Egypt’s soul.</p>
        <Map/>
        <div className='flex  items-center'>
          <img data-aos="fade-right" src="/triangles001.png" alt="" className='lg:max-w-96 md:max-w-80 max-w-52 absolute  left-0 lg:left-1/5  hover:scale-105 transition-all duration-300' />
          <img data-aos="fade-up" src="/triangles004.png" alt="" className='lg:max-w-96 md:max-w-80 max-w-52  hover:scale-105 transition-all duration-300' />
          <img data-aos="fade-right" src="/trangles003.png" alt="" className='lg:max-w-96 md:max-w-80 max-w-52 absolute  right-0 lg:right-1/5 hover:scale-105 transition-all duration-300' />
        </div>
        
     </div>
    </>
  )
}

export default page