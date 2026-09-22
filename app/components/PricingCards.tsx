"use client";

import React from "react";
import { Check } from "lucide-react";

export default function PricingCards() {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start select-none px-4">
      
      {/* ================= CARD 1: ESSENTIAL ================= */}
      <div className="relative rounded-[28px] bg-[#070e28]/90 border border-[#172554]/80 p-6 sm:p-9 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md">
        {/* Floating Top Badge */}
        <div className="absolute -top-3 left-8 bg-[#101b44] border border-[#23356f] text-[#8E9BB5] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
          50% OFF
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Essential Collection</h3>
        <p className="text-xs sm:text-[13px] text-[#7E8EA8] mt-1">
          100+ wallpapers in 4K + phone versions. Perfect for laptop & phone.
        </p>

        {/* Price Row */}
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-xs text-[#5f6f8f] line-through font-normal">$9.90</span>
          <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$4.97</span>
        </div>
        <p className="text-[11px] font-bold tracking-wider uppercase text-[#D8B467] mt-1">
          SAVE 50% TODAY
        </p>

        {/* Features List */}
        <div className="mt-7 flex flex-col gap-3.5 border-t border-white/10 pt-6">
          {[
            "100+ wallpapers in 4K + phone versions",
            "Works on Mac, Windows, iPhone and Android",
            "Instant download and lifetime access",
            "7-day money-back guarantee — risk-free",
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-[#A2B1CC]">
              <span className="text-[#8E9BB5] mt-0.5">—</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Timer Alert Box */}
        <div className="mt-7 bg-[#0b143a]/70 border border-[#1a2b61] rounded-xl py-2 px-3 text-center text-[11px] text-[#8E9BB5]">
          ⏳ Price returns to $9.90 when the timer ends
        </div>

        {/* Button */}
        <button
          type="button"
          className="mt-5 w-full bg-[#E8C78B] hover:bg-[#dfbc7c] text-[#060D27] font-extrabold tracking-wider text-xs sm:text-sm uppercase py-4 rounded-full shadow-[0_4px_20px_rgba(232,199,139,0.2)] transition-all cursor-pointer active:scale-[0.99]"
        >
          YES! GET ESSENTIAL FOR $4.97
        </button>

        <p className="mt-3 text-[11px] text-[#637392] text-center">
          One-time payment · Instant download · 7-day guarantee
        </p>
      </div>

      {/* ================= CARD 2: COMPLETE (BEST VALUE) ================= */}
      <div className="relative rounded-[28px] bg-[#070e28]/95 border-2 border-[#D8B467]/70 p-6 sm:p-9 flex flex-col shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-md lg:-mt-2">
        {/* Floating Top Badges */}
        <div className="absolute -top-3.5 left-8 flex gap-2">
          <span className="bg-[#D8B467] text-[#060D27] text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase">
            BEST VALUE
          </span>
          <span className="bg-[#101b44] border border-[#23356f] text-[#D8B467] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
            45% OFF
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Complete Collection</h3>
        <p className="text-xs sm:text-[13px] text-[#7E8EA8] mt-1">
          The full library — every painting, every format, forever.
        </p>

        {/* Price Row */}
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-xs text-[#5f6f8f] line-through font-normal">$17.90</span>
          <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$9.90</span>
        </div>
        <p className="text-[11px] font-bold tracking-wider uppercase text-[#D8B467] mt-1">
          SAVE 45% TODAY — LESS THAN 5 CENTS PER WALLPAPER
        </p>

        {/* Progress Tracker Bar */}
        <div className="mt-6 bg-[#04091c] border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
          <div className="flex justify-between text-[11px] font-bold text-white">
            <span>Launch copies claimed</span>
            <span className="text-[#D8B467]">93%</span>
          </div>
          <div className="w-full bg-[#111c3d] h-2 rounded-full overflow-hidden">
            <div className="bg-[#D8B467] h-full w-[93%] rounded-full" />
          </div>
          <span className="text-[10px] text-[#7E8EA8]">Only 7 of 100 launch spots left at this price</span>
        </div>

        {/* Breakdown Receipt Table */}
        <div className="mt-6 bg-[#050b20] border border-white/5 rounded-xl p-4 flex flex-col gap-2.5 text-xs">
          <span className="text-[10px] font-bold text-[#8E9BB5] uppercase tracking-wider">
            WHAT YOU GET TODAY
          </span>
          {[
            { label: "200+ wallpapers in 4K", val: "$19.90" },
            { label: "Golden & extra formats", val: "$9.90" },
            { label: "Ultrawide 21:9, iPad & lock-screen", val: "$9.90" },
            { label: "Monthly bonus wallpapers", val: "$14.90" },
            { label: "Old Money Collection", val: "$9.90" },
          ].map((row, i) => (
            <div key={i} className="flex justify-between text-[#8E9BB5] text-[11.5px]">
              <span>{row.label}</span>
              <span className="line-through text-[#566580]">{row.val}</span>
            </div>
          ))}
          <div className="border-t border-white/10 pt-2 flex justify-between text-[11.5px] text-[#7E8EA8]">
            <span>Total value</span>
            <span className="line-through">$64.50</span>
          </div>
          <div className="flex justify-between text-[13px] font-bold text-white">
            <span>Today only</span>
            <span className="text-[#D8B467]">$9.90</span>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-6 flex flex-col gap-3">
          {[
            "200+ wallpapers in 4K: every painting in original, Golden and extra formats",
            "Works on Mac, Windows, iPhone and Android",
            "Ultrawide 21:9, iPad and lock-screen versions",
            "Bonus: new wallpapers every month, automatically",
            "Extended 30-day guarantee — 100% risk-free",
            "Old Money Collection included",
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-[#A2B1CC]">
              <span className="text-[#D8B467] mt-0.5">—</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Timer Alert Box */}
        <div className="mt-7 bg-[#0b143a]/70 border border-[#1a2b61] rounded-xl py-2 px-3 text-center text-[11px] text-[#8E9BB5]">
          ⏳ Price returns to $17.90 when the timer ends
        </div>

        {/* Button */}
        <button
          type="button"
          className="mt-5 w-full bg-[#E8C78B] hover:bg-[#dfbc7c] text-[#060D27] font-extrabold tracking-wider text-xs sm:text-sm uppercase py-4 rounded-full shadow-[0_4px_25px_rgba(232,199,139,0.3)] transition-all cursor-pointer active:scale-[0.99]"
        >
          YES! I WANT EVERYTHING FOR $9.90
        </button>

        <p className="mt-3 text-[11px] text-[#637392] text-center">
          One-time payment · Instant download · 30-day money-back guarantee
        </p>
      </div>

    </div>
  );
}