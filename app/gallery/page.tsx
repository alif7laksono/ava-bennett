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
    name: "Quentin Martinez",
    source: "Pexels",
    img: "/pexels-quentin-martinez.jpg",
  },
  {
    id: 5,
    name: "Saya Omar",
    source: "Pexels",
    img: "/pexels-saya-omar.jpg",
  },
  {
    id: 6,
    name: "Urti Mud",
    source: "Pexels",
    img: "/pexels-urtimud.jpg",
  },
];

export default function Gallery() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <Badge>Adventure</Badge>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-8">
        {imageList.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden"
            style={{ height: "auto" }}
          >
            {/* Display the image */}
            <Image
              src={image.img}
              alt={image.name}
              width={0}
              height={0}
              className="object-cover w-full h-auto rounded-lg"
              sizes="100vw"
              quality={75}
              // style={{ width: '100%', height: 'auto' }}
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />

            {/* Hover effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition duration-300">
              <p className="text-sm font-bold text-white">{image.name}</p>
              <p className="text-xs text-white">{image.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
