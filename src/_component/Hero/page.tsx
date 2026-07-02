"use client";

import { Allura, Lato } from "next/font/google";
import Button from "@/_component/ui/Button";

const AlluraFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <video
        src="/Hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="hero-gradient absolute inset-0" aria-hidden />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p
          data-aos="fade-up"
          className={`mb-3 text-sm uppercase tracking-[0.4em] text-kemet-gold ${LatoFont.className}`}
        >
          Kemet Escapes
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className={`mb-4 max-w-4xl text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl ${AlluraFont.className}`}
        >
          Discover Authentic Egypt
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className={`mb-10 max-w-xl text-lg text-white/85 sm:text-xl ${LatoFont.className}`}
        >
          Luxury Escapes &amp; Tailor-Made Travel
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/Escapes" variant="primary" size="lg">
            Explore Escapes
          </Button>
          <Button href="/Destination" variant="outline" size="lg">
            View Destinations
          </Button>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-xs uppercase tracking-widest text-white/50">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-kemet-gold to-transparent animate-float" />
      </div>
    </section>
  );
}
