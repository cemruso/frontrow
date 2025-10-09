"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Inbox, Sparkles, Target, TrendingUp, Zap, Users2 } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { HeroTitle } from "@/components/blocks/hero-title";

const Feature1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "2x Primary Inbox Delivery",
      description:
        "We perform at twice the market rate. Every email lands in the primary inbox through verified infrastructure, timezone scheduling, and safe daily limits",
      icon: Inbox,
    },
    {
      title: "Hyper-Personalization at Scale",
      description:
        "Enterprise LLM stack writes one-to-one emails grounded in verified research. Every message is tailored to each recipient with evidence-backed facts",
      icon: Sparkles,
    },
    {
      title: "Fully Managed Outbound",
      description:
        "You don't build lists or write emails. We handle everything from ICP design to execution while you focus on closing deals",
      icon: Users2,
    },
    {
      title: "AI-Powered Lookalike Modeling",
      description:
        "Machine learning finds companies that match your best customers. ICP refinement and audience intelligence that gets smarter with every campaign",
      icon: Target,
    },
    {
      title: "Continuous Learning Loops",
      description:
        "Outcomes drive everything. ICP refinement, messaging updates, and lookalike campaigns compound results month after month",
      icon: TrendingUp,
    },
    {
      title: "Days to First Campaign",
      description:
        "From discovery to execution in days not weeks. Fast time to value with workflows that accelerate while respecting your controls",
      icon: Zap,
    },
  ];

  return (
    <section className="overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <HeroTitle
          badge="Different Kind of Outbound"
          title="Our Promise is Big"
          subtitle="Automation by default with clear approvals. Hyper-personalization grounded in verified sources. Deliverability and clarity over tricks and noise."
        />

        <div className="relative grid w-full container grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
        "border boder-border bg-background relative z-20 flex h-full min-h-[250px] flex-col items-start justify-between rounded-2xl p-6",
        className
      )}
    >
      <Icon className="size-6" />
      <div className="flex flex-col gap-2">
        <Text variant="h6" className="text-lg">
          {title}
        </Text>
        <Text variant="body" color="muted" className="line-clamp-2">
          {description}
        </Text>
      </div>
    </div>
  );
};
