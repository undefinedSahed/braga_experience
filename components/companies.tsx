"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = [
  { id: 1, image: "/l1.png" },
  { id: 2, image: "/l2.png" },
  { id: 3, image: "/l3.png" },
  { id: 4, image: "/l4.png" },
  { id: 5, image: "/l5.png" },
  { id: 6, image: "/l6.png" },
];

export default function Companies() {
  return (
    <section
      id="projects"
      className="lg:py-12 py-5 bg-[#1F1F1F] overflow-hidden"
    >
      <div className="container mx-auto px-2 lg:px-0">
        <div className="lg:mb-12 mb-6 text-center lg:text-start">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-white lg:mb-16 text-center capitalize"
          >
            We have provided our services to
          </motion.h2>

          {/* Infinite scrolling logos */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 15, // adjust speed
              }}
            >
              {/* Duplicate the set 3x for smooth loop */}
              {[...Array(3)]
                .flatMap(() => companies)
                .map((company, index) => (
                  <img
                    key={index}
                    src={company.image}
                    alt={`Company ${company.id}`}
                    className="w-28 h-auto object-contain opacity-80 hover:opacity-100 transition"
                  />
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
