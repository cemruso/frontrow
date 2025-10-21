import { FeatureCard } from "@/components/blocks/feature-card";
import { HeroTitle } from "@/components/blocks/hero-title";

const Feature2 = () => {
  return (
    <section id="how-it-works" className="py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <HeroTitle
          badge="How it Works"
          title="Get Started in Minutes"
          subtitle="Powerful tools and integrations to help you generate, manage, and convert leads at scale."
        />

        <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full">
          <FeatureCard
            title="We Source Your Ideal Leads"
            description="Our intelligent scraping engine analyzes company data across multiple sources to identify and validate your perfect prospects. We generate detailed ICPs and surface decision-makers who match your exact criteria."
            imageSrc="/img/features/feature-1.png"
            imageAlt="We Source Your Ideal Leads"
            ctaText="See How It Works"
            ctaHref="#"
          />
          <FeatureCard
            title="We Craft Hyper-Personalized Outreach"
            description="Every lead receives a uniquely tailored message. Our personalization engine analyzes prospect data, company context, and trigger events to generate compelling emails that resonate and drive responses."
            imageSrc="/img/features/feature-2.png"
            imageAlt="We Craft Hyper-Personalized Outreach"
            ctaText="View Examples"
            ctaHref="#"
          />
          <FeatureCard
            title="We Book Meetings on Autopilot"
            description="From send schedules to follow-ups and replies, we orchestrate your entire outreach campaign. Sit back while our automation engine fills your calendar with qualified meetings."
            imageSrc="/img/features/feature-3.png"
            imageAlt="We Book Meetings on Autopilot"
            ctaText="Get Started"
            ctaHref="#"
          />
        </div>
      </div>
    </section>
  );
};

export { Feature2 };
