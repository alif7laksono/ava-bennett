import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Capturing Emotions: Portrait Photography Tips
      </h1>
      <div className="text-center items-center my-4 lg:my-6">
        <Image
          src="/pexels-julieaagaard.jpg"
          alt="mathew-thomas pexels"
          width={0}
          height={0}
          className="object-top w-full h-auto rounded-lg"
          sizes="100vw"
          quality={75}
          style={{ aspectRatio: "300/400", objectFit: "cover" }}
        />
        <Link
          href="https://www.pexels.com/photo/woman-standing-on-the-cliff-1374064/"
          target="_blank"
        >
          <small className="mt-3 italic font-bold hover:opacity-50">
            Image by Pexels Julie Aagaard
          </small>
        </Link>
      </div>
      <div className="prose prose-zinc dark:prose-invert max-w-none mt-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Portrait photography is an art that goes beyond just capturing faces.
          It’s about telling stories, evoking emotions, and showcasing the
          personality of your subject. Mastering this skill can transform your
          photographs into powerful visual narratives.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Whether you’re shooting in a studio or outdoors, understanding your
          subject and building a connection with them is key to creating
          authentic portraits that resonate with viewers.
        </p>
        <h2>Why Emotions Matter in Portrait Photography</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Emotions are the soul of portrait photography. A photograph that
          captures genuine emotions not only tells a story but also creates a
          deeper connection with the audience. Smiles, laughter, introspection,
          or even a moment of vulnerability can turn an ordinary portrait into
          something truly memorable.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Building trust and making your subject comfortable is the foundation
          of capturing genuine emotions.
        </blockquote>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 my-6">
          Essential Tips for Stunning Portraits
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Build Rapport:</strong> Spend time talking to your subject
            before the shoot to make them feel at ease.
          </li>
          <li>
            <strong>Focus on the Eyes:</strong> The eyes are the windows to the
            soul, and sharp, well-lit eyes can make your portraits come alive.
          </li>
          <li>
            <strong>Experiment with Angles:</strong> Don’t be afraid to try
            different perspectives to find the most flattering angles for your
            subject.
          </li>
          <li>
            <strong>Play with Lighting:</strong> Soft, diffused light works best
            for portraits. Use reflectors or natural light for a gentle glow.
          </li>
        </ul>
        <small className="text-sm font-medium leading-none">
          Remember, the best portraits come from a combination of technical
          expertise and genuine human connection. Practice often and let your
          creativity flow.
        </small>
      </div>
    </div>
  );
}
