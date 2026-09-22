"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Hourglass } from "lucide-react";

export default function PricingHeader() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = `${String(timeLeft.minutes).padStart(2, "0")}:${String(
    timeLeft.seconds
  ).padStart(2, "0")}`;

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* 1. Top Announcement Header Bar */}
      <div className="w-full bg-[#030712]/90 border-b border-white/10 py-2.5 px-4 text-center">
        <div className="inline-flex items-center justify-center gap-2 text-[10.5px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[#E8C78B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C78B]" />
          <span>LAUNCH OFFER: 50% OFF — ENDS IN {formattedTime} · PRICE RETURNS TO FULL</span>
        </div>
      </div>

      {/* 2. Back Link */}
      <div className="mt-8 sm:mt-12">
        <Link
          href="/"
          className="text-xs sm:text-[13px] text-[#8E9BB5] hover:text-white transition-colors flex items-center gap-1 font-medium"
        >
          <span>←</span> Back to the gallery
        </Link>
      </div>

      {/* 3. Pre-header Tag */}
      <span className="mt-6 text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#D8B467] uppercase">
        LIMITED-TIME LAUNCH OFFER
      </span>

      {/* 4. Main Headline */}
      <h1 className="mt-3 text-3xl sm:text-5xl md:text-[54px] font-bold text-white text-center tracking-tight leading-tight max-w-4xl px-4">
        Lock in your{" "}
        <span className="font-serif italic font-normal text-[#E8C78B]">
          50% discount
        </span>{" "}
        before it's gone
      </h1>

      {/* 5. Subtitle Paragraph */}
      <p className="mt-3 text-xs sm:text-[13.5px] text-[#9AA7C2] text-center max-w-2xl px-4 font-normal leading-relaxed">
        This one-time launch price is live for the next 15 minutes. When the timer hits zero, the
        gallery goes back to full price — permanently.
      </p>

      {/* 6. Big Live Timer Pill */}
      <div className="mt-6 inline-flex items-center gap-4 bg-[#070e28]/85 border border-[#1d2d5a] rounded-2xl py-3 px-6 shadow-2xl backdrop-blur-md">
        <Hourglass className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8C78B] animate-pulse" />
        <span className="text-3xl sm:text-4xl font-extrabold text-[#E8C78B] font-mono tracking-wider">
          {formattedTime}
        </span>
        <div className="border-l border-white/10 pl-4 text-left">
          <p className="text-[9px] sm:text-[10px] uppercase font-bold text-[#8E9BB5] tracking-wider leading-tight">
            UNTIL THE
          </p>
          <p className="text-[9px] sm:text-[10px] uppercase font-bold text-[#8E9BB5] tracking-wider leading-tight">
            PRICE GOES
          </p>
          <p className="text-[9px] sm:text-[10px] uppercase font-bold text-[#8E9BB5] tracking-wider leading-tight">
            BACK TO FULL
          </p>
        </div>
      </div>

      {/* 7. Live Activity Dot */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-[12.5px] text-[#8E9BB5]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>
          <strong className="text-white font-medium">21 people</strong> are viewing this page right now · 7 bought in the last hour
        </span>
      </div>
    </div>
  );
}