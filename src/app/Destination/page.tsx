import React from 'react'
import { Cinzel } from 'next/font/google'

 const CinzelFont = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})


const page = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col pt-28 gap-y-8  '>
    <p  data-aos="fade-up" className={`lg:text-4xl sm:text-2xl md:text-4xl text-xl max-w-3xl text-center uppercase font-extrabold ${CinzelFont.className}`}>The Nile carries more than water; it carries Egypt’s soul.</p>
      <img  data-aos="fade-up" src="/map-destination.png" alt="" className=' max-w-full '/>
    </div>
    </>
  )
}

export default page