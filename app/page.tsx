import { Hero } from "@/components/blocks/hero";
import { Feature1 } from "@/components/blocks/feature1";
import { FeatureCard } from "@/components/blocks/feature-card";
import { Logos7 } from "@/components/blocks/logos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos7 />
      <Feature1 />
      <section className="py-32">
        <div className="container flex flex-col gap-6 lg:px-16 max-w-7xl mx-auto">
          <FeatureCard
            title="AI-Powered Lead Generation"
            description="Leverage advanced AI algorithms to identify and qualify high-quality leads automatically. Save time and increase conversion rates with intelligent targeting."
            imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            imageAlt="AI-Powered Lead Generation"
            imagePosition="left"
          />
          <FeatureCard
            title="Seamless CRM Integration"
            description="Connect with your existing tools effortlessly. Our platform integrates with all major CRM systems to streamline your workflow and keep your data synchronized."
            imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
            imageAlt="Seamless CRM Integration"
            imagePosition="right"
          />
          <FeatureCard
            title="Real-Time Analytics"
            description="Track your campaign performance with comprehensive analytics and insights. Make data-driven decisions to optimize your lead generation strategy."
            imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            imageAlt="Real-Time Analytics"
            imagePosition="left"
          />
        </div>
      </section>
    </main>
  );
}
