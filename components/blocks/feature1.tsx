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
      title: "Fully Managed",
      description:
        "You don't build lists or write emails. We deliver targeted outreach that learns and improves month after month",
      icon: Users,
    },
    {
      title: "Hyper-Personalization",
      description:
        "Enterprise LLM stack turns research into concise one-to-one emails tailored to each recipient",
      icon: Zap,
    },
    {
      title: "Primary Inbox Delivery",
      description:
        "Email verification, timezone scheduling, safe daily limits, and tested infrastructure delivering 2x market performance",
      icon: Clock,
    },
    {
      title: "Audience Intelligence",
      description:
        "Machine learning powered ICP refinement and lookalike modeling that finds companies matching your best customers",
      icon: Target,
    },
    {
      title: "Deep Research",
      description:
        "Context gathered from approved sources and mapped to each email so every message is grounded in evidence",
      icon: BrushCleaning,
    },
    {
      title: "Continuous Learning",
      description:
        "Outcomes drive ICP refinement, messaging updates, and lookalike campaigns that compound results over time",
      icon: TrendingUp,
    },
    {
      title: "Fast Time to Value",
      description:
        "From discovery to execution in days not weeks with workflows that accelerate while respecting your controls",
      icon: Plug2,
    },
    {
      title: "Full Transparency",
      description:
        "Clear approvals at each step with control over sources, messaging approach, and data reuse",
      icon: CodeXml,
    },
    {
      title: "Enterprise Security",
      description:
        "Secure inbox integrations with Google, Outlook, and SMTP plus privacy controls you define",
      icon: Snowflake,
    },
  ];

  return (
    <section className="overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <Badge variant="outline">Our Promise</Badge>
        <Text variant="h2" className="relative z-20 py-2 text-center md:py-7">
          Managed AI Outbound Built on Principles
        </Text>
        <Text
          variant="body-large"
          color="muted"
          align="center"
          className="mx-auto max-w-xl"
        >
          Automation by default with clear approvals. Hyper-personalization
          grounded in verified sources. Deliverability and clarity over tricks
          and noise.
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
