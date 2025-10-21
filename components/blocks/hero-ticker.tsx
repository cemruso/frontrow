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
}

const DEFAULT_PHRASES = [
  "Book Demo Calls",
  "Fill Your Pipeline",
  "Increase Your Revenue",
];

export function HeroTicker({
  phrases = DEFAULT_PHRASES,
  duration = 3000,
  className,
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
      <Text
        variant="h1"
        className="word-spacing-tight font-semibold text-center mb-6"
      >
        On Auto Pilot
      </Text>
    </div>
  );
}
