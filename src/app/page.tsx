import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const uxuiProjects = projects.filter((p) => p.category === "uxui");
const otrosProjects = projects.filter((p) => p.category === "otros");

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full aspect-[393/768] md:aspect-[1440/982] overflow-hidden">
        {/* Desktop hero image */}
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Larimar Muñoz"
            width={1880}
            height={1410}
            className="absolute w-[130%] h-[143%] -left-[24%] -top-[32%] max-w-none"
            priority
            sizes="100vw"
          />
        </div>

        {/* Mobile hero image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/images/hero-mobile.png"
            alt="Larimar Muñoz"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Hero content */}
        <div className="absolute left-[40%] top-[23%] w-[55%] md:left-[calc(50%+12px)] md:top-1/2 md:-translate-y-1/2 md:w-[412px] text-primary leading-[1]">
          <div className="flex flex-col font-neue font-extrabold capitalize">
            <span className="text-[15px] md:text-[20px]">UX/UI designer</span>
            <h1 className="text-[25px] md:text-[50px] leading-[1]">Larimar Muñoz</h1>
          </div>
          <div className="mt-1 md:mt-2 font-neue">
            <p className="text-[15px] md:text-[28.69px] capitalize">Barcelona · 1997</p>
            <p className="text-[10px] md:text-[20px] mt-1 md:mt-2">
              Diseñadora UX/UI con
              <br />
              foco en producto digital.
            </p>
          </div>
        </div>

        {/* Filter + Language */}
        <div className="absolute bottom-[20px] left-[20px] flex items-end gap-[72px] w-[353px] md:bottom-[30px] md:left-[calc(50%+12px)] md:gap-[166px] md:w-[583px]">
          {/* Arrow */}
          <div className="w-[48px] h-[48px] md:w-[76px] md:h-[76px] flex items-center justify-center text-primary">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>

          {/* Filter */}
          <div className="flex flex-col text-primary text-[25px] md:text-[35.833px] capitalize leading-tight">
            <span className="font-neue font-normal">UX/UI</span>
            <span className="font-neue font-extrabold">OTROS</span>
          </div>

          {/* Language */}
          <span className="font-neue font-extrabold text-primary text-[25px] md:text-[35.833px] capitalize">
            ES
          </span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="px-5 md:px-16 pt-0 pb-12 md:pb-20 scroll-mt-[16px]">
        <div className="max-w-[1312px] mx-auto">
          {/* Divider */}
          <div className="w-full h-px bg-primary mb-[40px] md:mb-[72px]" />

          {/* UX/UI Projects */}
          <div className="flex flex-col items-center gap-8 md:gap-14">
            <div className="text-center text-primary">
              <h2 className="font-impact text-[36px] md:text-[65px] uppercase">
                Mis proyectos
              </h2>
              <p className="font-neue text-[18px] md:text-[30px] capitalize">UX/UI</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[56px] w-full">
              {uxuiProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-primary my-[40px] md:my-[72px]" />

          {/* Otros Projects */}
          <div className="flex flex-col items-center gap-8 md:gap-14">
            <div className="text-center text-primary">
              <h2 className="font-impact text-[36px] md:text-[65px] uppercase">
                Otros proyectos
              </h2>
              <p className="font-neue text-[18px] md:text-[30px] capitalize">Gráfico</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[56px] w-full">
              {otrosProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
