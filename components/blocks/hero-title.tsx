import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface HeroTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const HeroTitle = ({
  badge,
  title,
  subtitle,
  className,
}: HeroTitleProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center mb-12 sm:mb-16",
        className
      )}
    >
      {badge && <Badge variant="outline">{badge}</Badge>}
      <Text variant="h2" className="relative z-20 py-2 text-center md:py-7">
        {title}
      </Text>
      {subtitle && (
        <Text
          variant="body-large"
          color="muted"
          align="center"
          className="mx-auto max-w-xl"
        >
          {subtitle}
        </Text>
      )}
    </div>
  );
};

