import React from 'react'
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

function page() {
  return (
    <div className='relative '>
        <img src="/Sail-into-3.png" alt="" className='lg:max-w-xl md:max-w-lg max-w-96'/>
        <Link href={`/Destination/DestinationDetails?id=${destination[0].id}`} className='flex justify-center items-center gap-4 mt-6 absolute -top-10 right-0 md:right-11 lg:right-2 cursor-pointer'>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold lg:text-lg text-sm'>{destination[0].name}</h3>
            <p className='lg:text-lg text-sm'> {destination[0].temp[0].name}</p>
            </div>
            <img src={destination[0].img} alt="" className='lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10 rounded-[50%]'/>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[1].id}`} className='flex justify-center items-center gap-4 mt-6 absolute top-4 left-16 lg:left-20 md:left-24 md:top-10 lg:top-4 cursor-pointer'>
            <img src={destination[1].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[1].name}</h3>
            <p className=' lg:text-lg text-sm'> {destination[1].temp[0].name}</p>
            </div>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[2].id}`} className='flex justify-center items-center gap-4 mt-6 absolute lg:left-32 left-24 top-16 md:top-28 md:left-36 cursor-pointer'>
            <img src={destination[2].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[2].name}</h3>
            <p className=' lg:text-lg text-sm'> {destination[2].temp[0].name}</p>
            </div>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[3].id}`} className='flex justify-center items-center gap-4 mt-6 absolute lg:top-48 -right-4 top-32 md:top-44 md:right-10 lg:-right-6 cursor-pointer'>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[3].name}</h3>
            <p className=' lg:text-lg text-sm'> {destination[3].temp[0].name}</p>
            </div>
            <img src={destination[3].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[4].id}`} className='flex justify-center items-center gap-4 mt-6 absolute lg:top-70 top-44 left-24 md:top-60 md:left-36 cursor-pointer'>
            <img src={destination[4].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[4].name}</h3>
            <p className=' lg:text-lg text-sm'> {destination[4].temp[0].name}</p>
            </div>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[5].id}`} className='flex justify-center items-center gap-4 mt-6 absolute lg:top-96 left-0 top-64 md:top-80 md:left-7 lg:-left-16 cursor-pointer'>
            <img src={destination[5].img} alt="" className=' rounded-[50%] lg:w-20 lg:h-20 md:h-14 md:w-14 h-10 w-10'/>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold  lg:text-lg text-sm'>{destination[5].name}</h3>
            <p className=' lg:text-lg text-sm'> {destination[5].temp[0].name}</p>
            </div>
        </Link>
    </div>
  )
}

export default page