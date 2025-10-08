"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BrushCleaning,
  Clock,
  CodeXml,
  Plug2,
  Snowflake,
  Zap,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";

const Feature1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Instant Setup",
      description:
        "Get started in minutes with our plug-and-play lead generation platform",
      icon: Plug2,
    },
    {
      title: "Customizable Campaigns",
      description:
        "Tailor your outreach strategies to match your unique business needs",
      icon: CodeXml,
    },
    {
      title: "Brand Control",
      description:
        "Maintain complete control over your messaging and brand identity",
      icon: Snowflake,
    },
    {
      title: "Real-Time Sync",
      description:
        "Keep your CRM and lead data synchronized in real-time across all platforms",
      icon: Clock,
    },
    {
      title: "Clean Data",
      description:
        "High-quality, verified leads with accurate contact information",
      icon: BrushCleaning,
    },
    {
      title: "Fast Delivery",
      description:
        "Get qualified leads delivered quickly without compromising on quality",
      icon: Zap,
    },
    {
      title: "Precision Targeting",
      description:
        "Reach your ideal customers with advanced targeting and segmentation tools",
      icon: Target,
    },
    {
      title: "Scale with Confidence",
      description:
        "Grow your pipeline predictably with proven strategies that scale",
      icon: TrendingUp,
    },
    {
      title: "Dedicated Support",
      description:
        "Work with expert lead generation specialists who understand your goals",
      icon: Users,
    },
  ];

  return (
    <section className="overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <Badge variant="outline">Why Frontrow?</Badge>
        <Text variant="h2" className="relative z-20 py-2 text-center md:py-7">
          Built for Modern Sales Teams
        </Text>
        <Text
          variant="body-large"
          color="muted"
          align="center"
          className="mx-auto max-w-xl"
        >
          Everything you need to generate, qualify, and convert leads at scale.
        </Text>

        <div className="relative mt-10 grid w-full container grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
