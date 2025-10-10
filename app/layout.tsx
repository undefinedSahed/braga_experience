import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Braga Experience - Professional Videography & Photography",
  description:
    "From corporate films to creative content - we make visuals that move audiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yeg6fkb.css" />
      </head>
      <body className={`font-sans`}>
        <Suspense fallback={null}>
          {children}
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
