"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Photography",
    image: "/photography.jpg",
    description:
      "We provide professional photography services for family events such as christenings, birthdays, and funerals, as well as corporate events and photos for your business. Our goal is to capture authentic moments and create lasting memories with high-quality, beautifully composed images tailored to your special occasion or brand.",
  },
  {
    id: 2,
    title: "Videography",
    image: "/videography.png",
    description:
      "We specialise in videography for companies, creating institutional videos, promotional content, social media videos, and coverage of corporate events. Our goal is to produce engaging, high-quality videos that enhance your brand presence and help drive more sales.",
  },
  {
    id: 3,
    title: "Drone",
    image: "/drone.jpg",
    description:
      "We provide aerial drone footage, both video and photography, which can be added to any project to give your content a stunning, cinematic perspective.",
  },
  {
    id: 4,
    title: "Event Coverage",
    image: "/event.jpg",
    description:
      "We offer full event coverage, capturing both videos and photos — perfect for showcasing your company's events or preserving memories of an amazing occasion.",
  },
];

export default function Services() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section id="services" className="lg:pt-10 pt-4 lg:pb-20 pb-8 bg-[#1F1F1F]">
      <div className="container mx-auto px-2 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center lg:mb-12 mb-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-acme">
            Services
          </h2>
          <p className="text-neutral-400 text-lg">
            Creative strategies designed to elevate your brand and vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <div key={service.id} className="perspective-1000">
              <motion.div
                className="relative w-full aspect-square"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateY: flippedCards.includes(service.id) ? 180 : 0,
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              >
                <Card
                  onClick={() => toggleFlip(service.id)}
                  className="absolute inset-0 border-neutral-800 overflow-hidden group cursor-pointer p-0 bg-transparent backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative group w-full h-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute z-20 hidden group-hover:block transition-transform duration-500 top-2 right-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip(service.id);
                      }}
                    >
                      <Button className="text-xs bg-white hover:bg-white text-black h-6 px-2">
                        View Details
                      </Button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <CardContent className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white font-acme">
                        {service.title}
                      </h3>
                    </CardContent>
                  </div>
                </Card>

                <Card
                  onClick={() => toggleFlip(service.id)}
                  className="absolute inset-0 border-neutral-800 overflow-hidden cursor-pointer p-0 bg-neutral-900 backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <CardContent className="flex flex-col justify-between h-full p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 font-acme">
                        {service.title}
                      </h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="space-y-3 mt-6">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToSection("contact");
                        }}
                        className="w-full border-2 text-white !bg-transparent transition-all duration-300 hover:!bg-neutral-200 hover:text-black font-semibold"
                      >
                        Get a Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
