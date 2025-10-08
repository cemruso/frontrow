"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HyperText } from "@/components/ui/hyper-text";
import { cn } from "@/lib/utils";
import { Text } from "../ui/text";

interface HeroTickerProps {
  phrases?: string[];
  duration?: number;
  className?: string;
  title?: string;
}

const DEFAULT_PHRASES = [
  "Win 10x More Leads",
  "Hyper Personalize Outbound",
  "Boost Your Open Rates",
];

export function HeroTicker({
  phrases = DEFAULT_PHRASES,
  duration = 3000,
  className,
  title,
}: HeroTickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, duration);

    return () => clearInterval(interval);
  }, [phrases, duration]);

  return (
    <div className="flex flex-col items-center">
      <Text
        variant="h1"
        className="word-spacing-tight font-semibold text-base-400"
      >
        {title}
      </Text>
      <div className={cn("overflow-hidden", className)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={phrases[index]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <HyperText
              as="h1"
              duration={600}
              delay={100}
              startOnView={false}
              animateOnHover={false}
            >
              {phrases[index]}
            </HyperText>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
