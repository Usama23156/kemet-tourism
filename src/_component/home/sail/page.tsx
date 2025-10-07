import React from 'react'
import { Cinzel } from 'next/font/google'
import Map from '../../map/page'

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
        <img  data-aos="fade-right" src="/sail-into-2.png" alt="" className='lg:max-w-2xl md:max-w-lg '/>
        {/* <div className='flex justify-center items-center my-20 '>
        <img  src="/Round-trip-1.png" alt="" className='lg:w-80 w-48 '/>
        <img  src="/Round-trip-2.png" alt="" className='lg:w-48 max-w-32'/>
        <img  src="/Round-trip-3.png" alt="" className='lg:w-80 max-w-48 '/>
        </div> */}
        <p  data-aos="fade-up" className={`lg:text-4xl sm:text-2xl md:text-4xl text-xl max-w-3xl text-center uppercase font-extrabold ${CinzelFont.className}`}>The Nile carries more than water; it carries Egypt’s soul.</p>
        <Map/>
        <img  data-aos="fade-right" src="/sail-into-4.png" alt="" className='lg:max-w-xl md:max-w-lg max-w-80'/>
        
     </div>
    </>
  )
}

export default page