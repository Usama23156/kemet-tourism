"use client";

import Image from "next/image";
import { Allura, Lato } from "next/font/google";
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

const imageMaskEven =
  "[mask-image:linear-gradient(to_top,black_50%,transparent)] md:[mask-image:linear-gradient(to_left,black_50%,transparent)]";

const imageMaskOdd =
  "[mask-image:linear-gradient(to_top,black_50%,transparent)] md:[mask-image:linear-gradient(to_right,black_50%,transparent)]";

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
      className="mx-auto my-10 max-w-5xl px-4 sm:px-6"
      aria-labelledby={`escape-category-${escape.id}`}
    >
      <div
        className={`grid items-center gap-8 md:grid-cols-2 md:gap-10 ${
          isReversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex flex-col gap-4">
          <h2
            id={`escape-category-${escape.id}`}
            className={`text-3xl text-[#b49e09] ${AlluraFont.className}`}
          >
            {escape.name}
          </h2>
          <p className={`text-lg leading-relaxed md:text-xl ${LatoFont.className}`}>
            {escape.discrption}
          </p>
          <ul className="flex flex-col gap-3">
            {escape.packages.map((pkg) => (
              <li key={pkg.id} className="text-sm leading-relaxed sm:text-base">
                <span className="font-bold text-[#b49e09]">{pkg.name}</span>
                {pkg.details}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`relative w-full overflow-hidden rounded-2xl ${
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
            className={`object-cover object-center ${isReversed ? imageMaskOdd : imageMaskEven}`}
          />
        </div>
      </div>
    </article>
  );
}
