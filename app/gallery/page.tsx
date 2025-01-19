"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Masonry from "react-masonry-css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Define the image type
type ImageData = {
  id: number;
  name: string;
  source: string;
  img: string; // Static paths for images
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
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showPrevious = () => {
    setCurrentIndex((prev) =>
      prev !== null ? (prev === 0 ? imageList.length - 1 : prev - 1) : null
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev !== null ? (prev === imageList.length - 1 ? 0 : prev + 1) : null
    );
  };

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
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {imageList.map((image, index) => (
          <div
            key={image.id}
            className="relative group overflow-hidden my-4 cursor-zoom-in"
            onClick={() => openImage(index)}
          >
            {/* Image */}
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

      {/* Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-xl p-2 bg-black bg-opacity-50 rounded-full z-50"
          >
            <X />
          </button>
          <button
            onClick={showPrevious}
            className="absolute left-4 text-white p-2 bg-black bg-opacity-50 rounded-full z-50"
          >
            <ChevronLeft />
          </button>
          {/* Image */}
          <div className="flex justify-center items-center w-auto h-auto">
            <Image
              src={imageList[currentIndex].img}
              alt={imageList[currentIndex].name}
              fill
              className="object-contain rounded-lg p-10"
              sizes="100vw"
            />
          </div>
          <button
            onClick={showNext}
            className="absolute right-4 text-white p-2 bg-black bg-opacity-50 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
