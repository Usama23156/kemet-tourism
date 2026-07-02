"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Cinzel } from "next/font/google";
import { useAos } from "@/lib/useAos";
import { OurEscapes } from "@/data/data";
import EscapeGallery from "@/_component/escapes/EscapeGallery";
import GlassCard from "@/_component/ui/GlassCard";
import Button from "@/_component/ui/Button";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function EscapesDetailsPage() {
  useAos();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const escapeData = useMemo(() => {
    if (!id) return null;
    return OurEscapes.find((escape) => escape.id === parseInt(id, 10)) ?? null;
  }, [id]);

  if (!id || !escapeData) {
    return (
      <main className="mesh-bg flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 pt-28">
        <GlassCard padding="lg" className="text-center">
          <p className="mb-4 text-kemet-muted">
            {!id ? "No escape selected." : "Escape not found."}
          </p>
          <Button href="/Escapes" variant="outline">
            Browse all escapes
          </Button>
        </GlassCard>
      </main>
    );
  }

  return (
    <main className="mesh-bg overflow-x-hidden px-4 pb-16 pt-24 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:gap-16">
        <section
          className="w-full lg:w-1/2"
          aria-labelledby="escape-title"
        >
          <div data-aos="fade-up">
            <EscapeGallery images={escapeData.img} name={escapeData.name} />
          </div>
          <h1
            id="escape-title"
            data-aos="fade-up"
            className={`mt-6 text-center text-3xl font-bold sm:text-4xl lg:text-left ${CinzelFont.className}`}
          >
            {escapeData.name}
          </h1>
        </section>

        <section className="w-full lg:w-1/2" aria-labelledby="escape-details">
          <GlassCard padding="lg" className="flex flex-col gap-6">
            <div data-aos="fade-up">
              <p className="text-sm uppercase tracking-widest text-kemet-gold">
                Starting from
              </p>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {escapeData.price}
              </p>
            </div>

            <div data-aos="fade-up">
              <h2
                id="escape-details"
                className="mb-4 text-lg font-semibold text-white"
              >
                What&apos;s included
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {escapeData.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 rounded-lg border border-white/8 bg-white/5 p-3 text-sm text-kemet-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kemet-gold"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p
              data-aos="fade-up"
              className="text-sm leading-relaxed text-kemet-muted sm:text-base"
            >
              {escapeData.discrption}
            </p>

            <div
              data-aos="fade-up"
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button variant="secondary" size="lg">
                Book Now
              </Button>
              <Link
                href="/Escapes"
                className="text-center text-sm text-kemet-gold underline underline-offset-4 hover:opacity-80"
              >
                Back to all escapes
              </Link>
            </div>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}
