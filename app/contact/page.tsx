import React from "react";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaPinterestP, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <Badge>Contact Ava Bennett</Badge>
      <p className="leading-7 mt-4">
        At Ava Bennett Photography, every frame tells a story, and every story
        deserves to be shared. Whether you&apos;re looking to capture your
        special moments, collaborate on creative projects, or simply have
        questions about our services, I’m here to help.
      </p>

      {/* Contact Info */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <MapPin className="w-5 h-5 text-gray-500" />
          <p className="text-sm font-medium leading-none">
            123 Creative Street, Art District, New York, NY
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Mail className="w-5 h-5 text-gray-500" />
          <p className="text-sm font-medium leading-none">
            hello@avabennett.com
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 text-gray-500" />
          <p className="text-sm font-medium leading-none">+1 (555) 123-4567</p>
        </div>

        <div className="flex items-center space-x-4">
          <Globe className="w-5 h-5 text-gray-500" />
          <p className="text-sm font-medium leading-none">www.avabennett.com</p>
        </div>
      </div>

      {/* Form */}
      <div className="mt-8">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Let&apos;s Collaborate
        </h2>
        <p className="leading-7 mt-2">
          Looking for a photographer for your wedding, event, portrait session,
          or commercial shoot? Let&apos;s create something beautiful together.
          Fill out the form below, and I&apos;ll get back to you within 24–48
          hours.
        </p>
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Follow Me on Social Media</h2>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="flex items-center space-x-2">
            <FaInstagram className="w-5 h-5 text-gray-500" />
            <span>Instagram</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaTwitter className="w-5 h-5 text-gray-500" />
            <span>Twitter</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaPinterestP className="w-5 h-5 text-gray-500" />
            <span>Pinterest</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaGlobe className="w-5 h-5 text-gray-500" />
            <span>Pexels</span>
          </a>
        </div>
      </div>

      {/* Office Hours */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Office Hours</h2>
        <p className="leading-7 mt-2">Monday – Friday: 9 AM – 5 PM</p>
        <p className="leading-7">Saturday: By Appointment Only</p>
        <p className="leading-7">Sunday: Closed</p>
      </div>
    </div>
  );
}
