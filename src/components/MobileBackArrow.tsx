"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileBackArrow() {
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const arrowY = 67 + 12; // top position + half height
      const arrowX = 20 + 12; // left position + half width

      // Get the element at the arrow's position
      // Temporarily hide the arrow to get the element behind it
      const arrowEl = document.getElementById("mobile-back-arrow");
      if (arrowEl) {
        arrowEl.style.pointerEvents = "none";
        arrowEl.style.visibility = "hidden";
      }

      const elementBehind = document.elementFromPoint(arrowX, arrowY);

      if (arrowEl) {
        arrowEl.style.pointerEvents = "";
        arrowEl.style.visibility = "";
      }

      if (elementBehind) {
        const bg = window.getComputedStyle(elementBehind).backgroundColor;
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const r = parseInt(match[1]);
          const g = parseInt(match[2]);
          const b = parseInt(match[3]);
          // If brightness is high (light background), switch to red
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          setIsOverLight(brightness > 200);
        } else {
          // transparent or no bg — check parent
          setIsOverLight(false);
        }
      }
    };

    // Check on scroll and on load
    checkBackground();
    window.addEventListener("scroll", checkBackground, { passive: true });
    return () => window.removeEventListener("scroll", checkBackground);
  }, []);

  return (
    <Link
      href="/"
      id="mobile-back-arrow"
      className="md:hidden fixed top-[67px] left-[20px] z-50"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke={isOverLight ? "#FF0000" : "#F5F0EB"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
