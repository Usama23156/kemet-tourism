import Image from "next/image";
import { Cinzel } from "next/font/google";
import Button from "@/_component/ui/Button";
import SectionHeading from "@/_component/ui/SectionHeading";
import GlassCard from "@/_component/ui/GlassCard";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Welcome() {
  return (
    <section className="mesh-bg section-padding">
      <div className="section-container">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col gap-6">
            <SectionHeading
              eyebrow="Who we are"
              title="Travel made easy"
              align="left"
              titleAs="h2"
            />
            <p
              data-aos="fade-up"
              className="text-base leading-relaxed text-kemet-muted lg:text-lg"
            >
              Born from the heart of Egypt, Kemet Escapes designs journeys with
              soul. We are local experts who live the land we share — its
              rhythms, its secrets, its spirit.
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button variant="primary" size="md">
                Latest Promos
              </Button>
              <Button href="/Escapes" variant="secondary" size="md">
                Our Offerings
              </Button>
            </div>
          </div>

          <div data-aos="fade-left" className="relative w-full flex-1">
            <GlassCard hover padding="sm" className="overflow-hidden">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/welcome.jpg"
                  alt="Travellers enjoying an Egyptian landscape"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </GlassCard>
            <div
              className={`glass-panel absolute -bottom-4 -left-4 rounded-xl px-5 py-3 shadow-gold ${CinzelFont.className}`}
              aria-hidden
            >
              <p className="text-xs uppercase tracking-widest text-kemet-gold">
                Since
              </p>
              <p className="text-2xl font-semibold text-white">Kemet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
