"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PricingCta() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 12, seconds: 1 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 12, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 w-full select-none">
      {/* 1. Main CTA Button */}
      <Link href={"/checkout"}>
      <button
        type="button"
        className="cursor-pointer tracking-[0.08em] font-extrabold text-[15px] sm:text-[17px] text-[#060D27] bg-[#E8C78B] hover:bg-[#dfbc7c] transition-colors py-4 px-10 sm:px-14 rounded-full shadow-[0_0_20px_rgba(232,199,139,0.18)] active:scale-[0.99]"
      >
        GET THE COLLECTION FOR $4.97
      </button>
      </Link>

      {/* 2. Price Subtext */}
      <div className="mt-2 text-[13px] text-[#8E9BB5] font-normal flex items-center justify-center gap-1.5">
        <span className="line-through decoration-[#8E9BB5]/70 text-[#7D8AA6]">
          $9.90
        </span>
        <span className="text-[12px] opacity-70">·</span>
        <span>One-time payment</span>
        <span className="text-[12px] opacity-70">·</span>
        <span>Instant download</span>
      </div>

      {/* 3. Timer Pill Badge */}
      <div className="mt-2.5 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#52442d] bg-[#070e28]/70 backdrop-blur-sm text-[13px] sm:text-[14px]">
        {/* Bronze/Gold Dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#B89B66]" />

        {/* Alarm Clock */}
        <span className="text-[14px] leading-none">⏰</span>

        {/* Launch Text */}
        <span className="font-semibold text-[#F0CF91]">
          Launch offer ends in
        </span>

        {/* Dynamic Countdown */}
        <span className="font-bold text-[#F0CF91] tracking-wide">
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>

        <span className="text-[#F0CF91] font-normal">·</span>

        {/* Returns text */}
        <span className="text-[#F0CF91] font-medium">
          price returns to $9.90
        </span>
      </div>

      {/* 4. Guarantee & Supported Devices */}
      <div className="mt-4 flex items-center justify-center gap-2 text-[13px] sm:text-[14px] text-[#8E9BB5]">
        {/* Exact Shield Icon */}
        <svg
          className="w-4 h-4 shrink-0 text-[#3b82f6] "
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
        </svg>

        <span className="">
          30-day money-back guarantee · Mac, Windows, iPhone &amp; Android
        </span>
      </div>
    </div>
  );
}