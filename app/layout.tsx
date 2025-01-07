import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarMenu from "@/app/components/sidebarMenu";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ava Bennett Photographer",
  description: "Where Every Picture Tells Your Story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 flex flex-col lg:flex-row`}
        suppressHydrationWarning
      >
        <div className="flex h-screen w-screen">
          <div className="max-w-xs bg-white">
            <SidebarMenu />
          </div>
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="flex-1 p-6 overflow-y-auto">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
