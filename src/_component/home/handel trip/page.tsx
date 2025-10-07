"use client"
import React, { useState } from 'react'
import { Cinzel } from 'next/font/google'
import { OurServises } from '@/data/data'
import PoppService from "@/_component/popp/poppService/page"

 const CinzelFont = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})

const Servises: {
    id: number;
    img: string;
    name: string;
    discrption: string;
    fullDiscrption: string;
}[] = OurServises

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-y-4">
      <div className='flex justify-center items-center pt-6 gap-x-3'>
        <h3  data-aos="fade-right" className={`pt-9 text-xl md:text-4xl lg:text-5xl ${CinzelFont.className}`}>Escape the Ordinary</h3>
        <img  data-aos="fade-left" src="/Pyramids.png" alt="" className='lg:max-w-80 max-w-36'/>
      </div>
        <img  data-aos="fade-right" src="/Escape the or 1.png" alt="" className='lg:max-w-5xl'/>
        <h4  data-aos="fade-up" className='text-3xl md:text-4xl lg:text-5xl text-[#b49e09]'>We'll handle your trip for you</h4>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-12 p-6 lg:p-12'>
           {Servises.map((service) => 
            <div  data-aos="fade-right" key={service.id} className='flex cursor-pointer flex-col md:flex-row justify-center items-center gap-y-6 gap-x-6' onClick={() => openModal(service)}>
                <img src={service.img} alt="" className=' lg:max-w-36 rounded-2xl md:max-w-40 max-w-96'/>
                <div className='max-w-md flex flex-col justify-center items-center gap-y-3'>
                <h3 className='text-2xl text-[#b49e09]'>{service.name}</h3>
                <p className='text-center text-sm max-w-72'>{service.discrption}</p>
                </div>
            </div>   
    )}
    </div>
    </div>
    <PoppService isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
    </>
  )
}

export default page