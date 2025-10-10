"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { HeroTitle } from "@/components/blocks/hero-title";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const Feature3 = () => {
  return (
    <section id="team" className="py-32">
      <div className="container flex flex-col items-center">
        <HeroTitle title="Build Your Sales Dream Team" className="mb-0" />
        <CardsContainer />
        <Text variant="body-large" align="center" className="max-w-xl">
          Join hundreds of companies using Frontrow to scale their outbound
          sales and generate qualified leads on autopilot.
        </Text>
        <div className="mt-10 flex items-center gap-2">
          <Button asChild variant="default" size="lg">
            <a href="#">Start Free Trial</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#">Book a Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Feature3 };

const CardsContainer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      name: "Alex",
      designation: "ICP Specialist",
      description:
        "Defines your ideal customer profile with precision. Uses lookalike modeling to find companies that match your best customers.",
      imageAlt: "Sales Agent 1",
      rotate: -10.87,
      isDark: false,
      image: "/img/agents/agent-1.jpg",
    },
    {
      name: "Jordan",
      designation: "Research Analyst",
      description:
        "Gathers context from approved sources. Maps relevant data points to ensure every message is grounded in facts.",
      imageAlt: "Sales Agent 2",
      rotate: -7.95,
      isDark: true,
      image: "/img/agents/agent-2.jpg",
    },
    {
      name: "Morgan",
      designation: "Copywriter",
      description:
        "Crafts clear, value-focused emails. Writes plain text messages that feel one-to-one and anchor to real insights.",
      imageAlt: "Sales Agent 3",
      rotate: -4.5,
      isDark: false,
      image: "/img/agents/agent-3.jpg",
    },
    {
      name: "Riley",
      designation: "Deliverability Expert",
      description:
        "Ensures your emails land in the primary inbox. Manages verification, timing, and sending infrastructure.",
      imageAlt: "Sales Agent 4",
      rotate: 0,
      isDark: false,
      image: "/img/agents/agent-4.jpg",
    },
    {
      name: "Casey",
      designation: "Campaign Strategist",
      description:
        "Orchestrates end-to-end workflows. Coordinates research, messaging, and execution with clear client approvals.",
      imageAlt: "Sales Agent 5",
      rotate: 4.5,
      isDark: false,
      image: "/img/agents/agent-5.jpg",
    },
    {
      name: "Taylor",
      designation: "Analytics Lead",
      description:
        "Measures outcomes and refines targeting. Builds lookalike campaigns based on what works to compound performance.",
      imageAlt: "Sales Agent 6",
      rotate: 7.95,
      isDark: false,
      image: "/img/agents/agent-6.jpg",
    },
    {
      name: "Avery",
      designation: "Personalization Engine",
      description:
        "Turns research into hyper-personalized messages. Selects the most relevant data points for each prospect.",
      imageAlt: "Sales Agent 7",
      rotate: 10.87,
      isDark: true,
      image: "/img/agents/agent-7.jpg",
    },
  ];

  return (
    <div className="mb-16 ml-[50px] flex items-center justify-center lg:ml-0">
      {cards.map((card, index) => {
        const yOffset = Math.pow(Math.abs(index - 3), 1.2) * 12;
        const isHovered = hoveredIndex === index;
        const visibilityClasses =
          // Hide 0,1,6,7 on small screens
          (index === 0 || index === 1 || index === 5 || index === 6
            ? " hidden sm:hidden "
            : "") +
          // Hide 0,7 on medium screens (but show others)
          (index === 0 || index === 6 ? "md:hidden " : "md:block ") +
          // Show all on large screens
          "lg:block";

        return (
          <AnimatedTooltip
            key={index}
            id={index}
            name={card.name}
            designation={card.designation}
            description={card.description}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          >
            <motion.div
              className={visibilityClasses}
              initial={{ y: yOffset }}
              animate={{
                y: isHovered ? yOffset - 20 : yOffset,
                zIndex: isHovered ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`relative h-[176px] w-[177px] overflow-hidden rounded-3xl border ${
                  card.isDark
                    ? "mb-14 border-[#8b8b8b] bg-black shadow-2xl"
                    : "border-[#cecece] bg-[#f5f5f5] shadow-lg"
                }`}
                style={{
                  transform: `rotate(${card.rotate}deg)`,
                  marginLeft: index === 0 ? "0px" : "-50px",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center transition-all duration-300"
                  style={{
                    filter: isHovered ? "saturate(1)" : "saturate(0.8)",
                  }}
                />
              </div>
            </motion.div>
          </AnimatedTooltip>
        );
      })}
    </div>
  );
};
