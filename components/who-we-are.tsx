"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section id="about" className="pb-20 bg-[#1F1F1F]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative hidden lg:block aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/whoweare.jpg"
              alt="Braga Experience Team"
              fill
              className="object-cover scale-75 lg:scale-100 rounded-md"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:mb-10 font-bold text-white text-center lg:text-start font-acme">
              Who We Are
            </h2>
            <div className="relative block lg:hidden aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/whoweare.jpg"
                alt="Braga Experience Team"
                fill
                className="object-cover scale-75 lg:scale-100 rounded-md"
              />
            </div>
            <p className="text-neutral-300 font-bold mb-4 leading-relaxed text-center lg:text-start">
              Based in London and serving clients throughout the UK and across
              Europe, Braga Experience is a videography and photography agency
              dedicated to delivering cinematic visuals that connect and
              inspire.
            </p>
            <p className="text-neutral-300 mb-4 leading-relaxed text-center lg:text-start">
              Founded by <Link target="_blank" href="https://www.linkedin.com/in/lucas-braga-50970a35a/" className="font-bold">Lucas Braga</Link>, a Brazilian creative with over five years
              of experience producing high-quality visuals for leading brands
              and businesses, we bring a unique blend of artistry and
              professionalism to every project.
            </p>
            <p className="text-neutral-300 mb-8 leading-relaxed text-center lg:text-start">
              We specialize in corporate videos, brand storytelling, product and
              event coverage, and creative content for social media. Backed by a
              talented team of videographers, editors, and drone operators, we
              deliver content that helps brands and individuals stand out.
            </p>
            <p className="text-neutral-300 mb-8 leading-relaxed text-center lg:text-start">
              At Braga Experience, it’s more than production — it’s an
              experience built on professionalism, creativity, and trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                size="lg"
                className="bg-white text-neutral-950 hover:bg-neutral-200"
              >
                Get a Quote
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-950"
              >
                <a
                  href="tel:+44 07514-996775"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Give us a phone call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
