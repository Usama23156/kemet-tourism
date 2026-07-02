"use client";

import { Cinzel } from "next/font/google";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function EscapesHero() {
  return (
    <header className="section-container flex flex-wrap items-center justify-center gap-x-2 pt-8">
      <h1
        data-aos="fade-right"
        className={`flex flex-wrap items-center justify-center gap-x-2 text-3xl md:text-4xl lg:text-5xl ${CinzelFont.className}`}
      >
        <span>Escape the</span>
        <span className="relative">
          <span className="gold-gradient-text">Ordinary</span>
          <svg
            className="pointer-events-none absolute top-3 w-44 md:top-0 md:w-80"
            viewBox="0 0 800 350"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="animate-path"
              transform="matrix(0.9791300296783447,0,0,0.9791300296783447,400,179)"
              strokeLinejoin="miter"
              fillOpacity="0"
              pathLength="1"
              strokeMiterlimit="4"
              stroke="#b49e09"
              strokeOpacity="1"
              strokeWidth="8"
              d="M253,-161 C253,-161 -284.78900146484375,-201.4600067138672 -376,-21 C-469,163 67.62300109863281,174.2100067138672 256,121 C564,34 250.82899475097656,-141.6929931640625 19.10700035095215,-116.93599700927734"
            />
          </svg>
        </span>
      </h1>
    </header>
  );
}
