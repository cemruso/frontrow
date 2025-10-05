import { ArrowUpRight } from "lucide-react";
import { Text } from "@/components/ui/text";

const Footer = () => {
  const navigation = [
    { name: "Platform", href: "/platform" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <section className="flex flex-col items-center gap-14 py-32">
      <nav className="container mx-auto px-4 flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Text
                as="a"
                href={item.href}
                variant="body-small"
                color="muted"
                className="transition-opacity hover:opacity-75"
              >
                {item.name}
              </Text>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-10 text-center md:mt-14 lg:mt-20">
        <Text
          variant="display-xl"
          align="center"
          className="text-muted-foreground/20"
        >
          FRONTROW REVENUE
        </Text>
      </div>
    </section>
  );
};

export { Footer };
