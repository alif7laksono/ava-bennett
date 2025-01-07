import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// Define the image type
type ImageData = {
  id: number;
  name: string;
  source: string;
  img: string; // Change to string because we're using static paths
};

// Image data array
const imageList: ImageData[] = [
  {
    id: 1,
    name: "Fayson Merege",
    source: "Pexels",
    img: "/pexels-faysonmerege.jpg",
  },
  {
    id: 2,
    name: "Jesse Benatar",
    source: "Pexels",
    img: "/pexels-jesse-benatar.jpg",
  },
  {
    id: 3,
    name: "Quentin Guiot",
    source: "Pexels",
    img: "/pexels-quentin-guiot.jpg",
  },
  {
    id: 4,
    name: "Mathew Thomas",
    source: "Pexels",
    img: "/pexels-mathew-thomas.jpg",
  },
  {
    id: 5,
    name: "Suliman Sallehi",
    source: "Pexels",
    img: "/pexels-sulimansallehi.jpg",
  },
  {
    id: 6,
    name: "Juliea Agaard",
    source: "Pexels",
    img: "/pexels-julieaagaard.jpg",
  },
];

export default function Home() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6 bg-zinc-50 dark:bg-zinc-950">
      <Badge>Adventure</Badge>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-8">
        {imageList.map((image) => (
          <div key={image.id} className="overflow-hidden">
            {/* Display the image */}
            <Image
              src={image.img}
              alt={image.name}
              width={0}
              height={0}
              className="object-cover w-full h-auto rounded-lg"
              sizes="100vw"
              quality={75}
              style={{ aspectRatio: "auto", objectFit: "cover" }}
            />

            {/* Image name and source */}
            <div className="mt-2 text-center">
              <p className="text-sm font-bold">{image.name}</p>
              <p className="text-xs">{image.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
