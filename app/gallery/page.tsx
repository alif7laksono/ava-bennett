"use client"
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Masonry from "react-masonry-css";

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
  const breakpointColumnsObj = {
    default: 3, // 3 columns on large screens
    1024: 2, // 2 columns on medium screens
    768: 1, // 1 column on small screens
  };
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <Badge>Gallery</Badge>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4 w-auto" // Custom masonry class
        columnClassName="pl-4 bg-clip-padding" // Space between columns
      >
        {imageList.map((image) => (
          <div key={image.id} className="relative group overflow-hidden my-4">
            <Image
              src={image.img}
              alt={image.name}
              width={0}
              height={0}
              className="object-cover w-full h-auto rounded-lg"
              sizes="100vw"
              quality={75}
              style={{ aspectRatio: "300/400", objectFit: "cover" }}
            />

            {/* Hover effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition duration-300">
              <p className="text-sm font-bold text-white">{image.name}</p>
              <p className="text-xs text-white">{image.source}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
