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
        <div className='flex justify-center items-center flex-col pt-6 gap-y-5 '>
           <p  data-aos="fade-up" className={`text-4xl lg:text-5xl ${AlluraFont.className}`}>Let’s plan your next trip</p>
           <h2  data-aos="fade-up" className={`text-center lg:text-2xl ${CinzelFont.className}`}> WHY CHOOSE US</h2>
           <img  data-aos="fade-right" src="/why us .png" alt="" className='lg:max-w-3xl md:max-w-xl'/>
        </div>
    </div>
  )
}

export default page