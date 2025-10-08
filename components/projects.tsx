"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

type Tab = "filmmaking" | "photography"

const filmmakingProjects = [
  {
    id: 1,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl: "/filmmaking-project-video-thumbnail.jpg",
  },
  {
    id: 2,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl: "/filmmaking-project-video-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl: "/filmmaking-project-video-thumbnail.jpg",
  },
  {
    id: 4,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl: "/filmmaking-project-video-thumbnail.jpg",
  },
  {
    id: 5,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl: "/filmmaking-project-video-thumbnail.jpg",
  },
  {
    id: 6,
    title: "Project Name Here",
    date: "20 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    videoUrl: "/filmmaking-project-video-thumbnail.jpg",
  },
]

const photographyProjects = [
  {
    id: 1,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: ["/photography-project-image-1.jpg", "/photography-project-image-2.jpg", "/photography-project-image-3.jpg"],
  },
  {
    id: 2,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: ["/photography-project-image-4.jpg", "/photography-project-image-5.jpg", "/photography-project-image-6.jpg"],
  },
  {
    id: 3,
    title: "Photography Project Name",
    date: "15 February, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie maximus elit et interdum. Donec vestibulum mollis dui et finibus.",
    images: ["/photography-project-image-7.jpg", "/photography-project-image-8.jpg", "/photography-project-image-9.jpg"],
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("filmmaking")

  return (
    <section id="projects" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-neutral-400 text-lg">Elevating your journey through design, film, and storytelling.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("filmmaking")}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
              activeTab === "filmmaking"
                ? "bg-white text-neutral-950"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            Filmmaking
          </button>
          <button
            onClick={() => setActiveTab("photography")}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
              activeTab === "photography"
                ? "bg-white text-neutral-950"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            Photography
          </button>
        </div>

        {/* Filmmaking Projects */}
        {activeTab === "filmmaking" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmmakingProjects.map((project) => (
              <Card key={project.id} className="bg-neutral-900 border-neutral-800 overflow-hidden">
                <div className="relative aspect-video">
                  <video
                    src={project.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                    poster={project.videoUrl}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Photography Projects */}
        {activeTab === "photography" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyProjects.map((project) => (
              <Card key={project.id} className="bg-neutral-900 border-neutral-800 overflow-hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Image ${index + 1}`}
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
