"use client";

import { useRef, useState } from "react";

type VideoPlayerProps = {
  src: string;
  alt: string;
  theme?: "light" | "dark";
  fit?: "cover" | "contain";
};

export default function VideoPlayer({ src, alt, theme = "light", fit = "cover" }: VideoPlayerProps) {
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

  const bgClass = theme === "dark" ? "bg-black/20" : "bg-white/20";
  const iconColor = theme === "dark" ? "#555555" : "white";

  return (
    <div
      className="relative w-full h-[491px] bg-black flex items-center justify-center overflow-hidden cursor-pointer group"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
        aria-label={alt}
      />

      {/* Play/Pause button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className={`w-[72px] h-[72px] rounded-full ${bgClass} backdrop-blur-sm flex items-center justify-center`}>
          {isPlaying ? (
            /* Pause icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill={iconColor}>
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            /* Play icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill={iconColor}>
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
