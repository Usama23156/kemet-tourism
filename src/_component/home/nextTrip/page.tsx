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
    <div>
        <div className='flex justify-center items-center flex-col pt-6 gap-y-5 '>
           <p className={`text-4xl ${AlluraFont.className}`}>Let’s plan your next trip</p>
           <h2 className={`text-center ${CinzelFont.className}`}> WHY CHOOSE US</h2>
           <img src="/why us .png" alt="" className='lg:max-w-3xl md:max-w-xl'/>
        </div>
    </div>
  )
}

export default page