"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { OurDestination } from "@/data/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const destination = OurDestination;

const DestinationCard = memo(function DestinationCard({
  dest,
}: {
  dest: (typeof destination)[number];
}) {
  const temple = dest.temp[0];

  return (
    <div
      data-aos="fade-right"
      className="flex h-full flex-col items-center justify-between gap-y-4 overflow-hidden rounded-3xl pb-3 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-105"
    >
      <div className="relative flex w-full flex-1 flex-col items-center opacity-75 hover:opacity-100">
        {temple?.img && (
          <Image
            src={temple.img}
            alt={temple.name}
            width={384}
            height={320}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 256px"
            className="max-h-80 w-full max-w-96 rounded-2xl rounded-b-none object-cover md:max-w-80 lg:max-w-64"
          />
        )}
        <div className="absolute bottom-0 left-0 flex w-full max-w-md flex-col gap-y-2 px-4 py-3 sm:left-6 sm:px-0">
          <h3 className="text-base font-bold sm:text-lg md:text-xl">
            {temple?.name}
          </h3>
          <p className="line-clamp-2 text-sm font-bold sm:text-base md:text-sm">
            {temple?.info}
          </p>
        </div>
      </div>
      <Link
        href={`/Destination/DestinationDetails?id=${dest.id}`}
        className="mt-auto shrink-0"
      >
        <span className="inline-block cursor-pointer rounded-4xl border-4 border-white bg-white px-10 py-1.5 text-base text-[#b49e09] transition-colors duration-300 hover:border-[#a8870a] sm:px-12 sm:text-lg md:px-10 md:text-xl">
          VIEW DETAILS
        </span>
      </Link>
    </div>
  );
});

export default function DestinationCarousel() {
  return (
    <div className="w-full max-w-5xl px-4 sm:px-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          868: {
            slidesPerView: 4,
          },
        }}
        className="destination-swiper mb-6 w-full"
      >
        {destination.map((dest) => (
          <SwiperSlide key={dest.id} className="!h-auto">
            <DestinationCard dest={dest} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
