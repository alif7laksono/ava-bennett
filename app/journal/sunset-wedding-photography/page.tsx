import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="mt-4 lg:mt-8 px-2 lg:px-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center lg:text-left">
        The Magic of Sunset Wedding Photography
      </h1>
      <div className="text-center items-center my-4 lg:my-6">
        <Image
          src="/pexels-mathew-thomas.jpg"
          alt="mathew-thomas pexels"
          width={0}
          height={0}
          className="object-cover w-full h-96 rounded-lg"
          sizes="100vw"
          quality={75}
          style={{ aspectRatio: "300/400", objectFit: "cover" }}
        />
        <Link
          href="https://www.pexels.com/@mathew-thomas-318779/"
          target="_blank"
        >
          <small className="mt-3 italic font-bold hover:opacity-50">
            Image by pexels mathew-thomas
          </small>
        </Link>
      </div>
      <div className="prose prose-zinc dark:prose-invert max-w-none mt-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Weddings are magical moments filled with love, joy, and beautiful
          memories. One of the most enchanting times to capture these memories
          is during sunset. The golden hour offers a soft, warm light that adds
          a romantic glow to every frame, making it a favorite choice for
          wedding photographers.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Sunset wedding photography is not just about the light; it’s about the
          emotions that the light enhances. The natural hues of the setting sun
          bring out vibrant colors and create a dreamy atmosphere, perfect for
          capturing heartfelt moments between the couple.
        </p>
        <h2>Why Choose Sunset for Wedding Photography?</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Sunset provides a natural backdrop that cannot be replicated. The
          changing colors of the sky, from gold to orange to pink, offer a
          unique canvas for every shot. Couples often feel more relaxed and at
          ease during this time, resulting in genuine, candid photographs.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Additionally, the low angle of the sun helps avoid harsh shadows and
          brings a soft, even illumination, perfect for close-ups and wide shots
          alike.
        </blockquote>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 my-6">
          Tips for Capturing Stunning Sunset Wedding Photos
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Plan Ahead:</strong> Understand the timing of the sunset and
            plan your shots accordingly.
          </li>
          <li>
            <strong>Use Reflectors:</strong> Add a bit of fill light to ensure
            balanced exposure.
          </li>
          <li>
            <strong>Experiment:</strong> Try silhouettes, wide angles, and lens
            flares for creative compositions.
          </li>
        </ul>
        <small className="text-sm font-medium leading-none">
          Whether you’re a professional photographer or a couple planning your
          wedding, embracing the beauty of sunsets can elevate your wedding
          photography to a new level.
        </small>
      </div>
    </div>
  );
}
