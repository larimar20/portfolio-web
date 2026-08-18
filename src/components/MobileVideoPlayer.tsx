"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  thumbnailSrc: string;
  videoSrc: string;
  alt: string;
};

export default function MobileVideoPlayer({ thumbnailSrc, videoSrc, alt }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative w-full aspect-[353/181] overflow-hidden block"
      >
        <Image
          src={thumbnailSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Play icon - white */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[56px] h-[56px] rounded-full bg-black/50 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>

      {/* Fullscreen video overlay - iPhone 16: 393x852 */}
      {isOpen && (
        <div className="fixed inset-0 z-[70] bg-black flex items-center justify-center">
          {/* Back arrow - Chevron Left */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-[67px] left-[20px] z-[80]"
            aria-label="Volver"
          >
            <Image
              src="/images/Chevron-Left.svg"
              alt="Volver"
              width={24}
              height={24}
            />
          </button>

          {/* Hamburger menu */}
          <button
            className="absolute top-[67px] right-[20px] z-[80] w-[46px] h-[46px] rounded-full bg-[#fcfdff] backdrop-blur-[10px] flex items-center justify-center"
            style={{ boxShadow: "-6px 6px 6.55px rgba(0,0,0,0.05)" }}
            aria-label="Menú"
          >
            <Image
              src="/images/menu-icon.png"
              alt="Menú"
              width={24}
              height={24}
            />
          </button>

          {/* Video container - 393x852 iPhone 16 */}
          <div className="w-[393px] h-[852px] max-w-full max-h-full flex items-center justify-center">
            <video
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              <track kind="captions" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
