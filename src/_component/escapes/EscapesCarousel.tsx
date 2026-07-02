"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { OurEscapes } from "@/data/data";
import GlassCard from "@/_component/ui/GlassCard";
import { normalizeImageSrc, type EscapeItem } from "./types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const escapes: EscapeItem[] = OurEscapes;

const EscapeCard = memo(function EscapeCard({ escape }: { escape: EscapeItem }) {
  const coverImage = normalizeImageSrc(escape.img[0] ?? "");

  return (
    <GlassCard
      hover
      padding="sm"
      className="flex h-full flex-col overflow-hidden"
    >
      <div data-aos="fade-right" className="flex h-full flex-col">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
          <Image
            src={coverImage}
            alt={escape.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 256px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kemet-navy/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-base font-bold text-white sm:text-lg">
              {escape.name}
            </h3>
            <p className="text-sm font-semibold text-kemet-gold">{escape.price}</p>
          </div>
        </div>

        <ul
          className="mt-3 hidden flex-col gap-1 lg:flex"
          aria-label={`${escape.name} features`}
        >
          {escape.features.map((feature) => (
            <li key={feature} className="text-xs text-kemet-muted">
              • {feature}
            </li>
          ))}
        </ul>

        <Link
          href={`/Escapes/EscapesDetails?id=${escape.id}`}
          className="mt-4 block"
          aria-label={`View details for ${escape.name}`}
        >
          <span className="flex w-full items-center justify-center rounded-full border-2 border-white bg-white py-2 text-sm font-semibold text-kemet-gold transition-colors hover:border-kemet-gold">
            VIEW DETAILS
          </span>
        </Link>
      </div>
    </GlassCard>
  );
});

export default function EscapesCarousel() {
  return (
    <section
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl px-4 sm:px-6"
      aria-labelledby="escapes-carousel-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url(/our-client.JPG)" }}
        aria-hidden
      />
      <h2 id="escapes-carousel-heading" className="sr-only">
        Featured escapes
      </h2>

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
          640: { slidesPerView: 3, spaceBetween: 12 },
          868: { slidesPerView: 4, spaceBetween: 16 },
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
