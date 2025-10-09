"use client";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Frontrow",
  },
  menu = [
    {
      title: "Features",
      url: "#features",
    },
    {
      title: "How it Works",
      url: "#how-it-works",
    },
    {
      title: "Team",
      url: "#team",
    },
    {
      title: "Use Cases",
      url: "#use-cases",
    },
    {
      title: "FAQ",
      url: "#faq",
    },
  ],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Get Started", url: "#" },
  },
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100; // Scroll offset in pixels
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="bg-background border-b">
        <div className="container px-4 py-4">
          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-1.5 mr-[66px]">
              <img src="/img/icon.png" className="h-6 w-auto" alt="Frontrow" />
              <Text variant="h6" as="span" className="tracking-tighter">
                {logo.title}
              </Text>
            </a>
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <NavigationMenuWithoutViewport>
                  <NavigationMenuList className="relative">
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenuWithoutViewport>
              </div>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={auth.login.url}>{auth.login.title}</a>
              </Button>
              <Button asChild size="sm">
                <a href={auth.signup.url}>{auth.signup.title}</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src="/img/icon.png" className="h-6 w-auto" alt="Frontrow" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src="/img/icon.png"
                        className="h-6 w-auto"
                        alt="Frontrow"
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Sticky Navbar - appears on scroll */}
      <section
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b transition-all duration-300 ease-out",
          isScrolled
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {/* Desktop Sticky Menu */}
        <div className="hidden lg:block">
          <div className="container px-4 py-3">
            <nav className="flex justify-between items-center">
              {/* Logo */}
              <a
                href={logo.url}
                className="flex items-center gap-1.5 mr-[66px]"
              >
                <img
                  src="/img/icon.png"
                  className="h-5 w-auto"
                  alt="Frontrow"
                />
                <Text
                  variant="h6"
                  as="span"
                  className="tracking-tighter text-sm"
                >
                  {logo.title}
                </Text>
              </a>
              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <NavigationMenuWithoutViewport>
                    <NavigationMenuList className="relative">
                      {menu.map((item) => renderMenuItem(item))}
                    </NavigationMenuList>
                  </NavigationMenuWithoutViewport>
                </div>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={auth.login.url}>{auth.login.title}</a>
                </Button>
                <Button asChild size="sm">
                  <a href={auth.signup.url}>{auth.signup.title}</a>
                </Button>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Sticky Menu */}
        <div className="container px-4 py-3 lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src="/img/icon.png" className="h-5 w-auto" alt="Frontrow" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src="/img/icon.png"
                        className="h-6 w-auto"
                        alt="Frontrow"
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="origin-top-center relative top-11 w-full overflow-hidden rounded-md border shadow data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:absolute md:left-1/2 md:w-80 md:-translate-x-1/2">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-full">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        onClick={(e) => {
          if (item.url.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(item.url);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Text
      key={item.title}
      as="a"
      href={item.url}
      variant="link"
      className="text-base"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        if (item.url.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(item.url);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }}
    >
      {item.title}
    </Text>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-muted-foreground">{item.icon}</div>
      <div>
        <Text variant="link" as="div">
          {item.title}
        </Text>
        {item.description && (
          <Text variant="body-small" color="muted" className="leading-snug">
            {item.description}
          </Text>
        )}
      </div>
    </a>
  );
};

const NavigationMenuWithoutViewport = ({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) => {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {/* The Viewport needs to be removed to center align submenus under their parents. You could remove this from the shadcn/ui component */}
      {/* {viewport && <NavigationMenuViewport />} */}
    </NavigationMenuPrimitive.Root>
  );
};

export { Navbar };
