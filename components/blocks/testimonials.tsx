import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";

const TESTIMONIALS = [
  {
    quote:
      "What I love most is having everything in one place—it simplifies routing and is 10x more intuitive than Chili Piper!",
    link: "#",
    author: {
      name: "Sarah Williams",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      role: "CTO, ARC",
    },
    company: {
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      name: "",
    },
  },
  {
    quote:
      "This app seamlessly integrates into our GTM ops, eliminating the need for a standalone tool and complex system connections.",
    link: "#",
    author: {
      name: "John Doe",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      role: "CEO & Founder, descript",
    },
    company: {
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      name: "",
    },
  },
];

const CASE_STUDIES = [
  {
    title: "How we Achieved 10x GTM Efficiency",
    link: "#",
    stats: [
      {
        number: "10x",
        text: "GTM efficiency increase",
      },
    ],
    author: {
      name: "John Doe",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      role: "Head of Marketing",
    },
  },
  {
    title: "How Mercury Reduced Speed-to-Lead by 80%",
    link: "#",
    stats: [
      {
        number: "80%",
        text: "faster lead response time",
      },
    ],
    author: {
      name: "Jane Smith",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      role: "Sales Director",
    },
  },
  {
    title: "From Zero to $7M in Pipeline",
    link: "#",
    stats: [
      {
        number: "$7M",
        text: "inbound pipeline generated",
      },
    ],
    author: {
      name: "John Doe",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      role: "Head of Marketing",
    },
  },
];

interface AuthorProps {
  image: string;
  name: string;
  role: string;
}

const Author = ({ image, name, role }: AuthorProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-10 rounded-xl bg-background/50">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-0.5">
        <Text variant="body-small" className="font-medium">
          {name}
        </Text>
        <Text variant="body-small" color="muted">
          {role}
        </Text>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <Text variant="h2">What people think</Text>
            <div className="max-w-[28.75rem]">
              <Text variant="body-large" color="muted">
                Transform go-to-market with smarter routing, actionable intent,
                and accelerated scheduling.
              </Text>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-muted p-6"
            >
              <div className="flex flex-col gap-6">
                <Text variant="lead" className="leading-relaxed font-medium">
                  {testimonial.quote}
                </Text>
              </div>
              <div className="flex items-center justify-between">
                <Author
                  image={testimonial.author.image}
                  role={testimonial.author.role}
                  name={testimonial.author.name}
                />
                <div className="relative w-24 h-10">
                  <Image
                    className="object-contain object-center opacity-80"
                    src={testimonial.company.logo}
                    alt={testimonial.company.name}
                    fill
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((caseStudy, index) => (
            <a
              key={index}
              href={caseStudy.link}
              className="group relative flex aspect-square flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-muted p-8 transition-all duration-300 hover:bg-foreground hover:shadow-lg"
            >
              <div className="relative flex flex-col gap-3">
                <Text
                  variant="h2"
                  className="text-5xl transition-colors duration-300 group-hover:text-background"
                >
                  {caseStudy.stats[0].number}
                </Text>
                <Text
                  variant="body-small"
                  color="muted"
                  className="font-medium transition-colors duration-300 group-hover:text-background/80"
                >
                  {caseStudy.stats[0].text}
                </Text>
              </div>
              <div className="relative flex flex-col gap-6">
                <Text
                  variant="lead"
                  className="leading-tight font-semibold transition-colors duration-300 group-hover:text-background"
                >
                  {caseStudy.title}
                </Text>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
