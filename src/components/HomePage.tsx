"use client"
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-evenly items-center h-screen">
        <div className="flex-col flex items-center">
          <button onClick={() => router.push("/about")}>
            <TextGenerateEffect
              words={"Hi, I'm Mark"}
              className="text-8xl transform transition-transform duration-100 hover:scale-110"
            />
          </button>
        </div>
        <div className="flex-col flex items-center"></div>
      </div>
      <div>
        <div className="flex justify-center items-center p-4">
        <button onClick={() => router.push("/blog")}>
            <TextGenerateEffect
              words={"Check out my blog!"}
              className="transform transition-transform duration-100 hover:scale-110"
            />
          </button>
        </div>
      </div>
    </>
  );
}
