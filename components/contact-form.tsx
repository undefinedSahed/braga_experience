"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          serviceType: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left side - Info with background */}
          <div
            className="relative rounded-b-xl lg:rounded-b-none lg:rounded-l-2xl overflow-hidden px-4 md:py-12 py-10 md:px-8 flex flex-col justify-center col-span-2 order-2 lg:order-1"
            style={{
              backgroundImage: `url(/contact-left.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-medium md:pr-6 text-white mb-6 font-acme">
                Our London Videography Services Deliver Creative and Engaging
                Content Tailored to You and Your Business.
              </h2>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Serving London, the UK, and Europe, we deliver creative
                videography and photography services designed to capture your
                vision and make your brand stand out.
              </p>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Did You Know? <br /> 84% of video marketers say video has
                directly helped increase sales. <br /> 83% of consumers are
                convinced to buy a product or service after watching a brand’s
                video. <br /> Users spend 88% more time on websites that feature
                video content.
              </p>
              <div className="space-y-3 text-white">
                <a
                  href="mailto:contact@bragaexperience.com"
                  className="flex items-center gap-2"
                >
                  <span className="font-semibold">
                    <Mail size={18} />
                  </span>{" "}
                  sales@bragaexperience.com
                </a>
                <a
                  href="tel:+44 07514-996775"
                  className="flex items-center gap-2"
                >
                  <span className="font-semibold">
                    <Phone size={18} />
                  </span>{" "}
                  +44 07514-996775
                </a>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">
                    {" "}
                    <MapPin size={18} />
                  </span>{" "}
                  London, UK & Europe
                </p>
                <p className="pt-3 text-lg font-semibold">Social Links</p>
                <div className="flex items-center space-x-2">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@lucasbraga1230"
                  >
                    <Youtube
                      size={25}
                      className="bg-gray-500 p-0.5 rounded-xs"
                    />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/bragaexp">
                    <Instagram
                      size={25}
                      className="bg-gray-500 p-0.5 rounded-xs"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/lucas-braga-50970a35a/"
                  >
                    <Linkedin
                      size={25}
                      className="bg-gray-500 p-0.5 rounded-xs"
                    />
                  </a>
                  <a target="_blank" href="tel:+44 07514-996775">
                    <Phone size={25} className="bg-gray-500 p-0.5 rounded-xs" />
                  </a>
                  <a target="_blank" href="mailto:contact@bragaexperience.com">
                    <Mail size={25} className="bg-gray-500 p-0.5 rounded-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form with background */}
          <div
            className="relative rounded-t-xl lg:rounded-t-none lg:rounded-r-2xl overflow-hidden px-4 md:py-12 py-10 md:px-8 col-span-3 order-1 lg:order-2 bg-orange-600"
            // style={{
            //   backgroundImage: `url(/contact-right.png)`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 font-acme">
                Get a Quote Within 2 Hours
              </h3>
              <p className="text-neutral-200 mb-8">
                Fast turnaround, tailored pricing for your project!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  className="border-0 rounded-none p-0 border-[#F8F9FA]/40 border-b-[1px] text-white placeholder:text-[#F8F9FA] h-12"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="border-0 rounded-none p-0 border-[#F8F9FA]/40 border-b-[1px] text-white placeholder:text-[#F8F9FA] h-12"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  required
                  className="border-0 rounded-none p-0 border-[#F8F9FA]/40 border-b-[1px] text-white placeholder:text-[#F8F9FA] h-12"
                />
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, serviceType: value })
                  }
                  required
                >
                  <SelectTrigger className="border-[#F8F9FA]/40 !h-12 !text-white w-full border-0 rounded-none bg-transparent p-0 border-b-[1px] placeholder:text-[#F8F9FA]">
                    <SelectValue placeholder="Type of Service" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="videography">Videography</SelectItem>
                    <SelectItem value="drone">Drone</SelectItem>
                    <SelectItem value="event-coverage">
                      Event Coverage
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="border-0 rounded-none p-0 border-[#F8F9FA]/40 border-b-[1px] text-white placeholder:text-[#F8F9FA] !h-12"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1F1F1F] text-white lg:mt-12 mt-6 h-12 hover:bg-neutral-200 hover:text-black"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>

              <p className="text-sm text-white mt-4">
                <span className="">* </span>Your personal details will be used
                in accordance with our
                <b className="text-white"> Privacy Policy</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
