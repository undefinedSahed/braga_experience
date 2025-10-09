"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Linkedin,
  Mail,
  Youtube,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative lg:h-screen h-[65vh] flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <div className="">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-test.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 z-20 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition cursor-pointer"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>

        {/* Animated Content */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hidden lg:block md:text-8xl font-bold text-white mb-8 text-balance font-acme">
            Braga Experience
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
            We craft cinematic stories that connect brands and people. <br />
            <span className="hidden lg:block">
              From corporate films to creative content — we make visuals that
              move audiences.
            </span>
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="lg"
              className="hidden lg:block bg-transparent border-white text-white hover:bg-white hover:text-neutral-950"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="hidden lg:block bg-transparent lg:bg-white !border-1 border-white text-white lg:text-black hover:bg-white hover:text-neutral-950"
            >
              Get a Quote
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile button */}
        <div className="absolute lg:hidden bottom-8 left-1/2 -translate-x-1/2">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-transparent lg:bg-white !border-1 border-white text-white lg:text-black hover:bg-white hover:text-neutral-950"
          >
            Get a Quote
          </Button>
        </div>

        {/* Social icons */}
        <div className="hidden lg:block">
          <div className="absolute lg:pt-0 lg:right-5 right-1/2 translate-x-1/2 lg:translate-x-0 lg:top-1/2 -translate-y-1/2 flex items-center justify-center lg:items-start lg:flex-col mt-12 lg:mt-0 gap-x-2 lg:space-y-2">
            <a target="_blank" href="mailto:contact@bragaexperience.com">
              <Mail size={28} className="p-0.5 rounded-sm text-white/70" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@lucasbraga1230">
              <Youtube size={32} className="p-0.5 rounded-sm text-white/70" />
            </a>
            <a target="_blank" href="https://www.instagram.com/bragaexp">
              <Instagram size={30} className="p-0.5 rounded-sm text-white/70" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lucas-braga-50970a35a/"
            >
              <Linkedin size={30} className="p-0.5 rounded-sm text-white/70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
