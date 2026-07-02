"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Cinzel } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { OurEscapes } from "@/data/data";
import EscapeGallery from "@/_component/escapes/EscapeGallery";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
});

export default function EscapesDetailsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const escapeData = useMemo(() => {
    if (!id) return null;
    return OurEscapes.find((escape) => escape.id === parseInt(id, 10)) ?? null;
  }, [id]);

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

  if (!id) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 pt-28">
        <p>No escape selected.</p>
        <Link
          href="/Escapes"
          className="text-[#b49e09] underline underline-offset-4"
        >
          Browse all escapes
        </Link>
      </main>
    );
  }

  if (!escapeData) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 pt-28">
        <p>Escape not found.</p>
        <Link
          href="/Escapes"
          className="text-[#b49e09] underline underline-offset-4"
        >
          Browse all escapes
        </Link>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden px-4 pb-12 pt-28 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16 lg:py-8">
        <section
          className="flex w-full flex-col items-center gap-6 lg:w-1/2"
          aria-labelledby="escape-title"
        >
          <div data-aos="fade-up" className="w-full">
            <EscapeGallery images={escapeData.img} name={escapeData.name} />
          </div>
          <h1
            id="escape-title"
            data-aos="fade-up"
            className={`text-center text-3xl font-bold sm:text-4xl ${CinzelFont.className}`}
          >
            {escapeData.name}
          </h1>
        </section>

        <section
          className="w-full max-w-lg lg:w-1/2"
          aria-labelledby="escape-details-heading"
        >
          <h2 id="escape-details-heading" className="sr-only">
            Escape details
          </h2>

          <p
            data-aos="fade-up"
            className="mb-6 text-xl font-bold text-[#b49e09] sm:text-2xl"
          >
            Price: {escapeData.price}
          </p>

          <div data-aos="fade-up" className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">What&apos;s included</h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {escapeData.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm leading-relaxed sm:text-base"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b49e09]"
                    aria-hidden
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            data-aos="fade-up"
            className="mb-8 text-sm leading-relaxed text-foreground/90 sm:text-base"
          >
            {escapeData.discrption}
          </p>

          <div
            data-aos="fade-up"
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
          >
            <button
              type="button"
              className="cursor-pointer rounded-4xl border-4 border-white bg-white px-12 py-1.5 text-lg text-[#b49e09] transition-colors duration-300 hover:border-[#a8870a] sm:px-16 sm:text-xl"
            >
              BOOK NOW
            </button>
            <Link
              href="/Escapes"
              className="text-sm text-[#b49e09] underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              Back to all escapes
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
