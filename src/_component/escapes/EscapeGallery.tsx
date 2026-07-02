"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { normalizeImageSrc } from "@/_component/escapes/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type EscapeGalleryProps = {
  images: string[];
  name: string;
};

export default function EscapeGallery({ images, name }: EscapeGalleryProps) {
  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/3] w-full max-w-2xl items-center justify-center rounded-2xl bg-white/5">
        <p className="text-sm text-foreground/60">No images available</p>
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="escape-details-swiper w-full max-w-80 lg:max-w-2xl"
      aria-label={`${name} photo gallery`}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`${image}-${index}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={normalizeImageSrc(image)}
              alt={`${name} — image ${index + 1} of ${images.length}`}
              fill
              sizes="(max-width: 1024px) 80vw, 672px"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
