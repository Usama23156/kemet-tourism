"use client";

import { useEffect } from "react";
import { Cinzel } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import DestinationMap from "@/_component/destination/DestinationMap";
import DestinationCarousel from "@/_component/destination/DestinationCarousel";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bokor",
});

export default function DestinationPage() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      AOS.init({
        duration: prefersReducedMotion ? 0 : 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
        disable: prefersReducedMotion,
      });
    };

    initAOS();
  }, []);

  return (
    <main className="flex flex-col items-center overflow-x-hidden pt-28 pb-8">
      <section className="flex w-full flex-col items-center gap-y-6 px-4 sm:gap-y-8 sm:px-6">
        <h1
          data-aos="fade-up"
          className={`max-w-3xl text-center text-xl font-extrabold uppercase sm:text-2xl md:text-3xl lg:text-4xl ${CinzelFont.className}`}
        >
          The Nile carries more than water; it carries Egypt&apos;s soul.
        </h1>

        <DestinationMap />
      </section>

      <section className="mt-6 flex w-full justify-center sm:mt-8">
        <DestinationCarousel />
      </section>
    </main>
  );
}
