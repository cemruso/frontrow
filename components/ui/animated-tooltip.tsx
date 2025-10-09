"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const AnimatedTooltip = ({
  children,
  name,
  designation,
  description,
  id,
  hoveredIndex,
  setHoveredIndex,
}: {
  children: React.ReactNode;
  name: string;
  designation: string;
  description: string;
  id: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === id && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute -top-[154px] left-1/2 z-50 flex w-64 -translate-x-1/2 flex-col rounded-lg border border-border bg-background p-4 shadow-xl"
          >
            <div className="relative z-30 text-base font-semibold">{name}</div>
            <div className="mb-2 text-sm text-muted-foreground font-mono">
              {designation}
            </div>
            <div className="text-sm text-muted-foreground">{description}</div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
