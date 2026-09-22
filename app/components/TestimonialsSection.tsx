"use client";

import Link from "next/link";
import React from "react";

const reviews = [
  {
    quote:
      "“I get compliments on my setup every single week. The texture looks like real oil paint — guests always ask where I got it.”",
    author: "Daniel R.",
    location: "New York, USA",
  },
  {
    quote:
      "“Worth every penny. My laptop finally looks like it costs ten times more than it did.”",
    author: "Amelia T.",
    location: "London, UK",
  },
  {
    quote:
      "“The Complete Collection is absurd value. I change my wallpaper every week and still haven't seen them all.”",
    author: "Marcus L.",
    location: "Toronto, Canada",
  },
  {
    quote:
      "“Setup took 20 seconds. The Golden versions are my absolute favorite — my phone lock screen is stunning.”",
    author: "Sofia M.",
    location: "Miami, USA",
  },
  {
    quote:
      "“I bought Essential, came back two days later for Complete. Honestly? Just get Complete from the start.”",
    author: "Kevin H.",
    location: "Austin, USA",
  },
  {
    quote:
      "“The quality on my ultrawide monitor is unreal. Best money I've spent on my desk setup in years.”",
    author: "Ethan W.",
    location: "Berlin, Germany",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#060D27] py-16  px-4 sm:px-6 lg:px-8 select-none border-t border-[#111c3d]/60">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Top Tag */}
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#E8C78B] uppercase">
          LOVED ON 4 CONTINENTS
        </span>

        {/* Main Heading */}
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center">
          Don't take our word for it —{" "}
          <span className="font-serif italic font-normal text-[#E8C78B]">
            take theirs
          </span>
        </h2>

        {/* 6 Reviews Grid (3 columns on desktop, 1 on mobile) */}
        <div className="mt-12 sm:mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#081232]/80 border border-[#172554]/70 shadow-lg"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex gap-1 text-[#E8C78B] text-[16px]">
                  {"★★★★★"}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-[13.5px] sm:text-[15px] leading-relaxed text-[#c2d0eb] font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Author & Location */}
              <div className="mt-6 text-[12.5px] sm:text-[13px] text-[#788cae]">
                <span className="font-semibold text-white">{item.author}</span>
                <span className="mx-1.5 opacity-60">·</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-14">
                  <Link href={"/checkout"}>

          <button
            type="button"
            className="cursor-pointer tracking-[0.08em] font-extrabold text-[14px] sm:text-[15px] text-[#060D27] bg-[#E8C78B] hover:bg-[#dfbc7c] transition-colors py-3.5 px-9 sm:px-12 rounded-full shadow-[0_4px_25px_rgba(232,199,139,0.25)] active:scale-[0.99]"
          >
            JOIN THEM — FROM $4.97
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
}