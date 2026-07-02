import Image from "next/image";
import GlassCard from "@/_component/ui/GlassCard";
import SectionHeading from "@/_component/ui/SectionHeading";

const contactInfo = [
  { label: "Telephone", value: "(123) 456-7890" },
  { label: "Mobile", value: "(123) 456-7890" },
  { label: "Email", value: "hello@reallygreatsite.com" },
];

const addressInfo = [
  "ST 12345",
  "Luxor City",
  "Egypt",
  "123 Anywhere St.",
];

export default function FooterHome() {
  return (
    <section className="section-padding mesh-bg">
      <div className="section-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="relative flex-1" data-aos="fade-right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-[3/2]">
              <Image
                src="/IMG_0947.jpg"
                alt="Plan your next trip to Egypt"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kemet-navy/80 via-kemet-navy/20 to-transparent" />
              <h2 className="absolute bottom-6 left-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Let&apos;s plan your next trip
              </h2>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6" data-aos="fade-left">
            <SectionHeading
              eyebrow="Get in touch"
              title="We're here to help"
              align="left"
              titleAs="h3"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard padding="md">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-kemet-gold">
                  Contact
                </h4>
                <ul className="flex flex-col gap-2">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="text-sm text-kemet-muted">
                      <span className="text-white/50">{item.label}: </span>
                      {item.value}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard padding="md">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-kemet-gold">
                  Address
                </h4>
                <ul className="flex flex-col gap-2">
                  {addressInfo.map((line) => (
                    <li key={line} className="text-sm text-kemet-muted">
                      {line}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
