import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";

const Testimonials2 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center justify-center mb-12 sm:mb-16">
          <Badge variant="outline">Customer Stories</Badge>
          <Text variant="h2" className="relative z-20 py-2 text-center md:py-7">
            Real Results from Real Teams
          </Text>
          <Text
            variant="body-large"
            color="muted"
            align="center"
            className="mx-auto max-w-xl"
          >
            See how leading companies are using Frontrow to scale their outbound
            and drive measurable growth.
          </Text>
        </div>
        <div className="relative rounded-2xl bg-background border border-border">
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                    alt="placeholder"
                    className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                  />
                  <div className="mt-4 text-center">
                    <Text variant="h6">John Doe</Text>
                    <Text variant="body" color="muted">
                      CEO, Company Name
                    </Text>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg"
                      alt="logo"
                      className="h-auto w-7 lg:w-11"
                    />
                    <Text variant="lead" className="font-semibold">
                      Company Name
                    </Text>
                  </div>
                  <Text
                    variant="lead"
                    align="center"
                    className="font-semibold lg:text-left"
                  >
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua&rdquo;
                  </Text>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <Text variant="h2" className="mb-4 text-4xl md:text-6xl">
                        2.2x
                      </Text>
                      <Text variant="body" className="font-medium">
                        Monthly Active Users
                      </Text>
                      <Text variant="body" color="muted">
                        Since last month
                      </Text>
                    </div>
                    <div className="flex flex-col">
                      <Text variant="h2" className="mb-4 text-4xl md:text-6xl">
                        256%
                      </Text>
                      <Text variant="body" className="font-medium">
                        Increase in Revenue
                      </Text>
                      <Text variant="body" color="muted">
                        Since last year
                      </Text>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                    alt="placeholder"
                    className="mx-auto max-h-80 rounded-xl lg:mx-0 lg:max-h-none"
                  />
                  <div className="mt-4 text-center">
                    <Text variant="h6">Jane Doe</Text>
                    <Text variant="body" color="muted">
                      CTO, Company 2
                    </Text>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg"
                      alt="logo"
                      className="h-auto w-5 lg:mr-1 lg:w-9"
                    />
                    <Text variant="lead" className="font-semibold">
                      Company Name
                    </Text>
                  </div>
                  <Text
                    variant="lead"
                    align="center"
                    className="font-semibold lg:text-left"
                  >
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua&rdquo;
                  </Text>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <Text variant="h2" className="mb-4 text-4xl md:text-6xl">
                        1.5x
                      </Text>
                      <Text variant="body" className="font-medium">
                        Monthly Active Users
                      </Text>
                      <Text variant="body" color="muted">
                        Since last month
                      </Text>
                    </div>
                    <div className="flex flex-col">
                      <Text variant="h2" className="mb-4 text-4xl md:text-6xl">
                        150%
                      </Text>
                      <Text variant="body" className="font-medium">
                        Increase in Revenue
                      </Text>
                      <Text variant="body" color="muted">
                        Since last year
                      </Text>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute right-6 bottom-6 z-10 lg:right-10 lg:bottom-10">
              <div className="relative flex items-center gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonials2 };
