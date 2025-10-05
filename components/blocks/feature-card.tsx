import Image from "next/image";
import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col overflow-clip rounded-xl border border-border md:grid md:grid-cols-2 md:gap-6 lg:gap-8",
        imagePosition === "right" ? "md:flex-row-reverse" : "",
        className
      )}
    >
      <div className="relative md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <Text variant="h5" className="mb-3 md:mb-4 lg:mb-6">
          {title}
        </Text>
        <Text variant="body-large" color="muted">
          {description}
        </Text>
      </div>
    </div>
  );
};

export { FeatureCard };
