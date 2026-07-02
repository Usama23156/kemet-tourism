"use client";

import Image from "next/image";
import { useAos } from "@/lib/useAos";
import SectionHeading from "@/_component/ui/SectionHeading";
import GlassCard from "@/_component/ui/GlassCard";
import { whyKemetReasons } from "@/_component/about/aboutContent";

export default function AboutPage() {
  useAos();

  return (
    <main className="overflow-x-hidden pb-12 pt-20">
      <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:h-96">
          <Image
            src="/our-client.JPG"
            alt="Travellers exploring Egypt with Kemet Escapes"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover object-center"
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <SectionHeading
              eyebrow="Our story"
              title="About Kemet"
              description="We can do more for you"
              titleAs="h1"
            />
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <div className="mx-auto max-w-3xl space-y-6">
          <p data-aos="fade-up" className="text-base leading-relaxed text-kemet-muted">
            Kemet Escapes is a premier travel agency dedicated to crafting
            remarkable journeys across the captivating land of Egypt. Our passion
            for exploration and commitment to excellence guide us in designing
            bespoke itineraries that reveal the rich heritage and stunning
            landscapes of this ancient land.
          </p>
          <blockquote
            data-aos="fade-up"
            className="gold-gradient-text border-l-2 border-kemet-gold pl-6 text-xl font-semibold leading-snug sm:text-2xl"
          >
            Where ancient wonder meets timeless hospitality — your journey
            through Egypt begins with us.
          </blockquote>
          <p data-aos="fade-up" className="text-base leading-relaxed text-kemet-muted">
            Choose Kemet Escapes for a memorable journey that captures the
            essence of Egypt. Let us guide you through this timeless land,
            creating experiences and memories that will stay with you forever.
          </p>
        </div>
      </section>

      <section className="section-container pb-16">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-10">
          <div
            data-aos="fade-right"
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:max-w-[45%]"
          >
            <Image
              src="/welcome.jpg"
              alt="Welcoming travel experience with Kemet Escapes"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div data-aos="fade-left" className="lg:flex-1">
            <GlassCard hover className="flex h-full items-center">
            <p className="text-base font-medium leading-relaxed sm:text-lg">
              Our team consists of experienced professionals with a profound
              understanding of Egypt&apos;s history, culture, and natural beauty.
              We offer a range of travel experiences, from iconic landmarks to
              serene retreats, catering to a variety of interests. Whether
              you&apos;re seeking adventure, tranquillity, or a cultural deep
              dive, Kemet Escapes promises a journey marked by authenticity and
              warm hospitality.
            </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section
        className="section-container mesh-bg rounded-3xl py-12"
        aria-labelledby="why-kemet-heading"
      >
        <SectionHeading
          eyebrow="Kemet Escapes Team"
          title="Why Kemet?"
          align="left"
          className="mb-8"
        />
        <p data-aos="fade-up" className="mb-8 max-w-3xl text-kemet-muted">
          Choosing Kemet Escapes means embarking on a thoughtfully curated
          journey through Egypt&apos;s wonders. Our name, &ldquo;Kemet,&rdquo;
          harks back to the ancient Egyptian term for their homeland.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyKemetReasons.map((reason, index) => (
            <GlassCard
              key={reason.title}
              hover
              padding="md"
              className="flex flex-col gap-2"
            >
              <div data-aos="fade-up" data-aos-delay={index * 60}>
                <span className="text-2xl font-bold text-kemet-gold/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-semibold text-kemet-gold">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kemet-muted">
                  {reason.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </main>
  );
}
