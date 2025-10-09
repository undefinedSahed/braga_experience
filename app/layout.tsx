import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import { Acme, Poppins } from "next/font/google";
import "./globals.css";

const acme = Acme({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-acme",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Braga Experience - Professional Videography & Photography",
  description:
    "From corporate films to creative content - we make visuals that move audiences.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${poppins.className} ${acme.variable}`}>
        <Suspense fallback={null}>
          {children}
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
