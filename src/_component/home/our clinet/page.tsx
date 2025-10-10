"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Page() {
  return (
    <>
      <div style={{ backgroundImage: `url(/our-client.JPG)` }}
       className=" bg-no-repeat bg-cover bg-center ">
        <div className="flex flex-col justify-center items-center mt-6 pt-16 gap-y-9 md:gap-y-6 pb-5">
          <h2  data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Favorite Travelers
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1} // Default to 1 slide on small screens
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              868: {
                slidesPerView: 3,
              },
            }}
            data-aos="fade-up" 
            className="hero-swiper text-center w-80 lg:w-full lg:max-w-4xl "
          >
            <SwiperSlide >
              <div   className="bg-white max-w-80 lg:max-w-64 p-3 rounded-2xl items-center justify-center pt-5 pb-9 lg:pb-0  ">
                <div className="flex gap-3 lg:justify-center items-center pb-3 px-6">
                  <img
                    src="/client.jpg"
                    alt=""
                    className="max-w-12 rounded-[50%]"
                  />
                  <div>
                    <h3 className="font-semibold text-black lg:text-lg text-xs">
                      ClientName
                    </h3>
                    <img src="/rating.svg" alt="" className="max-w-24" />
                  </div>
                </div>
                <p className="text-black lg:p-3 md:text-base text-xs  px-6">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div   className="bg-white max-w-80 lg:max-w-64 p-3 rounded-2xl items-center justify-center pt-5 pb-9 lg:pb-0  ">
                <div className="flex gap-3 lg:justify-center items-center pb-3 px-6">
                  <img
                    src="/client.jpg"
                    alt=""
                    className="max-w-12 rounded-[50%]"
                  />
                  <div>
                    <h3 className="font-semibold text-black lg:text-lg text-xs">
                      ClientName
                    </h3>
                    <img src="/rating.svg" alt="" className="max-w-24" />
                  </div>
                </div>
                <p className="text-black lg:p-3 md:text-base text-xs px-6">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div   className="bg-white max-w-80 lg:max-w-64 p-3 rounded-2xl items-center justify-center pt-5 pb-9 lg:pb-0 ">
                <div className="flex gap-3 lg:justify-center items-center pb-3 px-6">
                  <img
                    src="/client.jpg"
                    alt=""
                    className="max-w-12 rounded-[50%]"
                  />
                  <div>
                    <h3 className="font-semibold text-black lg:text-lg text-xs">
                      ClientName
                    </h3>
                    <img src="/rating.svg" alt="" className="max-w-24" />
                  </div>
                </div>
                <p className="text-black lg:p-3 md:text-base text-xs px-6">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                  Boost your product and service's credibility by adding
                  testimonials from your client .
                </p>
              </div>
            </SwiperSlide>
            <div>
              <button>
                
              </button>
            </div>
           
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Page;
