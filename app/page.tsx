import { Hero } from "@/components/blocks/hero";
import { Feature1 } from "@/components/blocks/feature1";
import { Feature2 } from "@/components/blocks/feature2";
import { Stats13 } from "@/components/blocks/stats2";
import { Testimonials } from "@/components/blocks/testimonials";
import { Faq } from "@/components/blocks/faq";
import { Testimonials2 } from "@/components/blocks/testimonials2";
import { Feature3 } from "@/components/blocks/feature3";
import { CTA } from "@/components/blocks/cta";
import { UseCaseGrid } from "@/components/blocks/use-cases";
import { WorldMapSection } from "@/components/blocks/world-map-section";

export default function Home() {
  return (
    <main className="bg-base-50">
      <Hero />
      <Feature3 />
      <Feature2 />
      <Feature1 />
      <UseCaseGrid />
      <Testimonials2 />
      <Stats13 />
      {/* <Testimonials /> */}
      <WorldMapSection />
      <CTA />
      <Faq />
    </main>
  );
}
