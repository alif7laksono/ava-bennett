import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hidden Gems: Photographing Remote Locations
      </h1>
      <div className="text-center items-center my-4 lg:my-6">
        <Image
          src="/pexels-saya-omar.jpg"
          alt="saya-omar pexels"
          width={0}
          height={0}
          className="object-cover w-full h-auto rounded-lg"
          sizes="100vw"
          quality={75}
          style={{ aspectRatio: "300/400", objectFit: "cover" }}
        />
        <Link
          href="https://www.pexels.com/id-id/@saya-omar-689620810/"
          target="_blank"
        >
          <small className="mt-3 italic font-bold hover:opacity-50">
            Image by pexels saya-omar
          </small>
        </Link>
      </div>
      <div className="prose prose-zinc dark:prose-invert max-w-none mt-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Exploring remote locations offers a unique opportunity to capture
          breathtaking images of unspoiled landscapes and hidden treasures.
          These hidden gems, far from bustling cities, provide a sense of
          serenity and raw beauty that makes them perfect for photography
          enthusiasts.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          While traveling to these locations can be challenging, the rewards are
          worth the effort. You’ll have the chance to showcase the untouched
          beauty of the world through your lens, creating a visual story that
          resonates with viewers.
        </p>
        <h2>Why Remote Locations Stand Out</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Remote locations offer a sense of exclusivity and tranquility. The
          lack of crowds allows photographers to experiment freely, capturing
          moments without distractions. Additionally, these areas often feature
          unique landscapes, wildlife, and cultural elements that are not found
          in more accessible destinations.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Patience and preparation are key when photographing remote locations.
          The unpredictable nature of these environments adds to their charm.
        </blockquote>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 my-6">
          Tips for Photographing Hidden Gems
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Research Your Destination:</strong> Understand the
            location’s terrain, weather, and accessibility to plan your shoot
            effectively.
          </li>
          <li>
            <strong>Pack Light and Smart:</strong> Carry only essential
            equipment, including a sturdy tripod, versatile lenses, and spare
            batteries.
          </li>
          <li>
            <strong>Be Respectful:</strong> Respect the local environment and
            culture, leaving no trace behind as you explore.
          </li>
          <li>
            <strong>Stay Safe:</strong> Inform someone of your plans and carry
            emergency supplies in case of unforeseen circumstances.
          </li>
        </ul>
        <small className="text-sm font-medium leading-none">
          Capturing the beauty of remote locations requires patience,
          creativity, and a sense of adventure. Let these hidden gems inspire
          your next photographic journey.
        </small>
      </div>
    </div>
  );
}
