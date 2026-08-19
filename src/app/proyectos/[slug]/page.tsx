import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/projectDetails";
import { notFound } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";
import ImageVideoOverlay from "@/components/ImageVideoOverlay";
import MobileVideoPlayer from "@/components/MobileVideoPlayer";

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
      <div className="pt-[120px] px-5 md:px-16">
        <div className="max-w-[1312px] mx-auto">
          <h1 className="font-impact text-[36px] md:text-[65px] text-primary uppercase mb-8">
            {project.title}
          </h1>
          <div className="flex gap-2 mb-12 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-primary text-primary rounded-full px-[10px] py-[10px] text-[14px] md:text-[20px] font-neue capitalize leading-none"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-primary font-neue text-[17px] md:text-[24px]">
            <p>Contenido del proyecto en construcción.</p>
          </div>
        </div>
      </div>
    );
  }

  const mobileHero = detail.heroImageMobile || detail.heroImage;

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full">
        {/* Desktop hero */}
        <div className="hidden md:block relative w-full h-[982px]">
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
        </div>

        {/* Mobile back arrow - fixed like hamburger */}
        <Link href="/" className="md:hidden fixed top-[78px] left-[20px] z-50">
          <Image src="/images/Chevron-Left.svg" alt="Volver" width={24} height={24} />
        </Link>

        {/* Mobile hero */}
        <div className="md:hidden relative w-full aspect-[393/604]">
          <Image
            src={mobileHero}
            alt={detail.title}
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority
          />
          {/* Dark gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[44%] bg-gradient-to-t from-black/77 to-transparent" />
          {/* Text on gradient */}
          <div className="absolute bottom-[24px] left-[20px] right-[20px] flex flex-col gap-[8px]">
            <p className="text-primary font-neue font-extrabold text-[20px]">
              {detail.year}
            </p>
            <p className="text-primary font-neue font-extrabold text-[35px] capitalize leading-[1]">
              {detail.title}
            </p>
            <p className="text-primary font-neue text-[17px] leading-[1]">
              {detail.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="px-[20px] md:px-16">
        <div className="max-w-[1312px] mx-auto">
          {/* Divider */}
          <div className="w-full h-px bg-primary" />

          {/* Sobre el Proyecto */}
          <section className="flex flex-col gap-[16px] md:gap-[24px] mt-[32px] md:mt-[72px]">
            <h2 className="text-primary font-neue font-extrabold text-[35px] md:text-[40px] capitalize leading-[1]">
              Sobre<br className="md:hidden" /> el proyecto
            </h2>
            <div className="md:w-[647px] md:p-[10px]">
              <div className="text-primary font-neue text-[17px] leading-normal flex flex-col gap-4">
                {detail.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-primary mt-[32px] md:mt-[72px]" />

          {/* Gallery — Mobile */}
          <section className="md:hidden flex flex-col gap-[32px] mt-[32px] pb-[40px]">
            {(detail.mobileGallery || detail.gallery).map((row, i) => {
              if (row.type === "video" && row.video) {
                return (
                  <div key={i}>
                    <MobileVideoPlayer
                      thumbnailSrc={detail.videoThumbnailMobile || detail.heroImageMobile || detail.heroImage}
                      videoSrc={row.video.src}
                      alt={row.video.alt}
                    />
                  </div>
                );
              }

              if (row.type === "triple" && row.images) {
                return (
                  <div key={i} className="flex flex-col gap-[24px] mt-[40px]">
                    {row.title && (
                      <h3 className="text-primary font-neue font-extrabold text-[35px] capitalize">
                        {row.title}
                      </h3>
                    )}
                    <div
                      className="flex gap-[16px] overflow-x-auto scrollbar-hide"
                      style={{ marginRight: "calc(-50vw + 50%)", scrollSnapType: "x mandatory" }}
                    >
                      {row.images.map((img, j) => {
                        const mobileSrc = img.mobileSrc || img.src;
                        const content = (
                          <div className="flex flex-col gap-[8px] w-[260px]" style={{ scrollSnapAlign: "start" }}>
                            <div className="relative overflow-hidden h-[200px]">
                              <Image src={mobileSrc} alt={img.alt} fill className="object-cover object-center" sizes="260px" />
                            </div>
                            {img.label && (
                              <p className="text-primary font-neue text-[12px]">{img.label}</p>
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

              if (row.type === "stack" && row.images) {
                return (
                  <div key={i} className="flex flex-col gap-[22px]">
                    {row.images.map((img, j) => (
                      <div key={j} className="relative w-full overflow-hidden" style={{ aspectRatio: row.mobileAspectRatio || "353 / 270" }}>
                        <Image src={img.mobileSrc || img.src} alt={img.alt} fill className="object-cover" sizes="100vw" />
                      </div>
                    ))}
                  </div>
                );
              }

              if (row.type === "full" && row.images) {
                return (
                  <div key={i} className="relative w-full overflow-hidden" style={{ aspectRatio: row.mobileAspectRatio || "353 / 261" }}>
                    <Image src={row.images[0].mobileSrc || row.images[0].src} alt={row.images[0].alt} fill className="object-cover" sizes="100vw" />
                  </div>
                );
              }

              // Split
              return (
                <div key={i} className="flex gap-[22px]">
                  {row.images?.map((img, j) => {
                    const hasOverlay = j === (row.images!.length - 1) && row.video && row.videoPosition;
                    const mobileSrc = img.mobileSrc || img.src;
                    if (hasOverlay) {
                      return (
                        <div key={j} className="relative flex-1 overflow-hidden aspect-[165/314]">
                          <ImageVideoOverlay imageSrc={mobileSrc} imageAlt={img.alt} videoSrc={row.video!.src} videoAlt={row.video!.alt} videoPosition={row.mobileVideoPosition || row.videoPosition!} />
                        </div>
                      );
                    }
                    return (
                      <div key={j} className="relative flex-1 overflow-hidden aspect-[165/314]">
                        <Image src={mobileSrc} alt={img.alt} fill className="object-cover" sizes="50vw" />
                      </div>
                    );
                  })}
                  {row.video && !row.videoPosition && (
                    <div className="relative flex-1 overflow-hidden aspect-[165/314] bg-black flex items-center justify-center">
                      <video
                        src={row.video.src}
                        loop
                        muted
                        playsInline
                        autoPlay
                        className="w-full h-full object-contain"
                        aria-label={row.video.alt}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          {/* Gallery — Desktop */}
          <section className="hidden md:flex flex-col gap-[24px] mt-[72px] pb-[80px]">
            {detail.gallery.map((row, i) => {
              if (row.type === "video" && row.video) {
                return (
                  <div key={i}>
                    <VideoPlayer
                      src={row.video.src}
                      alt={row.video.alt}
                      theme={row.video.theme}
                      poster={detail.videoThumbnailMobile}
                    />
                  </div>
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
                      style={{ marginRight: "calc(-50vw + 50%)", scrollSnapType: "x mandatory" }}
                    >
                      {row.images.map((img, j) => {
                        const content = (
                          <div className="flex flex-col gap-[8px] w-[486px]" style={{ scrollSnapAlign: "start" }}>
                            <div className="relative overflow-hidden h-[371px]">
                              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="486px" />
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
                    <Image src={row.images[0].src} alt={row.images[0].alt} fill className="object-cover" sizes="1312px" />
                  </div>
                );
              }

              // Split
              const splitH = row.height ?? 491;
              return (
                <div key={i} className="flex gap-[23px]">
                  {row.images?.map((img, j) => {
                    const hasOverlay = j === (row.images!.length - 1) && row.video && row.videoPosition;
                    if (hasOverlay) {
                      return (
                        <div key={j} className="relative flex-1 overflow-hidden" style={{ height: splitH }}>
                          <ImageVideoOverlay imageSrc={img.src} imageAlt={img.alt} videoSrc={row.video!.src} videoAlt={row.video!.alt} videoPosition={row.videoPosition!} />
                        </div>
                      );
                    }
                    return (
                      <div key={j} className="relative flex-1 overflow-hidden" style={{ height: splitH }}>
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="644px" />
                      </div>
                    );
                  })}
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
