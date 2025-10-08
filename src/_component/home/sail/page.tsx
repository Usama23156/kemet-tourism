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
        <div className='flex justify-center items-center  '>
        <img data-aos="fade-right"  src="/last-round-trip-3.png" alt="" className='lg:max-w-2xl md:max-w-lg absolute '/>
        <img data-aos="fade-up"  src="/last-round-trip-4.png" alt="" className='lg:max-w-2xl md:max-w-lg '/>
        <img data-aos="fade-left"  src="/last-round-trip-2.png" alt="" className='lg:max-w-2xl md:max-w-lg absolute '/>
        </div>
        <p  data-aos="fade-up" className={`lg:text-4xl sm:text-2xl md:text-4xl text-xl max-w-3xl text-center uppercase font-extrabold ${CinzelFont.className}`}>The Nile carries more than water; it carries Egypt’s soul.</p>
        <Map/>
        <div className='flex justify-center items-center  '>
          <img data-aos="fade-right" src="/Triangles-1.png" alt="" className='lg:max-w-2xl md:max-w-xl max-w-96 absolute' />
          <img data-aos="fade-up" src="/Triangles-2.png" alt="" className='lg:max-w-2xl md:max-w-xl max-w-96 ' />
          <img data-aos="fade-left" src="/Triangles-3.png" alt="" className='lg:max-w-2xl md:max-w-xl max-w-96 absolute ' />
        </div>
        
     </div>
    </>
  )
}

export default page