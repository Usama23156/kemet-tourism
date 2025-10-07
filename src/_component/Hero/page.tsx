import React from 'react'
import { Allura } from 'next/font/google'
import { Lato } from 'next/font/google'

const AlluraFont = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})
const LatoFont = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})

const page = () => {
  return (
    <div>
        <div className="w-full h-[120vh] relative sm:h-[100vh]">
          <div className="w-full absolute top-0 left-0 h-full opacity-75 bg-blue-950">
            <video src="/Hero.mp4"
            autoPlay
            muted
            loop
            preload='metadata'
            className='w-full h-full object-cover'/>
            <div className="absolute z-[100] top-[50%] left-[50%] w-full h-full translate-y-[-50%] translate-x-[-50%]">
                <div className='flex flex-col justify-center items-center w-full h-full '>
                    <div data-aos="fade-up">
                        <h1 className={`hover:scale-110 duration-500 transition-transform font-extrabold text-white mb-4 md:mb-0 text-[30px] md:text-[40px] text-center lg:text-[50px] tracking-[0.5rem] ${AlluraFont.className}`}>Discover Authentic Egypt</h1>
                        <p className={`text-white text-center hover:scale-110 duration-500 transition-transform  text-xl font-semibold [word-spacing:5px] ${LatoFont.className}`}>Luxury Escapes & Tailor-Made Travel</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page