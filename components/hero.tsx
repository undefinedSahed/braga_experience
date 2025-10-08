"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background - user will add their own video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 text-balance">Braga Experience</h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
          We craft cinematic stories that connect brands and people. <br />
          From corporate films to creative content — we make visuals that move audiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("projects")}
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-950"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-white text-neutral-950 hover:bg-neutral-200"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
