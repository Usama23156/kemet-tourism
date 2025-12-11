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
    <div className='relative '>
<img  data-aos="fade-up" src="/map-destination.png" alt="" className=' max-w-full '/>        
<Link href={`/Destination/DestinationDetails?id=${destination[0].id}`}  data-aos="fade-left" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[200px] right-[110px] lg:bottom-2/5  lg:right-80 cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[0].img} alt="" className='lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8 rounded-[50%]'/>
            <h3 className='font-bold lg:text-lg text-xs'>{destination[0].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[1].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute lg:right-[410px] lg:bottom-2/6 bottom-[165px] right-44  cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[1].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[1].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[2].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[110px] right-[140px] lg:bottom-[310px] lg:right-[370px] cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[2].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[2].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[3].id}`}  data-aos="fade-left" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[90px] right-[60px] lg:bottom-[250px] lg:right-[230px] cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[3].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[3].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[4].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[70px] right-[170px] lg:bottom-[180px] lg:right-[390px] cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[4].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[4].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[5].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[30px] right-[75px] lg:right-[500px] lg:bottom-[80px] cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[5].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[5].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[6].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[200px] right-[110px] lg:bottom-2/5  lg:right-24  cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[6].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[6].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[10].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[200px] right-[110px] lg:bottom-[700px]  lg:right-24  cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[10].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[10].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[9].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[200px] right-[110px] lg:bottom-[980px]  lg:right-[580px]  cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[9].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[9].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[8].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[200px] right-[110px] lg:bottom-[780px]  lg:right-[980px]  cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[8].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[8].name}</h3>
        </Link>
        <Link href={`/Destination/DestinationDetails?id=${destination[7].id}`}  data-aos="fade-right" className='flex flex-col justify-center items-center gap-1 mt-6 absolute bottom-[200px] right-[110px] lg:bottom-[1030px]  lg:right-[780px]  cursor-pointer hover:scale-110 duration-initial transition-transform '>
            <img src={destination[7].img} alt="" className=' rounded-[50%] lg:w-16 lg:h-16 md:h-14 md:w-14 h-8 w-8'/>
            <h3 className='font-bold  lg:text-lg text-xs'>{destination[7].name}</h3>
        </Link>
    </div>

    </div>
    </>
  )
}

export default page