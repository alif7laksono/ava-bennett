import React from "react";
import { Home, Image, Info, Book, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function SidebarMenu() {
  return (
    <div>
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex h-screen max-w-sm bg-zinc-50 flex-col justify-between">
        <div className="flex flex-col px-6 py-10">
          <h1 className="text-2xl font-bold text-zinc-800">Ava Bennett</h1>
          <p className="text-sm text-zinc-600">Photographer & Writer</p>
          <small className="text-sm font-medium leading-6 mt-4 lg:mt-10">
            Ava Bennett is a passionate photographer known for her ability to
            capture the beauty of life&apos;s fleeting moments.
          </small>
        </div>

        <div className="flex-1 flex flex-col justify-center items-start">
          <ul className="space-y-4 w-full px-6">
            {items.map((item) => (
              <li key={item.title} className="w-full">
                <a
                  href={item.url}
                  className="flex items-center space-x-3 text-zinc-800 hover:text-zinc-600"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 px-6">
            <Link href="/contact">
              <Button variant="default">
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <footer className="flex items-center justify-start gap-2 px-6 py-10">
          <p className="text-sm text-zinc-500">© 2025 Website by</p>
          <Link
            href="https://github.com/alif7laksono"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 underline"
          >
            AlifLaksono
          </Link>
        </footer>
      </div>
    </div>
  );
}
