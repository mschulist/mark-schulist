import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

const projects = [
  {
    title: "WashU Course Watch",
    description: "A website to help WashU students sign up for classes",
    className: "bg-gradient-to-r from-cyan-950 to-zinc-800 h-full justify-end",
    header: (
      <Image
        src={"/course_washu.gif"}
        alt=""
        height={0}
        width={400}
        className="rounded-lg"
      />
    ),
    href: "/projects/course-watch",
  },
  {
    title: "eBird CBC",
    description: "A website to help Christmas Bird Count compilers compile CBC data from eBird",
    className: "bg-gradient-to-r from-cyan-950 to-zinc-800 h-full justify-end",
    header: (
      <Image
        src={"/ebirdcbc.png"}
        alt=""
        height={0}
        width={325}
        className="rounded-lg"
      />
    ),
    href: "/projects/ebird-cbc",
  }
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
