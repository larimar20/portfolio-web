"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type ImageVideoOverlayProps = {
  imageSrc: string;
  imageAlt: string;
  videoSrc: string;
  videoAlt: string;
  videoPosition: { top: string; left: string; width: string; height: string };
};

export default function ImageVideoOverlay({
  imageSrc,
  imageAlt,
  videoSrc,
  videoAlt,
  videoPosition,
}: ImageVideoOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Background image (TV) */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="644px"
      />

      {/* Video overlay positioned on the TV screen */}
      <div
        className="absolute cursor-pointer group"
        style={{
          top: videoPosition.top,
          left: videoPosition.left,
          width: videoPosition.width,
          height: videoPosition.height,
        }}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-label={videoAlt}
        />

        {/* Play/Pause button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="w-[48px] h-[48px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            {isPlaying ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
