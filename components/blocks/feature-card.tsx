import Image from "next/image";
import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  className?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  className,
  ctaText,
  ctaHref,
  onCtaClick,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-row bg-background overflow-clip rounded-xl border border-border md:gap-6 lg:gap-8",
        imagePosition === "right" ? "flex-row-reverse" : "",
        className
      )}
    >
      <div className="w-full max-w-[600px] relative md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[24rem] bottom-[-36px] border-l border-t border-border rounded-tl-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain object-right"
        />
      </div>
      <div className="w-full flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <Text variant="h3" className="mb-3 md:mb-4 lg:mb-6">
          {title}
        </Text>
        <Text variant="body-large" color="muted" className="mb-6">
          {description}
        </Text>
        {ctaText && (
          <div>
            <Button
              variant="secondary"
              size="xl"
              onClick={onCtaClick}
              asChild={!!ctaHref}
            >
              {ctaHref ? (
                <a href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="size-4" />
                </a>
              ) : (
                <>
                  {ctaText}
                  <ArrowRight className="size-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export { FeatureCard };
