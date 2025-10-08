import React from "react";

import { Ripple } from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const CTA = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative h-92 w-full overflow-hidden rounded-4xl border bg-background p-4">
          <svg
            className="absolute top-0 left-0 size-full p-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.2"
              width="100%"
              height="100%"
              rx="22"
              strokeWidth="2"
              stroke="currentColor"
              strokeDasharray="7 12"
            />
          </svg>
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-3xl text-center">
            <div className="flex flex-col items-center gap-4">
              <Text variant="body-large" color="muted" className="max-w-sm">
                Ready to transform your lead generation?
              </Text>
              <Text variant="h2">Start Growing Today</Text>
              <Button
                variant="secondary"
                className="relative z-99 mb-20 w-fit !rounded-none border px-10"
              >
                Book a Demo
              </Button>
            </div>

            <Ripple mainCircleSize={550} className="absolute -bottom-220" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA };
