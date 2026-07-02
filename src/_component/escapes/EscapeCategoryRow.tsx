"use client";

import Image from "next/image";
import { Allura, Lato } from "next/font/google";
import GlassCard from "@/_component/ui/GlassCard";
import type { EscapeCategory } from "./types";
import { normalizeImageSrc } from "./types";

const AlluraFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

type EscapeCategoryRowProps = {
  escape: EscapeCategory;
  index: number;
};

export default function EscapeCategoryRow({
  escape,
  index,
}: EscapeCategoryRowProps) {
  const isReversed = index % 2 === 1;
  const aosAnimation = isReversed ? "fade-left" : "fade-right";

  return (
    <article
      data-aos={aosAnimation}
      className="section-container my-12 md:my-16"
      aria-labelledby={`escape-category-${escape.id}`}
    >
      <div
        className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
          isReversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <GlassCard hover padding="lg" className="flex flex-col gap-4">
          <h2
            id={`escape-category-${escape.id}`}
            className={`text-3xl text-kemet-gold ${AlluraFont.className}`}
          >
            {escape.name}
          </h2>
          <p className={`text-lg leading-relaxed text-kemet-muted ${LatoFont.className}`}>
            {escape.discrption}
          </p>
          <ul className="flex flex-col gap-3">
            {escape.packages.map((pkg) => (
              <li
                key={pkg.id}
                className="rounded-xl border border-white/8 bg-white/5 p-3 text-sm leading-relaxed"
              >
                <span className="font-bold text-kemet-gold">{pkg.name}</span>
                {pkg.details}
              </li>
            ))}
          </ul>
        </GlassCard>

        <div
          className={`relative w-full overflow-hidden rounded-2xl shadow-gold ${
            isReversed
              ? "aspect-[4/3] md:aspect-auto md:h-96 md:max-w-56 md:justify-self-end"
              : "aspect-[4/3] md:aspect-auto md:min-h-96"
          }`}
        >
          <Image
            src={normalizeImageSrc(escape.img)}
            alt={escape.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kemet-navy/40 to-transparent" />
        </div>
      </div>
    </article>
  );
}
