"use client";

import React from "react";

const features = [
  {
    title: "100+ paintings",
    description:
      "An exclusive impasto-style curation you won't find on any stock image site.",
  },
  {
    title: "4K for laptops",
    description:
      "3840×2160 resolution — razor sharp on MacBook, Windows laptops and external monitors.",
  },
  {
    title: "Phone versions",
    description:
      "Every artwork cropped for iPhone and Android screens without losing the composition.",
  },
  {
    title: "Instant download",
    description:
      "Pay, download, done. Files organized by device and ready to use.",
  },
];

export default function EverythingYouReceive() {
  return (
    <section className="w-full bg-[#060D27] py-16  px-6 sm:px-10 lg:px-16 select-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-[48%] flex-shrink-0">
          <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0c1433]">
            {/* Aap apni image yahan add kar lena */}
            <img
              src="/p2.png"
              alt="Monaco F1 Impasto Artwork"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Exact Content with Left Vertical Accent Lines */}
        <div className="w-full lg:w-[52%] flex flex-col">
          {/* Top Overline Tag */}
          <span className="text-[12px] font-semibold tracking-[0.22em] text-[#E8C78B] uppercase">
            THE COLLECTION
          </span>

          {/* Main Heading */}
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            Everything you receive
          </h2>

          {/* Feature List with Left Accent Lines */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-6 sm:gap-7">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="relative pl-5 border-l-2 border-[#E8C78B] flex flex-col"
              >
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-[#8E9BB5] font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}