import React from "react";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const blogPosts = [
    {
        title: "The Metropolis Algorithm",
        description: "Starting to understand MCMC.",
        className: "md:col-span-2 bg-gradient-to-r from-zinc-700 to-zinc-800",
        header: <Image src={"/metropolis_posterior.png"} alt="" height={0} width={400} className="h-4/6 object-contain"/>,
        href: "/blogs/metropolis",
    },
];

const BlogLanding: React.FC = () => {
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-4">
      {blogPosts.map((post, i) => (
        <a href={post.href} key={i}>
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
