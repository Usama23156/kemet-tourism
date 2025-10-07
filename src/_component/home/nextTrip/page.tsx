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
        <div className='flex justify-center items-center flex-col pt-6 pb-36 '>
           <p  data-aos="fade-up" className={`text-4xl lg:text-5xl ${AlluraFont.className}`}>Let’s plan your next trip</p>
           <h2  data-aos="fade-up" className={`text-center lg:text-2xl ${CinzelFont.className}`}> WHY CHOOSE US</h2>
           <div className='flex items-center relative min-w-4xl top-20'>
           <img data-aos="rotate" src="/Why-us-circle.png" alt="" className=' min-w-56 absolute '/>
           <img data-aos="fade-up" src="/Why-us-Statue.png" alt="" className=''/>
           </div>
        </div>
    </div>
  )
}

export default page