import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Photography",
    image: "/professional-photography-service.jpg",
  },
  {
    id: 2,
    title: "Videography",
    image: "/professional-videography-service.jpg",
  },
  {
    id: 3,
    title: "Drone",
    image: "/professional-drone-aerial-service.jpg",
  },
  {
    id: 4,
    title: "Event Coverage",
    image: "/professional-event-coverage-service.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-neutral-400 text-lg">Creative strategies designed to elevate your brand and vision.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="bg-neutral-950 border-neutral-800 overflow-hidden group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
