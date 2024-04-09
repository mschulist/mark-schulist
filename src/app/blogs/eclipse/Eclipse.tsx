/* eslint-disable react/no-unescaped-entities */
import react from "react";
import Image from "next/image";
import Link from "next/link";

export default function Eclipse() {
  return (
    <div className="flex flex-col gap-4 mx-[5vw] md:mx-[10vw] my-2 flex-wrap">
      <h1 className="text-4xl self-center">The Total Solar Eclipse</h1>
      <h2 className="text-2xl self-center">April 8, 2024</h2>
      <Link
        href="https://f005.backblazeb2.com/file/mark-schulist/blogs/eclipse/eclipse_all.jpg"
        className="cursor-default"
      >
        <Image
          src="https://f005.backblazeb2.com/file/mark-schulist/blogs/eclipse/eclipse_all.jpg"
          alt="Eclipse"
          width={4000}
          height={800}
          className="rounded-lg"
        />
      </Link>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-items-stretch">
        <div className="flex-grow">
          <Link
            href="https://f005.backblazeb2.com/file/mark-schulist/blogs/eclipse/brighter_eclipse.jpg"
            className="cursor-default"
          >
            <Image
              src="https://f005.backblazeb2.com/file/mark-schulist/blogs/eclipse/brighter_eclipse.jpg"
              alt="Eclipse"
              width={600}
              height={400}
              quality={100}
              className="rounded-lg min-w-full"
            />
          </Link>
        </div>
        <div className="flex-grow">
          <Link
            href="https://f005.backblazeb2.com/file/mark-schulist/blogs/eclipse/darker_eclipse.jpg"
            className="cursor-default"
          >
            <Image
              src="https://f005.backblazeb2.com/file/mark-schulist/blogs/eclipse/darker_eclipse.jpg"
              alt="Eclipse"
              width={600}
              height={400}
              quality={100}
              className="rounded-lg min-w-full"
            />
          </Link>
        </div>
      </div>
      <div className="text-lg">
        Totality is unlike anything. Words cannot describe the insanity that
        occurs when the moon entirely blocks the sun. Leading up totality, the
        sky begins to slowly darken, the wind picks up, and the temperature
        drops a few degrees. At 99%, excitment resonates throughout everyone
        standing nearby, awaiting totality. And then BAM! The last sliver of
        light dissappears, and the sky turns dark. The corona, the sun's outer
        atmosphere, becomes visible. Other planets and stars appear, and there's
        the most beautiful sunset in every direction. Pictures only capture a
        fraction of the true beauty of totality. Looking up at the sky, you see
        what can only be described as a black hole surrounded by a ring of
        light. Looking through binoculars, you witness the bright pink and
        orange solar flares, unlike anything you've ever seen before. You're
        staring at the sun!! Just as you've taken in the magnificance of the
        corona, the sun peaks out from behind the moon, and the sky rapidly
        brightens. It's all over. But you're left with a memory that you will
        certainly never forget.
      </div>
      <div className="text-lg">
        I went to see the solar eclipse in Carbondale, IL. We went to Southern
        Illnois University, where thousands of people gathered to witness the
        eclipse. Carbondale was in the path of totality for the last eclipse in
        2017, meaning it had 2 eclipses in 7 years, absolutely insane!
      </div>
      <div className="text-lg">
        As for the photos, I took them with my Nikon D500, a 500mm f5.6 PF, and
        a 1.4x teleconveter. I had a solar filter on the lens, and I used a
        remote shutter release. The shutter release ended up serving two
        purposes: reducing camera shake and allowing me to enjoy the eclipse
        without worrying (too much) about my camera.
      </div>
      <div className="flex-col lg:flex-row flex gap-4 justify-center">
        <div className="flex flex-grow justify-center">
          <Image
            src="https://imgs.xkcd.com/comics/eclipse_coolness.png"
            alt=""
            width={600}
            height={500}
            className="self-center rounded-lg max-w-full"
          />
        </div>
        <div className="flex flex-grow justify-center">
          <Image
            src="https://imgs.xkcd.com/comics/eclipse_clouds.png"
            alt=""
            width={600}
            height={500}
            className="self-center rounded-lg max-w-full"
          />
        </div>
        <div className="flex flex-grow justify-center">
          <Image
            src="https://imgs.xkcd.com/comics/types_of_eclipse_photo.png"
            alt=""
            width={600}
            height={500}
            className="self-center rounded-lg max-w-full"
          />
        </div>
      </div>
      <div className="text-lg self-center mb-4">
        Of course, I can't forget the most important part, the XKCDs!
      </div>
    </div>
  );
}
