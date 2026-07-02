import Image from "next/image";
import { OurEscapes } from "@/data/data";
import SectionHeading from "@/_component/ui/SectionHeading";
import GlassCard from "@/_component/ui/GlassCard";
import Button from "@/_component/ui/Button";
import { normalizeImageSrc } from "@/_component/escapes/types";

export default function EscapsHome() {
  return (
    <section className="section-padding">
      <div className="section-container flex flex-col gap-10">
        <SectionHeading
          eyebrow="Curated journeys"
          title="Discover Egypt like never before"
          description="Handpicked escapes along the Nile and beyond — each designed for unforgettable moments."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {OurEscapes.map((escape, index) => (
            <GlassCard
              key={escape.id}
              hover
              padding="sm"
              className="group flex flex-col overflow-hidden"
            >
              <div
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="flex h-full flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={normalizeImageSrc(escape.img[0] ?? "")}
                    alt={escape.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kemet-navy/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {escape.name}
                    </h3>
                    <p className="text-sm font-semibold text-kemet-gold">
                      {escape.price}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 hidden flex-1 flex-col gap-1 lg:flex">
                  {escape.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-kemet-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-kemet-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Button
                    href={`/Escapes/EscapesDetails?id=${escape.id}`}
                    variant="secondary"
                    size="sm"
                    className="w-full"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button href="/Escapes" variant="outline" size="lg">
            View All Escapes
          </Button>
        </div>
      </div>
    </section>
  );
}
