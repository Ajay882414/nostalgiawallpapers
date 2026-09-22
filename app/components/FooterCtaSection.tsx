"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function FooterCtaSection() {
  // Image ke according 02:08 real-time countdown timer
  const [timeLeft, setTimeLeft] = useState({ minutes: 2, seconds: 8 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 2, seconds: 8 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-[#060D27] pt-16 pb-10 px-4 sm:px-6 lg:px-8 select-none flex flex-col items-center">
      {/* Centered Rounded CTA Card Box */}
      <div className="relative w-full max-w-[820px] rounded-[32px] sm:rounded-[40px] bg-[#050C22] border border-[#172554]/90 p-8 sm:p-14 lg:p-16 flex flex-col items-center text-center shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-sm">
        
        {/* Top Background Soft Glow / Shadow Layer */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[90%] sm:w-[500px] h-[220px] bg-[#224294]/25 blur-[90px] rounded-full" />

        {/* Top Tag */}
        <span className="relative text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#D8B467] uppercase z-10">
          DON'T WAIT
        </span>

        {/* Headline */}
        <h2 className="relative mt-4 text-2xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-white leading-tight max-w-[650px] z-10">
          The gallery goes back to{" "}
          <span className="font-serif italic font-normal text-[#E8C78B]">
            full price
          </span>{" "}
          when this timer ends
        </h2>

        {/* Big Countdown Timer Display */}
        <div className="relative mt-8 sm:mt-9 flex flex-col items-center z-10">
          <span className="text-5xl sm:text-6xl md:text-[68px] font-extrabold tracking-tight text-[#E8C78B] font-mono leading-none">
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-[11.5px] font-semibold text-[#7D8EA8] tracking-[0.2em] uppercase mt-3">
            UNTIL THE 50% LAUNCH OFFER EXPIRES
          </span>
        </div>

        {/* CTA Button */}
        <div className="relative mt-8 sm:mt-10 w-full flex justify-center z-10">
                  <Link href={"/checkout"}>

          <button
            type="button"
            className="cursor-pointer tracking-[0.08em] font-extrabold text-[14px] sm:text-[15px] text-[#060D27] bg-[#E8C78B] hover:bg-[#dfbc7c] transition-colors py-4 px-10 sm:px-14 rounded-full shadow-[0_4px_25px_rgba(232,199,139,0.22)] active:scale-[0.99]"
          >
            GET EVERYTHING FOR $9.90
          </button>
          </Link>
        </div>

        {/* Sub-text Below Button */}
        <p className="relative mt-4 text-[12px] sm:text-[13px] text-[#7D8EA8] font-normal flex items-center justify-center gap-1.5 flex-wrap z-10">
          <span className="line-through text-[#56657F] decoration-[#56657F]">
            $17.90
          </span>
          <span className="text-[#96A6C2]">$9.90</span>
          <span className="opacity-40">·</span>
          <span>One-time payment</span>
          <span className="opacity-40">·</span>
          <span>30-day money-back guarantee</span>
        </p>
      </div>

      {/* Bottom Footer Credits / Note */}
      <div className="mt-14 sm:mt-20 text-center text-[11.5px] sm:text-[12.5px] text-[#556582] tracking-wide font-normal">
        Old Money Wallpapers · Instant download · One-time payment · 30-day guarantee
      </div>
    </footer>
  );
}