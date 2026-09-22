"use client";

import React from "react";

export default function DifferenceSection() {
  return (
    <section className="w-full bg-[#060D27] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#111c3d]/60 select-none">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top Tag */}
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#E8C78B] uppercase">
          WORK OF ART
        </span>

        {/* Main Headline */}
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center">
          The difference{" "}
          <span className="font-serif italic font-normal text-[#E8C78B]">
            art makes...
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-xs sm:text-[14px] text-[#8E9BB5] text-center font-normal tracking-wide">
          Turn your everyday into a real work of art.
        </p>

        {/* Showcase Image Card Container */}
        <div className="mt-12 sm:mt-14 w-full max-w-4xl">
          <div className="relative  w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#0c1433] group">
            {/* Mercedes Cockpit + MacBook Artwork Display Image */}
            <img
              src="/big.png"
              alt="The difference art makes - Car setup"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Subtle Vignette Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          </div>
        </div>

      </div>
    </section>
  );
}