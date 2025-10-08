"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const Feature3 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col items-center">
        <Text variant="h2" align="center" className="max-w-4xl">
          Build Your Sales Dream Team
        </Text>
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
      imageAlt: "Card 1",
      rotate: -10.87,
      isDark: false,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      imageAlt: "Card 2",
      rotate: -7.95,
      isDark: true,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-black-1.svg",
    },
    {
      imageAlt: "Card 3",
      rotate: -4.5,
      isDark: false,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
    {
      imageAlt: "Card 4",
      rotate: 0,
      isDark: false,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
    {
      imageAlt: "Card 5",
      rotate: 4.5,
      isDark: false,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    },
    {
      imageAlt: "Card 6",
      rotate: 7.95,
      isDark: false,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    },
    {
      imageAlt: "Card 7",
      rotate: 10.87,
      isDark: true,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-black-1.svg",
    },
  ];

  return (
    <div className="my-16 ml-[50px] flex items-center justify-center lg:ml-0">
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
          <motion.div
            className={visibilityClasses}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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
              <img
                src={card.image}
                alt={card.imageAlt}
                className="size-full object-cover object-center"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
