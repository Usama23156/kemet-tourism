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
        <img   src="/last-round-trip-4.png" alt="" className='lg:max-w-2xl md:max-w-lg absolute animate-path'
                    transform="matrix(0.9791300296783447,0,0,0.9791300296783447,400,179)"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    pathLength="1"
                    strokeMiterlimit="4"
                    stroke="#b49e09"
                    strokeOpacity="1"
                    strokeWidth="8"
                    d="M253,-161 C253,-161 -284.78900146484375,-201.4600067138672 -376,-21 C-469,163 67.62300109863281,174.2100067138672 256,121 C564,34 250.82899475097656,-141.6929931640625 19.10700035095215,-116.93599700927734"
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