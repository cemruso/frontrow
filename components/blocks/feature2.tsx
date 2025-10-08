import { FeatureCard } from "@/components/blocks/feature-card";
import { Text } from "@/components/ui/text";

const Feature2 = () => {
  return (
    <section className="py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <Text variant="overline" className="rounded-full bg-muted px-4 py-1">
          Features
        </Text>
        <Text variant="h1" className="relative z-20 py-2 text-center md:py-7">
          Everything You Need to Scale
        </Text>
        <Text
          variant="body-large"
          color="muted"
          align="center"
          className="mx-auto max-w-xl mb-16"
        >
          Powerful tools and integrations to help you generate, manage, and
          convert leads at scale.
        </Text>

        <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full">
          <FeatureCard
            title="AI-Powered Lead Generation"
            description="Leverage advanced AI algorithms to identify and qualify high-quality leads automatically. Save time and increase conversion rates with intelligent targeting."
            imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            imageAlt="AI-Powered Lead Generation"
            imagePosition="left"
            ctaText="Learn More"
            ctaHref="#"
          />
          <FeatureCard
            title="Seamless CRM Integration"
            description="Connect with your existing tools effortlessly. Our platform integrates with all major CRM systems to streamline your workflow and keep your data synchronized."
            imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
            imageAlt="Seamless CRM Integration"
            imagePosition="right"
            ctaText="View Integrations"
            ctaHref="#"
          />
          <FeatureCard
            title="Real-Time Analytics"
            description="Track your campaign performance with comprehensive analytics and insights. Make data-driven decisions to optimize your lead generation strategy."
            imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            imageAlt="Real-Time Analytics"
            imagePosition="left"
            ctaText="See Analytics"
            ctaHref="#"
          />
        </div>
      </div>
    </section>
  );
};

export { Feature2 };
