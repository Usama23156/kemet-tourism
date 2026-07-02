"use client";

import { useAos } from "@/lib/useAos";
import { escapesData } from "@/data/data";
import SectionHeading from "@/_component/ui/SectionHeading";
import EscapesHero from "./EscapesHero";
import EscapeCategoryRow from "./EscapeCategoryRow";
import EscapesCarousel from "./EscapesCarousel";

export default function EscapesPageContent() {
  useAos();

  return (
    <main className="mesh-bg overflow-x-hidden pb-16 pt-20">
      <EscapesHero />

      <section aria-label="Escape categories" className="section-padding pt-8">
        {escapesData.map((escape, index) => (
          <EscapeCategoryRow key={escape.id} escape={escape} index={index} />
        ))}
      </section>

      <div className="section-container pb-8">
        <SectionHeading
          eyebrow="Featured packages"
          title="Discover Egypt like never before"
          className="mb-8"
        />
      </div>

      <EscapesCarousel />
    </main>
  );
}
