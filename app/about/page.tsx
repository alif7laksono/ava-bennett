import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import { Camera, Users, Calendar, Sun } from "lucide-react";

type Skill = {
  title: string;
  expertise: string;
  icon: React.ReactNode;
  description: string;
};

const skills: Skill[] = [
  {
    title: "Portrait Photography",
    expertise: "Expert",
    icon: <Camera className="w-6 h-6 text-green-500" />,
    description:
      "Specialized in capturing professional and personal portraits.",
  },
  {
    title: "Lifestyle Shoots",
    expertise: "Advanced",
    icon: <Users className="w-6 h-6 text-blue-500" />,
    description:
      "Experienced in creating visually compelling lifestyle images.",
  },
  {
    title: "Event Photography",
    expertise: "Expert",
    icon: <Calendar className="w-6 h-6 text-orange-500" />,
    description: "Documenting memorable moments with precision and creativity.",
  },
  {
    title: "Natural Light Work",
    expertise: "Advanced",
    icon: <Sun className="w-6 h-6 text-purple-500" />,
    description: "Proficient in utilizing natural light and studio setups.",
  },
];

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
      <div className="relative w-full text-center lg:text-left mt-8 lg:mt-12">
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

      <div className="rounded-lg mt-8 lg:mt-12">
        <div className="flex flex-col text-center justify-center items-start mx-auto">
          <Badge>Skills & Expertise</Badge>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4 lg:mt-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center py-4 px-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg"
            >
              <div className="mb-4">{skill.icon}</div>
              <h2 className="scroll-m-20 border-b pb-2 text-sm lg:text-base font-semibold tracking-tight first:mt-0">
                {skill.title}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold">
                {skill.expertise}
              </p>
              <small className="leading-7 [&:not(:first-child)]:mt-6">
                {skill.description}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
