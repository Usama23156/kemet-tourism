"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { OurEscapes } from "@/data/data";
import { normalizeImageSrc, type EscapeItem } from "./types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
});

const escapes: EscapeItem[] = OurEscapes;

const EscapeCard = memo(function EscapeCard({ escape }: { escape: EscapeItem }) {
  const coverImage = normalizeImageSrc(escape.img[0] ?? "");

  return (
    <div
      data-aos="fade-right"
      className="flex h-full flex-col items-center justify-between gap-y-4 overflow-hidden rounded-3xl border border-[#b49e09] pb-3 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-105"
    >
      <div className="relative flex w-full flex-1 flex-col items-center opacity-90 hover:opacity-100">
        <Image
          src={coverImage}
          alt={escape.name}
          width={384}
          height={320}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 256px"
          className="w-full max-w-96 rounded-2xl rounded-b-none object-cover md:max-w-80 lg:max-w-64"
        />
        <div className="absolute bottom-0 left-0 flex w-full flex-col gap-y-1 px-4 py-3 sm:left-6">
          <h3 className="text-base font-bold sm:text-lg md:text-xl">
            {escape.name}
          </h3>
          <p className="text-sm font-bold text-[#b49e09] sm:text-base">
            {escape.price}
          </p>
        </div>
      </div>

      <ul
        className={`hidden w-full flex-col gap-1 px-4 text-center lg:flex ${CinzelFont.className}`}
        aria-label={`${escape.name} features`}
      >
        {escape.features.map((feature) => (
          <li key={feature} className="text-xs font-bold leading-tight">
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={`/Escapes/EscapesDetails?id=${escape.id}`}
        className="mt-auto shrink-0"
        aria-label={`View details for ${escape.name}`}
      >
        <span className="inline-block cursor-pointer rounded-4xl border-4 border-white bg-white px-10 py-1.5 text-base text-[#b49e09] transition-colors duration-300 hover:border-[#a8870a] sm:px-12 sm:text-lg md:px-10 md:text-xl">
          VIEW DETAILS
        </span>
      </Link>
    </div>
  );
});

export default function EscapesCarousel() {
  return (
    <section
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl px-4 sm:px-6"
      aria-labelledby="escapes-carousel-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url(/our-client.JPG)" }}
        aria-hidden
      />
      <h2 id="escapes-carousel-heading" className="sr-only">
        Featured escapes
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
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
        className="escapes-swiper mb-6 w-full py-4"
      >
        {escapes.map((escape) => (
          <SwiperSlide key={escape.id} className="!h-auto">
            <EscapeCard escape={escape} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
