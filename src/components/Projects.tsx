import BentoHeader from "./BentoHeader";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

const projects = [
  {
    title: "WashU Course Watch",
    description: "A website to help WashU students sign up for classes",
    className: "bg-gradient-to-r from-cyan-950 to-zinc-800 h-full justify-end",
    header: BentoHeader({
      image: "/course_washu.gif",
      width: 400,
    }),
    href: "/projects/course-watch",
  },
  {
    title: "eBird CBC",
    description:
      "A website to help Christmas Bird Count compilers compile CBC data from eBird",
    className: "bg-gradient-to-r from-cyan-950 to-zinc-800 h-full justify-end",
    header: BentoHeader({
      image: "/ebirdcbc.png",
      width: 325,
    }),
    href: "/projects/ebird-cbc",
  },
];

export default function Projects() {
  return (
    <div className="flex mx-10 flex-col xl:mx-60 lg:mx-40 md:mx-20">
      <h1 className="text-4xl py-4">Projects</h1>
      <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 items-center p-10">
        {projects.map((project, i) => (
          <a href={project.href} key={i} className="h-full">
            <BentoGridItem
              key={i}
              className={project.className}
              title={project.title}
              description={project.description}
              header={project.header}
            ></BentoGridItem>
          </a>
        ))}
      </BentoGrid>
    </div>
  );
}
