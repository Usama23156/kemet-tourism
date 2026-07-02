"use client";

import { useEffect } from "react";
import { Cinzel } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { escapesData } from "@/data/data";
import EscapesHero from "./EscapesHero";
import EscapeCategoryRow from "./EscapeCategoryRow";
import EscapesCarousel from "./EscapesCarousel";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
});

export default function EscapesPageContent() {
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
    <main className="overflow-x-hidden pb-10">
      <EscapesHero />

      <section aria-label="Escape categories">
        {escapesData.map((escape, index) => (
          <EscapeCategoryRow key={escape.id} escape={escape} index={index} />
        ))}
      </section>

      <h2
        data-aos="fade-up"
        className={`px-4 pb-9 text-center text-2xl sm:text-3xl md:text-4xl ${CinzelFont.className}`}
      >
        Discover Egypt like never before ...
      </h2>

      <EscapesCarousel />
    </main>
  );
}
