"use client";

import Link from "next/link";
import React from "react";

// Grid items data: exact labels aur artwork placeholders
const artworks = [
  {
    id: 1,
    title: "Wolf of Wall Street Style",
    device: "LAPTOP",
    image: "image2.png",
  },
  {
    id: 2,
    title: "Lake Como Coastal View",
    device: "LAPTOP",
    image: "image2.png",
  },
  {
    id: 3,
    title: "Vintage Car Night Drive",
    device: "PHONE",
    image: "image2.png",
  },
  {
    id: 4,
    title: "The World Is Yours Neon",
    device: "PHONE",
    image: "image2.png",
  },
  {
    id: 5,
    title: "Helicopter & Sports Car Lake",
    device: "LAPTOP",
    image: "image2.png",
  },
  {
    id: 6,
    title: "Tutto Passa Mediterranean",
    device: "LAPTOP",
    image: "image2.png",
  },
  {
    id: 7,
    title: "Classic Car Italian Alley",
    device: "LAPTOP",
    image: "image2.png",
  },
  {
    id: 8,
    title: "White Porsche 911 Seaside",
    device: "LAPTOP",
    image: "image2.png",
  },
  {
    id: 9,
    title: "Autumn Drive Forest Road",
    device: "PHONE",
    image: "image2.png",
  },
  {
    id: 10,
    title: "Convertible Sunset Drive",
    device: "PHONE",
    image: "image2.png",
  },
];

export default function ArtworksGallery() {
  return (
    <section className="relative w-full bg-[#060d27] py-16  px-4 sm:px-6 lg:px-8 select-none border-t border-[#111c3d]/60">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center">
          Every screen,{" "}
          <span className="font-serif italic font-normal text-[#E8C78B]">
            a painting.
          </span>
        </h2>

        {/* Subtitle Paragraph */}
        <p className="mt-4 max-w-2xl text-center text-[14px] leading-relaxed text-[#8E9BB5] font-medium">
          A sample of the artworks inside the collection. Thick brushstrokes, relief and color you can almost touch
          <br className="hidden sm:inline" />
          {" "}— shown here as compressed previews; inside the collection, at full resolution.
        </p>

        {/* 10-Item Responsive Artworks Grid */}
        <div className="mt-12 sm:mt-14 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 ">
          {artworks.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0c1433] border border-white/10  transition-all duration-300 hover:scale-[1.03] hover:border-white/20"
            >
              {/* Artwork Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover select-none pointer-events-none group-hover:brightness-105 transition-all duration-300"
                loading="lazy"
              />

              {/* Bottom Subtle Vignette Overlay for Badge Clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom-left Corner Device Tag Badge */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-[5px] bg-[#070e24]/85 backdrop-blur-md border border-white/15 text-[8.5px] sm:text-[9.5px] font-semibold tracking-wider text-slate-300 uppercase">
                  {item.device}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Notice */}
        <p className="mt-10 sm:mt-12 text-center text-[14px] text-[#71809b] tracking-wide font-normal">
          …and 90+ more artworks waiting for you inside the collection
        </p>

        {/* Main CTA Button */}

        <div className="mt-5">
              <Link href={"/checkout"}>
          <button
            type="button"
            className="cursor-pointer tracking-[0.08em] font-extrabold text-[13px] sm:text-[14px] text-[#060D27] bg-[#E8C78B] hover:bg-[#dfbc7c] transition-colors py-3.5 px-8 sm:px-11 rounded-full shadow-[0_4px_22px_rgba(232,199,139,0.22)] active:scale-[0.99]"
          >
            CLAIM YOUR 50% DISCOUNT NOW
          </button>
            </Link>
        </div>

        {/* Guarantee Subtext Below Button */}
        <p className="mt-3 text-[13px] text-[#697998] font-normal tracking-tight">
          from $4.97 · One-time payment · 30-day guarantee
        </p>

      </div>
    </section>
  );
}