import React from "react";
import { Cinzel } from 'next/font/google'
import Image from "next/image";


 const CinzelFont = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
})

const page = () => {

  return (
    <>
    <div style={{ backgroundImage: `url(/bg.png)` }}
            className=" bg-no-repeat bg-cover bg-center pt-28 md:pb-36 pb-28">
      <div className="md:flex justify-center items-center px-6 lg:px-32 gap-10 py-6 ">
        <div className="md:w-[47%] md:pt-12 items-center lg:items-start lg:gap-y-0 gap-y-8 flex flex-col">
          <h2 data-aos="fade-up" className={`font-semibold lg:text-4xl text-3xl ${CinzelFont.className}`}> Travel made easy </h2>
          <p data-aos="fade-up" className="text-white mt-6 lg:text-xl text-lg">
            Born from the heart of Egypt, Kemet Escapes designs journeys with
            soul. We are local experts who live the land we share — its rhythms,
            its secrets, its spirit.
          </p>
          <div data-aos="fade-up" className="flex items-center  gap-6 mb-6 lg:mt-32">
            <button className="bg-[#b49e09] text-white rounded-4xl border-[#a8870a] border-4 hover:border-4 hover:border-white transition-colors duration-300 text-base lg:text-xl px-3 py-1.5 cursor-pointer">
                LATEST PROMOS     
            </button>
            <button className="text-[#b49e09] bg-white px-3 py-1.5 rounded-4xl border-white border-4 hover:border-4 hover:border-[#a8870a] transition-colors duration-300 text-base lg:text-xl cursor-pointer">
                OUR OFFERINGS    
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="md:w-[38%]">
            <img src="/welcome.jpg" alt="" className="min-w-20 rounded-4xl " />
        </div>
      </div>
      </div>
    </>
  );
}

export default page;
