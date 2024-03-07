import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-evenly items-center h-screen">
        <div className="flex-col flex items-center">
          <h1 className="text-8xl">Hi, I&apos;m Mark</h1>
        </div>
        <div className="flex-col flex items-center"></div>
      </div>
      <div>
        <div className="flex justify-center items-center p-4">
            <TextGenerateEffect words={"Check out my blog!"}/>
        </div>
      </div>
    </>
  );
}
