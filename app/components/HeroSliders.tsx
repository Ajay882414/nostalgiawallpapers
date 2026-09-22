"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const row1 = [
  "/image.png",
  "image.png",
  "image.png",
  "image.png",
  "image.png",
];

const row2 = [
  "image.png",
  "image.png",
  "image.png",
  "image.png",
  "image.png",
];

export default function HeroSliders() {
  return (
    <div className="relative w-full overflow-hidden py-4 flex flex-col gap-4 sm:gap-6">
      {/* Background White/Silver radial glow behind the tiles */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[70%] h-[350px]  blur-[120px] rounded-full" />

      {/* Row 1: Moves Right to Left */}
      <Marquee
        direction="left"
        speed={35}
        gradient={false}
        pauseOnHover={true}
        autoFill={true}
        className="overflow-hidden"
      >
        <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
          {row1.map((src, idx) => (
            <div
              key={`row1-${idx}`}
              className="relative w-[260px] h-[160px] sm:w-[320px] sm:h-[200px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0 transform transition-transform hover:scale-[1.02]"
            >
              <img
                src={src}
                alt="Wallpaper artwork"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </Marquee>

      {/* Row 2: Moves Left to Right */}
      <Marquee
        direction="right"
        speed={32}
        gradient={false}
        pauseOnHover={true}
        autoFill={true}
        className="overflow-hidden"
      >
        <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
          {row2.map((src, idx) => (
            <div
              key={`row2-${idx}`}
              className="relative w-[260px] h-[160px] sm:w-[360px] sm:h-[215px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0 transform transition-transform hover:scale-[1.02]"
            >
              <img
                src={src}
                alt="Wallpaper artwork"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
    
  );
}