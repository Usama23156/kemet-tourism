"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Cinzel } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { whyKemetReasons } from "@/_component/about/aboutContent";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bokor",
});

export default function AboutPage() {
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
    <main className="overflow-x-hidden pb-10 pt-28">
      {/* Hero */}
      <section
        className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6"
        aria-labelledby="about-heading"
      >
        <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
          <Image
            src="/our-client.JPG"
            alt="Travellers exploring Egypt with Kemet Escapes"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center sm:gap-3">
            <h1
              id="about-heading"
              data-aos="fade-up"
              className={`text-3xl font-semibold text-white sm:text-4xl md:text-5xl ${CinzelFont.className}`}
            >
              About Kemet
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm"
            >
              We can do more for you
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 md:max-w-4xl">
        <p
          data-aos="fade-up"
          className="text-sm leading-6 text-foreground/90 sm:text-base"
        >
          Kemet Escapes is a premier travel agency dedicated to crafting
          remarkable journeys across the captivating land of Egypt. Our passion
          for exploration and commitment to excellence guide us in designing
          bespoke itineraries that reveal the rich heritage and stunning
          landscapes of this ancient land.
        </p>

        <blockquote
          data-aos="fade-up"
          className={`mt-8 text-xl font-semibold leading-snug sm:mt-10 sm:text-2xl md:ml-10 md:max-w-2xl lg:text-[32px] lg:leading-[38.4px] ${CinzelFont.className}`}
        >
          Where ancient wonder meets timeless hospitality — your journey through
          Egypt begins with us.
        </blockquote>

        <p
          data-aos="fade-up"
          className="mt-8 text-sm leading-6 text-foreground/90 sm:mt-10 sm:text-base md:ml-10"
        >
          Choose Kemet Escapes for a memorable journey that captures the essence
          of Egypt. Let us guide you through this timeless land, creating
          experiences and memories that will stay with you forever.
        </p>
      </section>

      {/* Image + highlight card */}
      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:pt-12">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div
            data-aos="fade-right"
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:max-w-[45%]"
          >
            <Image
              src="/welcome.jpg"
              alt="Welcoming travel experience with Kemet Escapes"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex items-center justify-center rounded-2xl border border-[#b49e09] lg:max-w-[55%] lg:flex-1"
          >
            <p className="px-5 py-6 text-base font-bold leading-6 sm:px-7 sm:py-8 sm:text-lg">
              Our team consists of experienced professionals with a profound
              understanding of Egypt&apos;s history, culture, and natural beauty.
              We offer a range of travel experiences, from iconic landmarks to
              serene retreats, catering to a variety of interests. Whether
              you&apos;re seeking adventure, tranquillity, or a cultural deep
              dive, Kemet Escapes promises a journey marked by authenticity and
              warm hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Why Kemet */}
      <section
        className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 md:max-w-4xl"
        aria-labelledby="why-kemet-heading"
      >
        <p
          data-aos="fade-up"
          className="text-base leading-6 text-foreground/80 md:pl-10"
        >
          Kemet Escapes Team
        </p>

        <h2
          id="why-kemet-heading"
          data-aos="fade-up"
          className={`mt-4 text-2xl font-semibold sm:text-[28px] sm:leading-[33.6px] md:pl-10 ${CinzelFont.className}`}
        >
          Why Kemet?
        </h2>

        <p
          data-aos="fade-up"
          className="mt-5 text-sm leading-6 text-foreground/90 md:pl-10 md:pr-14"
        >
          Choosing Kemet Escapes means embarking on a thoughtfully curated
          journey through Egypt&apos;s wonders. Our name, &ldquo;Kemet,&rdquo;
          harks back to the ancient Egyptian term for their homeland, symbolising
          the fertile land along the Nile and the deep cultural roots of this
          storied country.
        </p>

        <ol className="mt-6 flex list-none flex-col gap-5 md:pl-10">
          {whyKemetReasons.map((reason, index) => (
            <li
              key={reason.title}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="text-sm leading-6 text-foreground/90 md:pr-12"
            >
              <span className="font-semibold text-[#b49e09]">
                {index + 1}. {reason.title}:
              </span>{" "}
              {reason.description}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
