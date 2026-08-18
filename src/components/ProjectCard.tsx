import Image from "next/image";
import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  category: "uxui" | "otros";
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group flex flex-col gap-2 md:gap-6 w-full"
    >
      <div className="relative w-full aspect-[424/553] rounded-[16px] md:rounded-[30px] overflow-hidden bg-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="font-impact text-[18px] md:text-[40px] text-primary capitalize leading-none">
        {project.title}
      </h3>
      <div className="flex gap-1 md:gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-primary text-primary rounded-full px-[6px] py-[4px] md:px-[10px] md:py-[10px] text-[12px] md:text-[20px] font-neue capitalize leading-none"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
