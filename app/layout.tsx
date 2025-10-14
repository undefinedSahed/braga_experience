import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import { Poppins } from "next/font/google";
import Script from "next/script"; // ✅ added
import "./globals.css";

export const metadata: Metadata = {
  title: "Braga Experience - Professional Videography & Photography",
  description:
    "From corporate films to creative content - we make visuals that move audiences.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yeg6fkb.css" />

        {/* ✅ Google Analytics 4 tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0W3MBWRGTN"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0W3MBWRGTN');
            `,
          }}
        />
      </head>

      <body className={`font-sans ${poppins.className} overflow-x-hidden`}>
        <Suspense fallback={null}>
          {children}
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
