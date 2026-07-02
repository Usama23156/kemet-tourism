import { Cinzel } from "next/font/google";
import { type ReactNode } from "react";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
});

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleAs: TitleTag = "h2",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-kemet-gold">
          {eyebrow}
        </span>
      )}
      <TitleTag
        className={`text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl ${CinzelFont.className}`}
      >
        {title}
      </TitleTag>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-kemet-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
