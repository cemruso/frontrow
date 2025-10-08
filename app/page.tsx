import { Hero } from "@/components/blocks/hero";
import { Feature1 } from "@/components/blocks/feature1";
import { Feature2 } from "@/components/blocks/feature2";
import { Stats13 } from "@/components/blocks/stats2";
import { Testimonials } from "@/components/blocks/testimonials";
import { Faq } from "@/components/blocks/faq";
import { Testimonials2 } from "@/components/blocks/testimonials2";
import { Feature3 } from "@/components/blocks/feature3";
import { CTA } from "@/components/blocks/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature2 />
      <Feature1 />
      <Feature3 />
      <Testimonials2 />
      <Stats13 />
      {/* <Testimonials /> */}
      <CTA />
      <Faq />
    </main>
  );
}
