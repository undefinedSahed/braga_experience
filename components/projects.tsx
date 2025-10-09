"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

type Tab = "filmmaking" | "photography";

const filmmakingProjects = [
  {
    id: 1,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0&iv_load_policy=3&fs=1&playsinline=1",
  },
  {
    id: 2,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0&iv_load_policy=3&fs=1&playsinline=1",
  },
  {
    id: 3,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0&iv_load_policy=3&fs=1&playsinline=1",
  },
  {
    id: 4,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0&iv_load_policy=3&fs=1&playsinline=1",
  },
  {
    id: 5,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0&iv_load_policy=3&fs=1&playsinline=1",
  },
  {
    id: 6,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0&iv_load_policy=3&fs=1&playsinline=1",
  },
];

const photographyProjects = [
  {
    id: 1,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: [
      "/photography-project-image-1.jpg",
      "/photography-project-image-2.jpg",
      "/photography-project-image-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: [
      "/photography-project-image-4.jpg",
      "/photography-project-image-5.jpg",
      "/photography-project-image-6.jpg",
    ],
  },
  {
    id: 3,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: [
      "/photography-project-image-7.jpg",
      "/photography-project-image-8.jpg",
      "/photography-project-image-9.jpg",
    ],
  },
  {
    id: 4,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: [
      "/photography-project-image-7.jpg",
      "/photography-project-image-8.jpg",
      "/photography-project-image-9.jpg",
    ],
  },
  {
    id: 5,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: [
      "/photography-project-image-7.jpg",
      "/photography-project-image-8.jpg",
      "/photography-project-image-9.jpg",
    ],
  },
  {
    id: 6,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: [
      "/photography-project-image-7.jpg",
      "/photography-project-image-8.jpg",
      "/photography-project-image-9.jpg",
    ],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("filmmaking");

  return (
    <section id="projects" className="lg:py-28 py-5 bg-[#1F1F1F]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex lg:flex-row flex-col justify-between items-center"
        >
          <div className="lg:mb-12 mb-6 text-center lg:text-start">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 font-acme"
            >
              Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 text-lg"
            >
              Elevating your journey through design, film, and storytelling.
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:mb-12 mb-8"
          >
            <button
              onClick={() => setActiveTab("filmmaking")}
              className={`px-4 text-lg font-medium transition-all cursor-pointer ${
                activeTab === "filmmaking"
                  ? "text-white relative after:absolute after:w-4/5 after:h-[1px] after:bg-white after:content-[''] after:bottom-0 after:left-1/2 after:-translate-x-1/2"
                  : "text-white/60"
              }`}
            >
              Filmmaking
            </button>
            <button
              onClick={() => setActiveTab("photography")}
              className={`px-4 text-lg font-medium transition-all cursor-pointer ${
                activeTab === "photography"
                  ? "text-white relative after:absolute after:w-4/5 after:h-[1px] after:bg-white after:content-[''] after:bottom-0 after:left-1/2 after:-translate-x-1/2"
                  : "text-white/60"
              }`}
            >
              Photography
            </button>
          </motion.div>
        </motion.div>

        {activeTab === "filmmaking" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {filmmakingProjects.map((project, index) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-neutral-900 border-neutral-800 overflow-hidden pt-0">
                        <div className="relative aspect-video">
                          <iframe
                            src={project.videoUrl}
                            title={project.title}
                            className="w-full h-full"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <CardContent className="p-6 py-0">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold text-white mb-2 font-acme">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                              <Calendar className="w-4 h-4" />
                              <span>{project.date}</span>
                            </div>
                          </div>
                          <p className="text-neutral-400 text-base leading-relaxed">
                            {project.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:-left-12 bg-neutral-800/90 hover:bg-neutral-700 border-neutral-700 text-white" />
              <CarouselNext className="right-2 md:-right-12 bg-neutral-800/90 hover:bg-neutral-700 border-neutral-700 text-white" />
            </Carousel>
          </motion.div>
        )}

        {activeTab === "photography" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {photographyProjects.map((project, index) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-neutral-900 border-neutral-800 overflow-hidden pt-0">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {project.images.map((image, imgIndex) => (
                              <CarouselItem key={imgIndex}>
                                <div className="relative aspect-video">
                                  <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${project.title} - Image ${
                                      imgIndex + 1
                                    }`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                        <CardContent className="p-6 py-0">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold text-white mb-2 font-acme">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                              <Calendar className="w-4 h-4" />
                              <span>{project.date}</span>
                            </div>
                          </div>
                          <p className="text-neutral-400 text-base leading-relaxed">
                            {project.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:-left-12 bg-neutral-800/90 hover:bg-neutral-700 border-neutral-700 text-white" />
              <CarouselNext className="right-2 md:-right-12 bg-neutral-800/90 hover:bg-neutral-700 border-neutral-700 text-white" />
            </Carousel>
          </motion.div>
        )}
      </div>
    </section>
  );
}
