import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
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
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} antialiased`}
      >
        <div className="bg-base-50">
          <Navbar
            logo={{
              url: "/",
              src: "/frontrow-logo.svg",
              alt: "Frontrow",
              title: "Frontrow",
            }}
            menu={[
              { title: "Features", url: "#features" },
              { title: "How it Works", url: "#how-it-works" },
              { title: "Team", url: "#team" },
              { title: "Use Cases", url: "#use-cases" },
              { title: "FAQ", url: "#faq" },
            ]}
            auth={{
              login: { title: "Login", url: "#" },
              signup: { title: "Get Started", url: "#" },
            }}
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
