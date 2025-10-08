import { Hero } from "@/components/blocks/hero";
import { Feature1 } from "@/components/blocks/feature1";
import { Feature2 } from "@/components/blocks/feature2";
import { Stats } from "@/components/blocks/stats";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature2 />
      <Feature1 />
      <Stats />
      <Testimonials />
    </main>
  );
}
