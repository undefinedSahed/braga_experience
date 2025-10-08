import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-48 h-12">
            <Image src="/braga-experience-logo-white.jpg" alt="Braga Experience" fill className="object-contain" />
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
              YouTube
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Braga Experience. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
