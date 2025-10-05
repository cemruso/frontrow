"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BrushCleaning,
  Clock,
  CodeXml,
  Plug2,
  Snowflake,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";

const Feature1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Plug & Play",
      description:
        "Ready to use components that work out of the box with no configuration ",
      icon: Plug2,
    },
    {
      title: "Customizable",
      description:
        "Fully customizable components with clean, maintainable code structure",
      icon: CodeXml,
    },
    {
      title: "Design Control",
      description:
        "Complete control over styling and animations with modern  patterns",
      icon: Snowflake,
    },
    {
      title: "Regular Updates",
      description:
        "Continuously updated with new features, improvements and fixes",
      icon: Clock,
    },
    {
      title: "Clean Code",
      description:
        "Well-structured, readable code following industry best practices",
      icon: BrushCleaning,
    },
    {
      title: "Performance",
      description:
        "Optimized for speed and efficiency without compromising functionality",
      icon: Zap,
    },
  ];

  return (
    <section className="overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <Text variant="overline" className="rounded-full bg-muted px-4 py-1">
          Examples
        </Text>
        <Text
          variant="display-3"
          className="relative z-20 py-2 text-center md:py-7"
        >
          The Ultimate Block Toolkit
        </Text>
        <Text
          variant="body-large"
          color="muted"
          align="center"
          className="mx-auto max-w-xl"
        >
          Perfectly balanced between performance and customization.
        </Text>

        <div className="relative mt-10 grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative block h-full w-full p-2"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {hoveredIndex === idx && (
                  <motion.span
                    className="bg-muted-foreground/20 absolute inset-0 block h-full w-full rounded-2xl"
                    layoutId="hoverBackground"
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                className="flex flex-col items-center justify-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature1 };

const Card = ({
  className,
  title,
  description,
  icon: Icon,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div
      className={cn(
        "bg-muted relative z-20 flex h-full flex-col items-center justify-center gap-4 rounded-2xl p-5 text-center",
        className
      )}
    >
      <Icon className="text-muted-foreground mt-3 size-8 stroke-1" />
      <Text variant="h6">{title}</Text>
      <Text variant="body" align="center" color="muted">
        {description}
      </Text>
    </div>
  );
};
