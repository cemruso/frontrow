import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { HeroTitle } from "@/components/blocks/hero-title";

const Testimonials2 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <HeroTitle
          badge="Customer Stories"
          title="Real Results from Real Teams"
          subtitle="See how leading companies are using Frontrow to scale their outbound and drive measurable growth."
        />
        <div className="relative rounded-2xl bg-background border border-border">
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <div className="relative mx-auto h-80 w-full lg:mx-0">
                    <Image
                      src="/img/clients/kolektif-house-hero.jpg"
                      alt="Kolektif House workspace"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <Text variant="h6">Ahmet Onur</Text>
                    <Text variant="body" color="muted">
                      CEO, Kolektif House
                    </Text>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <Image
                      src="/img/clients/kolektif-house-logo.png"
                      alt="Kolektif House logo"
                      width={44}
                      height={44}
                      className="h-auto w-7 lg:w-11"
                    />
                    <Text variant="lead" className="font-semibold">
                      Kolektif House
                    </Text>
                  </div>
                  <Text
                    variant="lead"
                    align="center"
                    className="font-semibold lg:text-left"
                  >
                    &ldquo;FrontRow transformed how we reach enterprise clients.
                    Their hyper-personalized approach helped us connect with
                    decision-makers at companies who actually need premium
                    workspace solutions. The quality of conversations improved
                    dramatically.&rdquo;
                  </Text>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <Text variant="h2" className="mb-4 text-4xl md:text-6xl">
                        3.2x
                      </Text>
                      <Text variant="body" className="font-medium">
                        Qualified Enterprise Leads
                      </Text>
                      <Text variant="body" color="muted">
                        First 90 days
                      </Text>
                    </div>
                    <div className="flex flex-col">
                      <Text variant="h2" className="mb-4 text-4xl md:text-6xl">
                        58%
                      </Text>
                      <Text variant="body" className="font-medium">
                        Meeting Booking Rate
                      </Text>
                      <Text variant="body" color="muted">
                        vs. 12% industry average
                      </Text>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="grid grid-cols-1 gap-y-10 pt-4 pr-4 pb-14 pl-8 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                <div>
                  <div className="relative mx-auto h-80 w-full lg:mx-0 bg-white rounded-xl">
                    <Image
                      src="/img/clients/datapad-logo.jpeg"
                      alt="Datapad"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <Text variant="h6">Cem Ruso</Text>
                    <Text variant="body" color="muted">
                      CEO, Datapad
                    </Text>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                    <Image
                      src="/img/clients/datapad-logo.jpeg"
                      alt="Datapad logo"
                      width={36}
                      height={36}
                      className="h-auto w-5 lg:mr-1 lg:w-9 rounded"
                    />
                    <Text variant="lead" className="font-semibold">
                      Datapad
                    </Text>
                  </div>
                  <Text
                    variant="lead"
                    align="center"
                    className="font-semibold lg:text-left"
                  >
                    &ldquo;We needed to reach data leaders who understand the
                    pain of manual reporting. FrontRow&apos;s research-driven
                    personalization was spot on—every email referenced specific
                    analytics challenges at each company. Our reply rate doubled
                    overnight.&rdquo;
                  </Text>
                  <Separator className="my-8 lg:my-10" />
                  <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                    <div className="flex flex-col">
                      <Text variant="h2" className="mb-4 text-4xl md:text-6xl">
                        2.4x
                      </Text>
                      <Text variant="body" className="font-medium">
                        Reply Rate Improvement
                      </Text>
                      <Text variant="body" color="muted">
                        First 60 days
                      </Text>
                    </div>
                    <div className="flex flex-col">
                      <Text variant="h2" className="mb-4 text-4xl md:text-6xl">
                        47%
                      </Text>
                      <Text variant="body" className="font-medium">
                        Demo Conversion Rate
                      </Text>
                      <Text variant="body" color="muted">
                        From qualified leads
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
