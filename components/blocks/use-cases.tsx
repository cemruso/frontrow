import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="bg-muted absolute -left-[12.5px] top-4 h-[1.5px] w-[110%] md:-left-20" />
    <div className="bg-muted absolute -left-[12.5px] bottom-4 h-[1.5px] w-[110%] md:-left-20" />
    {children}
  </div>
);

interface UseCaseCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  step?: string;
  href?: string;
  buttonLocation?: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  children,
  className,
  step,
  href,
  buttonLocation,
}) => {
  const cardContent = (
    <div
      className={cn(
        "bg-black-3 overflow-hidden dark:bg-white-3 border group relative flex h-full min-h-80 sm:min-h-[500px] w-full flex-col justify-between text-ellipsis rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-transform duration-200 ease-out hover:scale-[1.02]",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        {step && (
          <div className="flex items-center justify-between">
            <Text variant="h4">{step}</Text>
          </div>
        )}
        <div className="flex w-full flex-col space-y-2">
          <Text variant="h5" className="transition-all ease-in-out">
            {title}
          </Text>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center gap-2 font-medium text-chart-blue">
          <div>Learn more</div>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
      <div className="mt-6 flex w-full flex-1 [&_.overflow-hidden]:transition-transform [&_.overflow-hidden]:duration-300 [&_.overflow-hidden]:ease-in-out group-hover:[&_.overflow-hidden]:scale-105 group-hover:[&_.overflow-hidden]:rotate-1 [&_.rounded-2xl:has(img)]:transition-transform [&_.rounded-2xl:has(img)]:duration-300 [&_.rounded-2xl:has(img)]:ease-in-out group-hover:[&_.rounded-2xl:has(img)]:scale-105 group-hover:[&_.rounded-2xl:has(img)]:rotate-1">
        {children}
      </div>
    </div>
  );

  // If href is provided, wrap with link
  if (href) {
    return (
      <a
        href={href}
        className="block w-full h-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  // Otherwise, return the card without link wrapper
  return cardContent;
};

// Wrapped version with dotted lines
export const UseCaseCardWithDots: React.FC<
  UseCaseCardProps & { wrapperClassName?: string }
> = ({
  title,
  description,
  children,
  className,
  step,
  wrapperClassName,
  href,
  buttonLocation,
}) => {
  return (
    <DottedDiv
      className={cn("mt-8 w-full px-2 py-8 sm:py-10", wrapperClassName)}
    >
      <UseCaseCard
        title={title}
        description={description}
        step={step}
        className={className}
        href={href}
        buttonLocation={buttonLocation}
      >
        {children}
      </UseCaseCard>
    </DottedDiv>
  );
};

interface UseCase {
  title: string;
  description: string;
  imageSrc: string;
}

const useCases: UseCase[] = [
  {
    title: "AI Written Emails",
    description:
      "Two stage LLM approach selects relevant data points then writes plain text emails anchored to those facts",
    imageSrc: "/img/features/feature-1.png",
  },
  {
    title: "2x Deliverability",
    description:
      "Email verification, timezone scheduling, safe daily limits, and Google/Outlook integration landing in primary inbox",
    imageSrc: "/img/features/feature-2.png",
  },
  {
    title: "Lookalike Modeling",
    description:
      "Machine learning creates company lists that resemble your best customers with ICP refinement and duplicate suppression",
    imageSrc: "/img/features/feature-3.png",
  },
  {
    title: "Evidence-Based Research",
    description:
      "Context from approved sources mapped to each email field so personalization is always grounded in verifiable facts",
    imageSrc: "/img/features/feature-1.png",
  },
  {
    title: "Learning Loops",
    description:
      "Continuous analysis refines targeting and messaging while building lookalike campaigns from what works",
    imageSrc: "/img/features/feature-2.png",
  },
  {
    title: "Fully Managed Service",
    description:
      "Monthly engagement with end-to-end execution. You approve the strategy, we handle lists, writing, and delivery",
    imageSrc: "/img/features/feature-3.png",
  },
];

export const UseCaseGrid: React.FC = () => {
  return (
    <section className="py-8 sm:py-32 px-4 sm:px-0">
      <div className="container">
        <div className="flex w-full flex-col items-center justify-center mb-12 sm:mb-16">
          <Badge variant="outline">Core Features</Badge>
          <Text variant="h2" className="relative z-20 py-2 text-center md:py-7">
            What We Deliver
          </Text>
          <Text
            variant="body-large"
            color="muted"
            align="center"
            className="mx-auto max-w-xl"
          >
            From ICP design to hyper-personalized delivery. Every message backed
            by research, optimized for the primary inbox.
          </Text>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              href={process.env.NEXT_PUBLIC_APP_URL || "https://app.datapad.io"}
              buttonLocation={`use-case-grid-${useCase.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <div className="flex w-full flex-1 flex-col gap-4">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-[-42px] aspect-[4/4] w-full overflow-hidden rounded-2xl border border-input">
                    <Image
                      src={useCase.imageSrc}
                      alt={useCase.title}
                      fill
                      className="object-top object-cover"
                    />
                  </div>
                </div>
              </div>
            </UseCaseCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGrid;
