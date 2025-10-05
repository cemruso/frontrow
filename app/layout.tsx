import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Frontrow - Lead Generation Platform",
  description:
    "Frontrow is a lead generation company operating with a services and SaaS model.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar
          logo={{
            url: "/",
            src: "/frontrow-logo.svg",
            alt: "Frontrow",
            title: "Frontrow",
          }}
          menu={[
            { title: "Home", url: "/" },
            { title: "Services", url: "/services" },
            { title: "Platform", url: "/platform" },
            { title: "Pricing", url: "/pricing" },
            { title: "About", url: "/about" },
          ]}
          auth={{
            login: { title: "Log in", url: "/login" },
            signup: { title: "Get started", url: "/signup" },
          }}
        />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
