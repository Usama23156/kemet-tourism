"use client";
import React from 'react';
import { escapesData } from '../../data/data'; 
import { Allura } from 'next/font/google';
import { Lato } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import { OurEscapes } from '@/data/data';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AlluraFont = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
});
const LatoFont = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
});
const CinzelFont = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
});

const Escapes: {
  id: number;
  img: string[];
  name: string;
  price: string;
  features: string[];
  discrption: string;
}[] = OurEscapes;

function Page() {
  return (
    <div>
      <div className='flex justify-center items-center pt-6 gap-x-3'>
        <h3 data-aos="fade-right" className={`pt-9 text-xl md:text-4xl lg:text-5xl ${CinzelFont.className}`}>
          Escape the Ordinary
        </h3>
        <img data-aos="fade-left" src="/Pyramids-1.png" alt="" className='lg:max-w-80 max-w-36'/>
      </div>
      <div>
        {escapesData.map((escape, index) => (
          <div key={escape.id} className={`max-w-5xl md:flex gap-4 mx-auto my-10 p-4`}>
            {index % 2 === 0 ? (
              <>
                <div>
                  <h4 className={`text-3xl pb-0 text-[#b49e09] ${AlluraFont.className}`}>{escape.name}</h4>
                  <p className={`text-2xl pb-9 ${LatoFont.className}`}>{escape.discrption}</p>
                  <div>
                    {escape.packages.map((pkg, pkgIndex) => (
                      <div key={pkgIndex}>
                        <h5 className='pb-2'>
                          <span className="font-bold text-[#b49e09] cursor-pointer">{pkg.name}</span>
                          {pkg.details}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
                <img src={escape.img} alt={escape.name} className='rounded-2xl md:w-56 w-full'/>
              </>
            ) : (
              <>
                <img src={escape.img} alt={escape.name} className='rounded-2xl md:w-56 w-full'/>
                <div>
                  <h4 className={`text-3xl pb-0 text-[#b49e09] ${AlluraFont.className}`}>{escape.name}</h4>
                  <p className={`text-2xl pb-9 ${LatoFont.className}`}>{escape.discrption}</p>
                  <div>
                    {escape.packages.map((pkg, pkgIndex) => (
                      <div key={pkgIndex}>
                        <h5 className='pb-2'>
                          <span className="font-bold text-[#b49e09] cursor-pointer">{pkg.name}</span>
                          {pkg.details}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
              <h4 data-aos="fade-up" className="md:text-4xl text-2xl text-center pb-9">Discover Egypt like never before ...</h4>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          868: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        className="flex justify-center items-center w-full lg:w-full md:max-w-5xl mb-6"
      >
        {Escapes.map((escape) => (
          <SwiperSlide key={escape.id}>
            <div className="flex justify-center items-center w-full h-full p-4">
            <div data-aos="fade-right" className="flex flex-col justify-center items-center gap-y-6 border-1 border-[#b49e09] w-[80%] md:w-full rounded-3xl pb-3 hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="flex flex-col justify-center items-center gap-y-3 relative opacity-75 hover:opacity-100">
                <img
                  src={escape.img[0]}
                  alt=""
                  className="lg:max-w-64 md:max-w-80 rounded-2xl rounded-b-none max-w-96"
                />
                <div className="max-w-md flex flex-col left-6 gap-y-3 absolute bottom-0 w-full py-3">
                  <h3 className="md:text-sm text-2xl font-bold">{escape.name}</h3>
                  <p className="md:text-sm text-2xl font-bold">{escape.price}</p>
                </div>
              </div>
              {escape.features.map((feature, index) => (
                <p key={index} className="lg:text-sm text-2xl h-3 lg:h-0">{feature}</p>
              ))}
              <Link href={`/Escapes/EscapesDetails?id=${escape.id}`}>
                <button className="text-[#b49e09] bg-white px-16 md:px-10 py-1.5 rounded-4xl border-white border-4 hover:border-4 hover:border-[#a8870a] transition-colors duration-300 text-xl cursor-pointer mt-3">
                  BOOK NOW    
                </button>
              </Link>
            </div>
             </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Page;