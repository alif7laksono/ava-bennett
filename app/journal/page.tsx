// app/journal/page.tsx

import React from "react";
import { Badge } from "@/components/ui/badge";

type BlogPost = {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Weddings",
    title: "The Magic of Sunset Wedding Photography",
    description: "Discover how sunsets create breathtaking wedding memories.",
    date: "January 1, 2025",
    link: "/journal/sunset-wedding-photography",
  },
  {
    id: 2,
    category: "Portraits",
    title: "Capturing Emotions: Portrait Photography Tips",
    description:
      "Learn how to bring out genuine emotions in portrait sessions.",
    date: "January 3, 2025",
    link: "/journal/portrait-tips",
  },
  {
    id: 3,
    category: "Travel",
    title: "Hidden Gems: Photographing Remote Locations",
    description: "Explore remote locations and capture their untouched beauty.",
    date: "January 5, 2025",
    link: "/journal/hidden-gems",
  },
  {
    id: 4,
    category: "Gear",
    title: "Top 5 Lenses for Stunning Photography",
    description: "A guide to choosing the best lenses for every occasion.",
    date: "January 7, 2025",
    link: "/journal/top-5-lenses",
  },
  {
    id: 5,
    category: "Events",
    title: "Behind the Scenes of Event Photography",
    description:
      "Tips and tricks for capturing unforgettable event photography moments.",
    date: "January 9, 2025",
    link: "/journal/event-photography",
  },
  {
    id: 6,
    category: "Tips & Tutorials",
    title: "Lighting 101: Mastering Studio Lights",
    description:
      "A beginner’s guide to mastering studio photography lighting techniques.",
    date: "January 11, 2025",
    link: "/journal/lighting-101",
  },
];

export default function Journal() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight mb-6">Journal</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className=" border rounded-lg hover:shadow-md transition p-6"
          >
            <Badge>{post.category}</Badge>
            <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {post.description}
            </p>
            <div className="flex justify-between items-center mt-4">
              <small className="text-sm font-medium leading-none">
                {" "}
                {post.date}
              </small>
              <a href={post.link} className="text-sm font-medium leading-none">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
