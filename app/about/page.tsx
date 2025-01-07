import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="mt-4 lg:mt-8 px-6 lg:px-12">
      {/* Hero Image */}
      <div className="relative w-full h-64 lg:h-96 overflow-hidden rounded-lg">
        <Image
          src="/pexels-urtimud.jpg"
          alt="Image by Fayson Merege - Pexels"
          fill={true}
          priority={true}
          quality={85}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Content Section */}
      <div className="relative w-full mt-8 text-center lg:text-left">
        <Badge>About</Badge>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Ava Bennett
        </h1>
        <p className="mt-6 text-lg leading-7">
          Ava Bennett is a passionate photographer known for her ability to
          capture the beauty of life&apos;s fleeting moments. Specializing in
          portrait and lifestyle photography, Ava creates timeless images that
          tell unique and heartfelt stories. With an eye for detail and a love
          for natural light, she brings a warm, authentic touch to every shot.
        </p>
      </div>

      {/* skills section */}
      <div className="mt-12">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Skills & Expertise
        </h2>
        <ul className="list-[square] my-6 ml-6 [&>li]:mt-2">
          <li>Portrait Photography</li>
          <li>Lifestyle & Editorial Shoots</li>
          <li>Event Photography</li>
          <li>Natural Light & Studio Work</li>
        </ul>
      </div>
    </div>
  );
}
