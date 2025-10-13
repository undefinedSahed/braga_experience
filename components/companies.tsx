"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { image: "/l1.png" },
  { image: "/l2.png" },
  { image: "/l3.png" },
  { image: "/l4.png" },
  { image: "/l5.png" },
  { image: "/l6.png" },
];

export default function Companies() {
  const [key, setKey] = useState(0); // to force restart
  const times = 10;

  // Repeat the array
  let repeated: typeof companies = [];
  for (let i = 0; i < times; i++) {
    repeated = repeated.concat(companies);
  }

  // Restart animation every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1); // trigger re-render/restart animation
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="lg:pt-12 pt-5 bg-[#1F1F1F] overflow-hidden"
    >
      <div className="container mx-auto px-2 lg:px-0">
        <div className="lg:mb-12 mb-6 text-center lg:text-start">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold text-white lg:mb-16 mb-8 text-center capitalize title"
          >
            Proudly Partnered with These Companies
          </motion.h2>

          {/* Scrolling logos with restart key */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              key={key} // important: triggers restart
              className="flex items-center gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 10, // 5 minutes for one full scroll
              }}
            >
              {repeated.map((company, index) => (
                <Image
                  key={index}
                  src={company.image}
                  width={0}
                  height={0}
                  alt={`Company`}
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
