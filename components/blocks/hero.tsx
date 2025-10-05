import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

interface HeroProps {
  badge?: string;
  title?: string;
  description?: string;
  input?: {
    placeholder?: string;
    buttonText?: string;
  };
  socialProof?: {
    text?: string;
    logos?: Array<{
      name: string;
      alt: string;
    }>;
  };
}

const Hero = ({
  badge = "Lead Generation",
  title = "Growth, engineered",
  description = "Transform growth into a science. Capture intent signals, run AI agents, and engage every prospect with personalized outbound in one system of action.",
  input = {
    placeholder: "What's your work email?",
    buttonText: "Get started",
  },
  socialProof = {
    text: "The fastest growing teams grow with Frontrow.",
    logos: [
      { name: "Company 1", alt: "Company 1" },
      { name: "Company 2", alt: "Company 2" },
      { name: "Company 3", alt: "Company 3" },
      { name: "Company 4", alt: "Company 4" },
      { name: "Company 5", alt: "Company 5" },
      { name: "Company 6", alt: "Company 6" },
      { name: "Company 7", alt: "Company 7" },
      { name: "Company 8", alt: "Company 8" },
    ],
  },
}: HeroProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          {badge && (
            <div className="mb-6">
              <Text
                variant="badge"
                className="inline-flex items-center rounded-full border px-4 py-1.5"
              >
                {badge}
              </Text>
            </div>
          )}

          {/* Title */}
          <Text
            variant="display-2"
            className="mb-6 max-w-4xl md:text-6xl lg:text-7xl"
          >
            {title}
          </Text>

          {/* Description */}
          <Text
            variant="body-large"
            color="muted"
            align="center"
            className="mb-10 max-w-2xl md:text-xl"
          >
            {description}
          </Text>

          {/* Email Input & CTA */}
          <div className="mb-20 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder={input.placeholder}
              className="h-12 flex-1"
            />
            <Button size="lg" className="h-12 px-6">
              {input.buttonText}
            </Button>
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
                <div className="grid w-full max-w-5xl grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-8">
                  {socialProof.logos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex h-12 items-center justify-center"
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-md border bg-muted/50 px-4">
                        <Text variant="caption" color="muted">
                          {logo.name}
                        </Text>
                      </div>
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
