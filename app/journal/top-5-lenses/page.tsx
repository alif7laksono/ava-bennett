import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopLenses() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Top 5 Lenses for Stunning Photography
      </h1>
      <div className="text-center items-center my-4 lg:my-6">
        <Image
          src="/pexels-quentin-martinez.jpg"
          alt="quentin-martinez pexels"
          width={0}
          height={0}
          className="object-cover w-full h-auto rounded-lg"
          sizes="100vw"
          quality={75}
          style={{ aspectRatio: "300/400", objectFit: "cover" }}
        />
        <Link
          href="https://www.pexels.com/@quentin-martinez-2147503099/"
          target="_blank"
        >
          <small className="mt-3 italic font-bold hover:opacity-50">
            Image by pexels quentin-martinez
          </small>
        </Link>
      </div>
      <div className="prose prose-zinc dark:prose-invert max-w-none mt-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Choosing the right lens can make a significant difference in your
          photography. Whether you’re capturing portraits, landscapes, or
          events, the right lens helps you bring your vision to life and adds a
          professional touch to your images.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          With countless options available, finding the perfect lens can be
          overwhelming. This guide highlights the top five lenses that are
          versatile, reliable, and designed to enhance your photography
          experience.
        </p>
        <h2>Why Lenses Matter in Photography</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A lens determines how light enters the camera and interacts with the
          sensor. The quality of the glass, aperture, and focal length all play
          a crucial role in achieving sharp, vibrant images. Investing in a good
          lens is essential for photographers at any level.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          The right lens is an extension of your creativity, enabling you to
          tell your story with precision and style.
        </blockquote>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 my-6">
          Top 5 Lenses Every Photographer Should Consider
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>24-70mm f/2.8 Zoom Lens:</strong> A versatile choice for a
            wide range of photography styles, from landscapes to events.
          </li>
          <li>
            <strong>70-200mm f/2.8 Telephoto Lens:</strong> Ideal for wildlife,
            sports, and capturing subjects from a distance.
          </li>
          <li>
            <strong>16-35mm f/4 Wide-Angle Lens:</strong> Excellent for
            landscapes, architecture, and creating dramatic perspectives.
          </li>
          <li>
            <strong>85mm f/1.4 Portrait Lens:</strong> A favorite for portrait
            photographers, offering stunning background bokeh and sharp details.
          </li>
        </ul>
        <small className="text-sm font-medium leading-none">
          Investing in quality lenses tailored to your photography style can
          elevate your work and help you create images that truly stand out.
        </small>
      </div>
    </div>
  );
}
