"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    serviceType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          serviceType: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left side - Info with background */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col justify-center"
            style={{
              backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%204-Sb5rHuQWDLVqCuyRniBmIawiQUdGCl.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our London Videography Services Deliver Creative and Engaging Content Tailored to Your Business
              </h2>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Elevate your brand with professional media campaigns. We specialize in corporate video production, brand
                storytelling, product and event coverage, and team is equipped to bring your vision to life.
              </p>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Based in London, we offer our services throughout the UK and across Europe, and team is equipped to
                bring your vision to life.
              </p>
              <div className="space-y-3 text-white">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📧</span> contact@bragaexperience.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📱</span> +44 7123 456789
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📍</span> London, UK & Europe
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form with background */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 md:p-12"
            style={{
              backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%205-l4JnL9iPjiqKeySL8HBAQ16rQOX5Fl.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Get a Quote Within 2 Hours</h3>
              <p className="text-neutral-300 mb-8">Fast turnaround, tailored pricing for your project!</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  required
                  className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500"
                />
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  required
                >
                  <SelectTrigger className="bg-neutral-900/80 border-neutral-700 text-white">
                    <SelectValue placeholder="Type of Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="videography">Videography</SelectItem>
                    <SelectItem value="drone">Drone</SelectItem>
                    <SelectItem value="event-coverage">Event Coverage</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-neutral-950 hover:bg-neutral-200"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>

              <p className="text-xs text-neutral-400 mt-4">
                *Your personal details will be used in accordance with our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
