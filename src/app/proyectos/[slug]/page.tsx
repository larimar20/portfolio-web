import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/projectDetails";
import { notFound } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";
import ImageVideoOverlay from "@/components/ImageVideoOverlay";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: `${project.title} — Larimar Muñoz`,
    description: `Caso de estudio: ${project.title}`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const detail = projectDetails[slug];

  // Proyecto sin contenido detallado aún
  if (!detail) {
    return (
      <div className="pt-[120px] px-16">
        <div className="max-w-[1312px] mx-auto">
          <h1 className="font-impact text-[65px] text-primary uppercase mb-8">
            {project.title}
          </h1>
          <div className="flex gap-2 mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-primary text-primary rounded-full px-[10px] py-[10px] text-[20px] font-neue capitalize leading-none"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-primary font-neue text-[24px]">
            <p>Contenido del proyecto en construcción.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full h-[982px]">
        {/* Right: Hero Image — from top of page to bottom of hero */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image
            src={detail.heroImage}
            alt={detail.title}
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>

        {/* Left: Text */}
        <div className="relative h-full px-16">
          <div className="max-w-[1312px] mx-auto h-full flex items-center">
            <div className="w-[580px] flex flex-col items-end justify-center">
              <div className="w-[378px] flex flex-col gap-[8px] items-end">
                <div className="w-full text-right text-primary font-neue font-extrabold leading-[1]">
                  <p className="text-[20px]">{detail.year}</p>
                  <p className="text-[50px] capitalize">{detail.title}</p>
                </div>
                <p className="w-full text-right text-primary font-neue text-[20px] leading-[1]">
                  {detail.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-16">
        <div className="max-w-[1312px] mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-primary" />

        {/* Sobre el Proyecto */}
        <section className="flex flex-col gap-[24px] mt-[72px]">
          <h2 className="text-primary font-neue font-extrabold text-[40px] capitalize">
            Sobre el proyecto
          </h2>
          <div className="w-[647px] p-[10px]">
            <div className="text-primary font-neue text-[17px] leading-normal flex flex-col gap-4">
              {detail.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-primary mt-[72px]" />

        {/* Gallery */}
        <section className="flex flex-col gap-[24px] mt-[72px] pb-[80px]">
          {detail.gallery.map((row, i) => {
            if (row.type === "video" && row.video) {
              return (
                <VideoPlayer
                  key={i}
                  src={row.video.src}
                  alt={row.video.alt}
                  theme={row.video.theme}
                />
              );
            }

            if (row.type === "triple" && row.images) {
              return (
                <div key={i} className="flex flex-col gap-[24px] mt-[90px]">
                  {row.title && (
                    <h3 className="text-primary font-neue font-extrabold text-[40px] capitalize">
                      {row.title}
                    </h3>
                  )}
                  <div
                    className="flex gap-[40px] overflow-x-auto scrollbar-hide"
                    style={{
                      marginRight: "calc(-50vw + 50%)",
                      scrollSnapType: "x mandatory",
                    }}
                  >
                    {row.images.map((img, j) => {
                      const content = (
                        <div className="flex flex-col gap-[8px]" style={{ width: 486, scrollSnapAlign: "start" }}>
                          <div className="relative overflow-hidden" style={{ height: 371 }}>
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                              sizes="486px"
                            />
                          </div>
                          {img.label && (
                            <p className="text-primary font-neue text-[14px]">{img.label}</p>
                          )}
                        </div>
                      );
                      if (img.link) {
                        return (
                          <Link key={j} href={img.link} className="flex-shrink-0 hover:opacity-80 transition-opacity">
                            {content}
                          </Link>
                        );
                      }
                      return <div key={j} className="flex-shrink-0">{content}</div>;
                    })}
                  </div>
                </div>
              );
            }

            if (row.type === "full" && row.images) {
              const h = row.height ?? 491;
              return (
                <div key={i} className="relative w-full overflow-hidden" style={{ height: h }}>
                  <Image
                    src={row.images[0].src}
                    alt={row.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="1312px"
                  />
                </div>
              );
            }

            // Split: two images side by side
            const splitH = row.height ?? 491;
            return (
              <div key={i} className="flex gap-[23px]">
                {row.images?.map((img, j) => {
                  // If this is the last image and the row has video overlay data
                  const hasOverlay = j === (row.images!.length - 1) && row.video && row.videoPosition;
                  if (hasOverlay) {
                    return (
                      <div key={j} className="relative flex-1 overflow-hidden" style={{ height: splitH }}>
                        <ImageVideoOverlay
                          imageSrc={img.src}
                          imageAlt={img.alt}
                          videoSrc={row.video!.src}
                          videoAlt={row.video!.alt}
                          videoPosition={row.videoPosition!}
                        />
                      </div>
                    );
                  }
                  return (
                    <div key={j} className="relative flex-1 overflow-hidden" style={{ height: splitH }}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="644px"
                      />
                    </div>
                  );
                })}
                {/* Standalone video next to images (no overlay) */}
                {row.video && !row.videoPosition && (
                  <div className="flex-1 overflow-hidden" style={{ height: splitH }}>
                    <VideoPlayer src={row.video.src} alt={row.video.alt} theme={row.video.theme} fit="contain" />
                  </div>
                )}
              </div>
            );
          })}
        </section>
        </div>
      </div>
    </div>
  );
}
