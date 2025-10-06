"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Page() {
  return (
    <>
      <div className="pt-9 pb-9 relative flex justify-center items-center flex-col gap-y-6">
        <img src="/our client.jpg" alt="" className="min-w-20" />
        <div className="flex flex-col justify-center items-center mt-6 gap-y-1 md:gap-y-6 absolute bottom-12 md:bottom-14">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Our Favorite Travelers
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1} // Default to 1 slide on small screens
            navigation={{
              prevEl: ".client-prev",
              nextEl: ".client-next",
            }}
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
            className="hero-swiper text-center w-80 lg:w-full lg:max-w-4xl "
          >
            <SwiperSlide>
              <div className="bg-white  lg:max-w-64 p-2 rounded-2xl lg:max-h-96 max-h-24 md:max-h-40  lg:overflow-auto justify-center pt-5 flex md:flex-col">
                <div className="flex flex-col md:flex-row gap-3 justify-center items-center mb-3 p-3">
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
                <p className="text-black lg:p-3 md:text-base text-xs">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white  lg:max-w-64 p-2 rounded-2xl lg:max-h-96 max-h-24 md:max-h-40  lg:overflow-auto justify-center pt-5 flex md:flex-col">
                <div className="flex flex-col md:flex-row gap-3 justify-center items-center mb-3 p-3">
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
                <p className="text-black lg:p-3 md:text-base text-xs">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white  lg:max-w-64 p-2 rounded-2xl lg:max-h-96 max-h-24 md:max-h-40  lg:overflow-auto justify-center pt-5 flex md:flex-col">
                <div className="flex flex-col md:flex-row gap-3 justify-center items-center mb-3 p-3">
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
                <p className="text-black lg:p-3 md:text-base text-xs">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="client-prev absolute left-4 bottom-1/5 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button className="client-next absolute right-4 bottom-1/5 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </>
  );
}

export default Page;
