import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export default function HomePage() {

  return (
    <>
      <div className="flex justify-evenly items-center h-screen">
        <div className="flex-col flex items-center">
          <a href="/about">
            <TextGenerateEffect
              words={"Hi, I'm Mark"}
              className="text-8xl transform transition-transform duration-100 hover:scale-110"
            />
          </a>
        </div>
        <div className="flex-col flex items-center"></div>
      </div>
      <div>
        <div className="flex justify-center items-center p-4">
          <a href="/blog" className="text-2xl">
            <TextGenerateEffect
              words={"Check out my blog!"}
              className="transform transition-transform duration-100 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </>
  );
}
