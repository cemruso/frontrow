import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Reviews, type Review } from "./reviews";
import { HeroTicker } from "./hero-ticker";
import { Badge } from "../ui/badge";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import DotGrid from "./dotGrid";

const COMPANY_LOGOS = [
  {
    name: "Mercury",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/mercury.svg",
    width: 143,
    height: 26,
  },
  {
    name: "Retool",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/retool.svg",
    width: 113,
    height: 22,
  },
  {
    name: "Descript",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/descript.svg",
    width: 112,
    height: 27,
  },
  {
    name: "Perplexity",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/perplexity.svg",
    width: 141,
    height: 32,
  },
  {
    name: "Ramp",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/ramp.svg",
    width: 105,
    height: 28,
  },
  {
    name: "Raycast",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/raycast.svg",
    width: 128,
    height: 33,
  },
];

interface HeroProps {
  badge?: string;
  title?: string;
  description?: string;
  input?: {
    placeholder?: string;
    buttonText?: string;
  };
  reviews?: Review[];
  socialProof?: {
    text?: string;
    logos?: Array<{
      name: string;
      src: string;
      width: number;
      height: number;
    }>;
  };
}

const Hero = ({
  badge = "Lead Generation",
  title = "Growth, Re-Imagined",
  description = "Transform growth into a science. Capture intent signals, run AI agents, and engage every prospect with personalized outbound in one system of action.",
  input = {
    placeholder: "What's your work email?",
    buttonText: "Get started",
  },
  reviews,
  socialProof = {
    text: "The fastest growing teams grow with Frontrow.",
    logos: COMPANY_LOGOS,
  },
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background DotGrid - Full Width */}
      {/* <div className="absolute inset-0 -z-10 opacity-15">
        <DotGrid
          dotSize={2}
          gap={8}
          baseColor="hsl(var(--primary))"
          activeColor="hsl(var(--primary))"
          proximity={100}
          speedTrigger={100}
          shockRadius={150}
          shockStrength={2}
        />
      </div> */}

      {/* Hero Content - Contained */}
      <div className="container py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          {badge && (
            <div className="mb-6">
              <Badge variant="outline">{badge}</Badge>
            </div>
          )}

          {/* Title */}
          <div className="flex flex-col items-center container">
            <HeroTicker title={title} className="mb-6" />
          </div>

          {/* Description */}
          <Text
            variant="body-large"
            color="muted"
            align="center"
            className="mb-10 max-w-3xl md:text-xl"
          >
            {description}
          </Text>

          {/* Email Input & CTA */}
          <div className="mb-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder={input.placeholder}
              className="h-12 flex-1 bg-background"
            />
            <Button size="lg" className="h-12 px-6">
              {input.buttonText}
            </Button>
          </div>

          {/* CTA Row */}
          {/* <div className="mb-8 flex max-w-md flex-col gap-3 sm:flex-row mx-auto">
            <Button size="lg" variant="default" className="min-w-32">
              Try for Free
            </Button>
            <Button size="lg" variant="outline" className="min-w-32">
              Book a Demo
            </Button>
          </div> */}

          {/* Reviews Section */}
          <div className="mb-20">
            <Reviews reviews={reviews} />
          </div>

          {/* Hero Video Section */}
          <div className="mb-20 w-full max-w-5xl">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="/videos/frontrow-hero.mp4"
              thumbnailSrc="/videos/frontrow-hero-thumbnail.png"
              thumbnailAlt="Frontrow Platform Demo"
            />
          </div>

          {/* Social Proof Section */}
          {socialProof && (
            <div className="flex w-full flex-col items-center gap-8">
              {/* Social Proof Text */}
              {socialProof.text && (
                <Text variant="badge">{socialProof.text}</Text>
              )}

              {/* Logo Grid */}
              {socialProof.logos && socialProof.logos.length > 0 && (
                <div className="grid w-full max-w-5xl grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
                  {socialProof.logos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex h-12 items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain opacity-60 transition-opacity hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero };
