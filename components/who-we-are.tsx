"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Braga Experience Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Who We Are</h2>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              About Braga Experience Braga Experience is a UK-based videography and photography agency founded by Lucas
              Braga, a Brazilian creative who saw that talent in the industry was being undervalued.
            </p>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              We specialize in corporate video, brand storytelling, product and event coverage, and team is equipped to
              bring your vision to life.
            </p>
            <p className="text-neutral-300 mb-8 leading-relaxed">
              Based in London, we offer our services throughout the UK and across Europe, and team is equipped to bring
              your vision to life. Whether you're a startup, a global brand, or an individual with a story to tell,
              we're here to create content that resonates and delivers results. It's an experience built on
              professionalism, creativity, and trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
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
                <a href="tel:+447123456789" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Give us a phone call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
