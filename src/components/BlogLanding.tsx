import React from "react";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";


const blogPosts = [
    {
        title: "The Metropolis Algorithm",
        description: "Starting to understand MCMC",
        className: "md:col-span-2 bg-gradient-to-r from-zinc-700 to-zinc-800",
        header: <Image src={"/metropolis_clip.gif"} alt="" height={0} width={400} className="h-4/6 rounded-lg"/>,
        href: "/blogs/metropolis",
    },
    {
      title: "Typst",
      description: "Why I love Typst",
      className: "md:col-span-1 bg-gradient-to-r from-zinc-700 to-zinc-800",
      header: <Image src={"/typst_comp.gif"} alt="" height={0} width={800} className="h-4/6 rounded-lg"/>,
      href: "/blogs/typst",
    },
    {
      title: "Exploring Julia",
      description: "A better way to do data science?",
      className: "md:col-span-1 bg-gradient-to-r from-zinc-700 to-zinc-800",
      header: <Image src={"https://julialang.org/assets/infra/logo.svg"} alt="" height={0} width={400} className="h-4/6 rounded-lg"/>,
      href: "/blogs/julia",
    },
    {
      title: "Understanding the Gradient",
      description: "An exploration of minimizing function using gradient descent",
      className: "md:col-span-1 bg-gradient-to-r from-zinc-700 to-zinc-800",
      header: <Image src="/gradient.gif" alt="" width={444.5} height={0} className="rounded-lg"/>,
      href: "blogs/gradient"
    }
];

const BlogLanding: React.FC = () => {
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 items-baseline p-10">
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
