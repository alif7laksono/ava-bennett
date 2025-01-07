import React from "react";
import { Badge } from "@/components/ui/badge";

export default function Journal() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <div className="mt-4 lg:mt-8">
        <Badge>Blog</Badge>
        <div className="max-w-3xl mt-2 lg:mt-4 border-b pb-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Magic of Golden Hour Photography
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Golden hour is a magical time for photographers. It’s when the light
            is soft and warm, creating dramatic effects and enhancing the
            natural beauty of your subjects. In this post, we’ll explore the
            best tips for capturing stunning golden hour photos.
          </p>
          <div className="flex justify-between items-center mt-2 lg:mt-4">
            <small className="text-sm font-medium leading-none">
              January 5, 2025
            </small>
            <small className="text-sm font-medium leading-none">
              Read More
            </small>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-8">
        <Badge>Blog</Badge>
        <div className="max-w-3xl mt-2 lg:mt-4 border-b pb-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Magic of Golden Hour Photography
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Golden hour is a magical time for photographers. It’s when the light
            is soft and warm, creating dramatic effects and enhancing the
            natural beauty of your subjects. In this post, we’ll explore the
            best tips for capturing stunning golden hour photos.
          </p>
          <div className="flex justify-between items-center mt-2 lg:mt-4">
            <small className="text-sm font-medium leading-none">
              January 5, 2025
            </small>
            <small className="text-sm font-medium leading-none">
              Read More
            </small>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-8">
        <Badge>Blog</Badge>
        <div className="max-w-3xl mt-2 lg:mt-4 border-b pb-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Magic of Golden Hour Photography
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Golden hour is a magical time for photographers. It’s when the light
            is soft and warm, creating dramatic effects and enhancing the
            natural beauty of your subjects. In this post, we’ll explore the
            best tips for capturing stunning golden hour photos.
          </p>
          <div className="flex justify-between items-center mt-2 lg:mt-4">
            <small className="text-sm font-medium leading-none">
              January 5, 2025
            </small>
            <small className="text-sm font-medium leading-none">
              Read More
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

// badge :category
// h1 :title
// p :article or paragraph
// small :date upload
// small :read more
