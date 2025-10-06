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
        <img src="/Sail-into-1.png" alt="" className='lg:max-w-xl md:max-w-lg max-w-80'/>
        <img src="/sail-into-2.png" alt="" className='lg:max-w-2xl md:max-w-lg '/>
        <p className={`lg:text-4xl sm:text-2xl md:text-4xl text-xl max-w-3xl text-center uppercase font-extrabold ${CinzelFont.className}`}>The Nile carries more than water; it carries Egypt’s soul.</p>
        <Map/>
        <img src="/Sail-into-4.png" alt="" className='lg:max-w-xl md:max-w-lg max-w-80'/>
        
     </div>
    </>
  )
}

export default page