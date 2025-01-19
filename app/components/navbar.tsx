"use client";

import React, { useState } from "react";
import { Home, Image, Info, Book, Menu, X } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Gallery",
    url: "/gallery",
    icon: Image,
  },
  {
    title: "Testimonials",
    url: "/testimonials",
    icon: Image,
  },
  {
    title: "Scroll Parallax",
    url: "/scroll",
    icon: Image,
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
  {
    title: "Journal",
    url: "/journal",
    icon: Book,
  },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative shadow-md z-50">
      {/* style these divs. make them side by side */}
      <div className="flex justify-between items-start">
        {/* Right side (Menu Button) */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setOpen(!isOpen)}
            className="p-2 rounded-md bg-transparent transition duration-300 z-50 hover:rotate-180"
          >
            {isOpen ? (
              <X className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>{" "}
         
        </div>

        {/* Left side (Profile Info) */}
        <div className="p-4 lg:hidden">
          <h1 className="text-2xl font-bold">Ava Bennett</h1>
          <p className="text-sm">Photographer & Writer</p>
        </div>
      </div>

      {/* Full-Screen Dropdown Menu */}
      <div
        className={`fixed inset-0 bg-zinc-900 bg-opacity-95 text-zinc-200 transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center gap-8 h-full">
          {items.map((item) => (
            <Link
              href={item.url}
              key={item.title}
              passHref
              className="flex items-center gap-4 text-3xl font-medium hover:text-primary transition duration-300"
              onClick={() => setOpen(false)}
            >
              <item.icon className="w-8 h-8" />
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
