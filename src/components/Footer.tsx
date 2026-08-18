import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 md:px-16 pb-8">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between pt-4 md:pt-2 border-t border-primary-light">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-[253px] text-primary text-[16px] md:text-[20px] font-neue">
          <a
            href="mailto:larimarm20@gmail.com"
            className="hover:opacity-70 transition-opacity"
          >
            larimarm20@gmail.com
          </a>
          <div className="flex justify-center gap-6 md:gap-8 w-full md:w-auto">
            <Link
              href="/"
              className="hover:opacity-70 transition-opacity uppercase"
            >
              Home
            </Link>
            <Link
              href="/#proyectos"
              className="hover:opacity-70 transition-opacity uppercase"
            >
              Proyectos
            </Link>
            <Link
              href="/sobre-mi"
              className="hover:opacity-70 transition-opacity uppercase"
            >
              Sobre Mí
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 md:gap-[9px]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/images/Vector.png"
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/images/Vector2.png"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
