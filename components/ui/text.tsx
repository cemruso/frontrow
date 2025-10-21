import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      // Heading variants (h1-h6)
      h1: [
        "font-mono",
        "text-5xl",
        "lg:text-6xl",
        "font-bold",
        "tracking-tight",
        "leading-tight",
        "uppercase",
        "word-spacing-tight",
      ],
      h2: [
        "font-mono",
        "text-4xl",
        "lg:text-5xl",
        "font-semibold",
        "tracking-tight",
        "leading-tight",
        "word-spacing-tight",
        "uppercase",
      ],
      h3: [
        "font-display",
        "text-3xl",
        "lg:text-4xl",
        "font-semibold",
        "tracking-tight",
        "leading-snug",
      ],
      h4: [
        "text-2xl",
        "lg:text-3xl",
        "font-semibold",
        "tracking-tight",
        "leading-snug",
      ],
      h5: [
        "text-xl",
        "lg:text-2xl",
        "font-semibold",
        "tracking-tight",
        "leading-normal",
      ],
      h6: [
        "text-lg",
        "lg:text-xl",
        "font-semibold",
        "tracking-tight",
        "leading-normal",
      ],
      // Body variants
      body: ["text-base"],
      "body-large": ["text-lg", "lg:text-xl"],
      "body-small": ["text-sm"],
      lead: ["text-xl", "lg:text-2xl"],
      // Utility variants
      badge: ["text-sm", "font-medium", "leading-none"],
      overline: [
        "text-xs",
        "font-medium",
        "uppercase",
        "tracking-wide",
        "leading-none",
      ],
      link: ["text-sm", "font-medium", "leading-none"],
      caption: ["text-xs", "font-medium"],
      muted: ["text-muted-foreground", "text-sm"],
      quote: [
        "text-xl",
        "italic",
        "leading-relaxed",
        "border-l-4",
        "border-primary",
        "pl-4",
        "lg:text-2xl",
      ],
      code: ["font-mono", "text-sm", "bg-muted", "px-1.5", "py-0.5", "rounded"],
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      accent: "text-accent-foreground",
      destructive: "text-destructive",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
    align: "left",
  },
});

function Text({
  className,
  variant,
  color,
  align,
  asChild = false,
  as,
  children,
  ...props
}: {
  as?: React.ElementType;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
} & VariantProps<typeof textVariants>) {
  const Comp = asChild
    ? Slot
    : ((as || getDefaultElement(variant)) as React.ElementType);

  return (
    <Comp
      className={cn(textVariants({ variant, color, align, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
}
Text.displayName = "Text";

// Helper function to determine default HTML element based on variant
function getDefaultElement(
  variant: VariantProps<typeof textVariants>["variant"]
): React.ElementType {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "lead":
    case "body":
    case "body-large":
    case "body-small":
    case "muted":
      return "p";
    case "quote":
      return "blockquote";
    case "code":
      return "code";
    case "badge":
    case "overline":
    case "caption":
      return "span";
    case "link":
      return "a";
    default:
      return "p";
  }
}

export { Text, textVariants };
export type TextProps = React.ComponentProps<typeof Text>;
