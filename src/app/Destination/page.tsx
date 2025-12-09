import React from 'react'
import { Cinzel } from 'next/font/google'
import { OurDestination } from '@/data/data'
import Link from "next/link";

const destination: {
  id: number;
    img: string;
    name: string;
    temp: {
        id: number;
        name: string;
        img: string;
        info: string;
    }[];
    discrption: string;
}[] = OurDestination;

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
    {/* <div className='relative '>
<Link href={`/Destination/DestinationDetails?id=${destination[0].id}`}  data-aos="fade-left" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-1/3 right-0 md:right-11 lg:right-52 cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[0].img} alt="" className='lg:w-16 lg:h-16 md:h-14 md:w-14 h-10 w-10 rounded-[50%]'/>
            <h3 className='font-bold lg:text-lg text-sm'>{destination[0].name}</h3>
            <div className='flex flex-col justify-center items-center'>
            <p className='lg:text-lg text-sm'> {destination[0].temp[0].name}</p>
            </div>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[1].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-4 mt-6 absolute left-16  md:left-24 md:top-10  cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[1].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[1].name}</h3>
            <p className=' lg:text-lg text-sm'> {destination[1].temp[0].name}</p>
            </div>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[2].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-4 mt-6 absolute lg:left-32 left-24 top-16 md:top-28 md:left-36 cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[2].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[2].name}</h3>
            <p className=' lg:text-lg text-sm '> {destination[2].temp[0].name}</p>
            </div>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[3].id}`}  data-aos="fade-left" className='flex flex-col justify-center items-center gap-4 mt-6 absolute lg:top-48 -right-0 top-32 md:top-44 md:right-10 lg:-right-6 cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[3].name}</h3>
            <p className=' lg:text-lg text-sm max-w-20 text-center md:max-w-44'> {destination[3].temp[0].name}</p>
            </div>
            <img src={destination[3].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[4].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-4 mt-6 absolute lg:top-70 top-44 left-24 md:top-60 md:left-36 cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[4].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[4].name}</h3>
            <p className=' lg:text-lg text-sm'> {destination[4].temp[0].name}</p>
            </div>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[5].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-4 mt-6 absolute lg:top-96 left-0 top-64 md:top-80 md:left-7 lg:-left-16 cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[5].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[5].name}</h3>
            <p className=' lg:text-lg text-sm max-w-20 text-center md:max-w-44'> {destination[5].temp[0].name}</p>
            </div>
        </Link>
    </div> */}
    </div>
    </>
  )
}

export default page