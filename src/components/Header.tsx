"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 px-16 pt-[60px]">
        <nav className="flex items-center justify-between pb-2 border-b border-primary font-neue font-extrabold text-[20px] uppercase text-primary">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="/#proyectos" className="hover:opacity-70 transition-opacity">
            Proyectos
          </Link>
          <Link href="/sobre-mi" className="hover:opacity-70 transition-opacity">
            Sobre Mí
          </Link>
        </nav>
      </header>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed top-[67px] right-[20px] z-50 w-[46px] h-[46px] rounded-full bg-[#fcfdff] backdrop-blur-[10px] flex items-center justify-center"
        style={{ boxShadow: "-6px 6px 6.55px rgba(0,0,0,0.05)" }}
        aria-label="Abrir menú"
      >
        <Image
          src="/images/menu-icon.png"
          alt="Menú"
          width={24}
          height={24}
        />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-[#f3f5f4] flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-[67px] right-[20px] w-[46px] h-[46px] rounded-full bg-[#fcfdff] backdrop-blur-[10px] flex items-center justify-center text-primary text-[24px] font-neue"
            style={{ boxShadow: "-6px 6px 6.55px rgba(0,0,0,0.05)" }}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-neue font-extrabold text-[32px] uppercase text-primary"
          >
            Home
          </Link>
          <Link
            href="/#proyectos"
            onClick={() => setMenuOpen(false)}
            className="font-neue font-extrabold text-[32px] uppercase text-primary"
          >
            Proyectos
          </Link>
          <Link
            href="/sobre-mi"
            onClick={() => setMenuOpen(false)}
            className="font-neue font-extrabold text-[32px] uppercase text-primary"
          >
            Sobre Mí
          </Link>
        </div>
      )}
    </>
  );
}
