"use client";
import React from "react";
import { Home, Image, Info, Book, Mail, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Scroll Parallax",
    url: "/scroll",
    icon: ImageOff,
  },
  {
    title: "Gallery",
    url: "/gallery",
    icon: Image,
  },
  // {
  //   title: "Testimonials",
  //   url: "/testimonials",
  //   icon: Quote,
  // },
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
  {
    title: "Contact Us",
    url: "/contact",
    icon: Mail,
  },
];

export default function SidebarMenu() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex h-screen max-w-sm bg-zinc-50 dark:bg-zinc-950 flex-col justify-between">
        <div className="flex flex-col px-12 py-10">
          <Link href="/">
            <h1 className="text-2xl font-bold">Ava Bennett</h1>
          </Link>{" "}
          <p className="text-sm">Photographer & Writer</p>
          <small className="text-sm font-medium leading-6 mt-4 lg:mt-10">
            Ava Bennett is a passionate photographer known for her ability to
            capture the beauty of life&apos;s fleeting moments.
          </small>
        </div>

        <div className="flex-1 flex flex-col justify-center items-start">
          <ul className="space-y-4 w-full px-12">
            {items.map((item) => (
              <li key={item.title} className="w-full">
                <a href={item.url} className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
          <Moon className="hidden h-5 w-5 dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
}
