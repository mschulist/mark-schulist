"use client";
import React, { use } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import BentoHeader from "./BentoHeader";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    title: "The Metropolis Algorithm",
    description: "Starting to understand MCMC",
    className:
      "md:col-span-1 bg-gradient-to-r from-cyan-950 to-zinc-800 h-full",
    header: BentoHeader({
      image:
        "https://f005.backblazeb2.com/file/mark-schulist/blogs/metropolis/metropolis_clip.gif",
      width: 400,
    }),
    href: "/blogs/metropolis",
  },
  {
    title: "Typst",
    description: "Why I love Typst",
    className:
      "md:col-span-1 bg-gradient-to-r from-cyan-950 to-zinc-800 h-full",
    header: BentoHeader({
      image:
        "https://f005.backblazeb2.com/file/mark-schulist/blogs/typst/typst_comp.gif",
      width: 800,
    }),
    href: "/blogs/typst",
  },
  {
    title: "Exploring Julia",
    description: "A better way to do data science?",
    className:
      "md:col-span-1 bg-gradient-to-r from-cyan-950 to-stone-800 h-full",
    header: BentoHeader({
      image: "https://julialang.org/assets/infra/logo.svg",
      width: 350,
    }),
    href: "/blogs/julia",
  },
  {
    title: "Understanding the Gradient",
    description: "An exploration of minimizing function using gradient descent",
    className:
      "md:col-span-1 bg-gradient-to-r from-cyan-950 to-zinc-800 h-full",
    header: BentoHeader({
      image:
        "https://f005.backblazeb2.com/file/mark-schulist/blogs/gradient/gradient.gif",
      width: 400,
    }),
    href: "blogs/gradient",
  },
  {
    title: "Neural Networks",
    description: "Understanding neural networks with Pytorch",
    className:
      "md:col-span-1 bg-gradient-to-r from-cyan-950 to-stone-800 h-full",
    header: BentoHeader({
      image:
        "https://f005.backblazeb2.com/file/mark-schulist/blogs/neural_network/nn.png",
      width: 350,
    }),
    href: "/blogs/neuralNetwork",
  },
  {
    title: "Convolutional Neural Networks",
    description: "Moving beyond fully connected layers",
    className:
      "md:col-span-1 bg-gradient-to-r from-cyan-950 to-zinc-800 h-full",
    header: BentoHeader({
      image:
        "https://f005.backblazeb2.com/file/mark-schulist/blogs/cnn/cnn.png",
      width: 600,
    }),
    href: "/blogs/cnn",
  },
];

const BlogLanding: React.FC = () => {
  const router = useRouter();
  blogPosts.forEach((post) => {
    router.prefetch(post.href);
  });
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 items-center p-10">
      {blogPosts.map((post, i) => (
        <a
          onClick={() => router.push(post.href)}
          key={i}
          className="h-full content-start cursor-pointer"
        >
          <BentoGridItem
            key={i}
            className={post.className}
            title={post.title}
            description={post.description}
            header={post.header}
          ></BentoGridItem>
        </a>
      ))}
    </BentoGrid>
  );
};

export default BlogLanding;
