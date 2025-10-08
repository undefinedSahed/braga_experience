"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Us", href: "#contact" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
  ]

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF1A] backdrop-blur-2xl">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="relative w-48 h-12">
            <Image src="/logo.png" alt="Braga Experience" fill className="object-contain" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-neutral-900/95 backdrop-blur-sm transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="relative w-48 h-12">
            <Image src="/logo.png" alt="Braga Experience" fill className="object-contain" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex flex-col items-start justify-center h-[calc(100vh-120px)] container mx-auto px-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-5xl md:text-7xl font-bold text-white/60 hover:text-white transition-colors py-4 text-left cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
