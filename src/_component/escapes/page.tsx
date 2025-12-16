"use client";
import { escapesData } from "../../data/data";
import { Allura } from "next/font/google";
import { Lato } from "next/font/google";
import { Cinzel } from "next/font/google";
import { OurEscapes } from "@/data/data";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/app/globals.css";

const AlluraFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bokor",
});
const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bokor",
});
const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bokor",
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
      <div className="flex justify-center items-center pt-6 gap-x-3 relative">
        <h3
          data-aos="fade-right"
          className={`pt-9 text-3xl md:text-4xl lg:text-5xl ${CinzelFont.className}`}
        >
          Escape the Ordinary
        </h3>
         <svg
                className="absolute lg:right-80 nectar-scribble circle md:w-80 w-44 right-5 top-11 md:top-0"
                viewBox="0 0 800 350"
                preserveAspectRatio="none"
            >
                <path
                    className="animate-path.done" // Add animation class here
                    transform="matrix(0.9791300296783447,0,0,0.9791300296783447,400,179)"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    pathLength="1"
                    strokeMiterlimit="4"
                    stroke="#b49e09"
                    strokeOpacity="1"
                    strokeWidth="8"
                    d="M253,-161 C253,-161 -284.78900146484375,-201.4600067138672 -376,-21 C-469,163 67.62300109863281,174.2100067138672 256,121 C564,34 250.82899475097656,-141.6929931640625 19.10700035095215,-116.93599700927734"
                />
            </svg>
      </div>
      <div>
        {escapesData.map((escape, index) => (
          <div
            key={escape.id}
            className={`max-w-5xl md:flex gap-4 mx-auto my-10 p-4 `}
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative md:flex md:justify-start pt-8 pb-8">
                  <div className="absolute md:static z-10 top-14 left-1 md:left-0 w-full h-full">
                    <h4
                      className={`text-3xl pb-0 text-[#b49e09] ${AlluraFont.className}`}
                    >
                      {escape.name}
                    </h4>
                    <p className={`text-2xl pb-9 ${LatoFont.className}`}>
                      {escape.discrption}
                    </p>
                    <div>
                      {escape.packages.map((pkg, pkgIndex) => (
                        <div key={pkgIndex}>
                          <h5 className="pb-2">
                            <span className="font-bold text-[#b49e09] cursor-pointer">
                              {pkg.name}
                            </span>
                            {pkg.details}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                  <img
                    src={escape.img}
                    alt={escape.name}
                    className="rounded-2xl md:w-56 w-full [mask-image:linear-gradient(to_top,blue_50%,transparent)] md:[mask-image:linear-gradient(to_left,blue_50%,transparent)] "
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative md:flex md:justify-end pb-8 pt-8">
                  <img
                    src={escape.img}
                    alt={escape.name}
                    className="rounded-2xl md:w-56 w-full [mask-image:linear-gradient(to_top,blue_50%,transparent)] md:[mask-image:linear-gradient(to_right,blue_50%,transparent)] "
                  />
                  <div className=" absolute md:static top-16 md:top-0 z-10 ">
                    <h4
                      className={`text-3xl pb-0 text-[#b49e09]  ${AlluraFont.className}`}
                    >
                      {escape.name}
                      
                    </h4>
                    <p className={`text-2xl pb-9 ${LatoFont.className}`}>
                      {escape.discrption}
                    </p>
                    <div>
                      {escape.packages.map((pkg, pkgIndex) => (
                        <div key={pkgIndex}>
                          <h5 className="pb-2">
                            <span className="font-bold text-[#b49e09] cursor-pointer">
                              {pkg.name}
                            </span>
                            {pkg.details}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <h4 data-aos="fade-up" className="md:text-4xl text-2xl text-center pb-9">
        Discover Egypt like never before ...
      </h4>
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
        style={{ backgroundImage: `url(/our-client.JPG)`}}
        className="flex justify-center items-center w-full lg:w-full md:max-w-5xl mb-6  bg-no-repeat bg-cover  bg-center rounded-3xl "
      >
        {Escapes.map((escape) => (
          <SwiperSlide key={escape.id}>
            <div className="flex justify-center items-center w-full h-full py-4 md:px-2 ">
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center items-center gap-y-6 border-1 border-[#b49e09] w-[90%] md:w-full rounded-3xl pb-3 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col justify-center items-center gap-y-3 relative  hover:opacity-100">
                  <img
                    src={escape.img[0]}
                    alt=""
                    className="lg:max-w-64 md:max-w-80 rounded-2xl rounded-b-none max-w-96"
                  />
                  <div className="max-w-md flex flex-col left-6 gap-y-3 absolute bottom-0 w-full py-3">
                    <h3 className="md:text-sm text-2xl font-bold">
                      {escape.name}
                    </h3>
                    <p className="md:text-sm text-2xl font-bold">
                      {escape.price}
                    </p>
                  </div>
                </div>
                {escape.features.map((feature, index) => (
                  <p
                    key={index}
                    className={` lg:text-sm font-bold text-2xl h-3 lg:h-0  ${CinzelFont.className} `}
                  >
                    {feature}
                  </p>
                ))}
                <Link href={`/Escapes/EscapesDetails?id=${escape.id}`}>
                  <button className="text-[#b49e09] bg-white px-16 md:px-10 py-1.5 rounded-4xl border-white border-4 hover:border-4 hover:border-[#a8870a] transition-colors duration-300 text-xl cursor-pointer mt-3">
                    VIEW DETAILS
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
