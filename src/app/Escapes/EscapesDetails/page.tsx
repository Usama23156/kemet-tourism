"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { OurEscapes } from "@/data/data"; // Assuming this exports your escape data
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "No ID";
  const [escapeData, setEscapeData] = useState({
    id: 0,
    img: [],
    name: "",
    price: "",
    features: [],
    discrption: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = OurEscapes.find((escape) => escape.id === parseInt(id));
    if (data) {
      setEscapeData(data as any);
    }
    setLoading(false);
  }, [id]);

  return (
    <>
      <div className="md:flex gap-20 px-[1.5rem] py-[4.5rem] justify-center items-center mt-10">
        {loading ? (
          <div className="h-[100vh] flex items-center justify-center">
            <p className="m-auto h-[100vh]">Loading...</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center lg:items-center gap-12 lg:gap-24 lg:p-12 mt-12">
            <div className="flex flex-col justify-center gap-6">
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
                data-aos="fade-up"
                className="hero-swiper text-center max-w-80 lg:max-w-2xl "
              >
                {escapeData.img.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Escape image ${index + 1}`}
                      className="rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h2 className="text-4xl font-bold mb-6 text-center">{escapeData.name}</h2>
            </div>
            <div className="max-w-lg px-6">
              <h3 className="text-2xl font-bold mb-6">Price: {escapeData.price}</h3>
              <ul className="list-disc list-inside mb-6 grid grid-cols-2 md:grid-cols-1">
                {escapeData.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <p className="mb-6">{escapeData.discrption}</p>
              <div className="flex justify-center items-center">
                <button className="text-[#b49e09] bg-white px-16 md:px-10 py-1.5 rounded-4xl border-white border-4 hover:border-4 hover:border-[#a8870a] transition-colors duration-300 text-xl cursor-pointer mt-3">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;