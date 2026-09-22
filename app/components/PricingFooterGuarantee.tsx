"use client";

import React from "react";
import { ShieldCheck, Lock, Download, Shield } from "lucide-react";

export default function PricingFooterGuarantee() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center select-none px-4 mt-16 sm:mt-24 pb-14">
      
      {/* 1. Enhanced Guarantee Banner Card with Ambient Glow */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0a1538]/90 to-[#060e26]/95 border border-[#1d2f63]/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7 shadow-[0_15px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl overflow-hidden group">
        
        {/* Soft Radial Ambient Glow in background */}
        <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 bg-blue-500/15 blur-[65px] rounded-full group-hover:bg-blue-500/25 transition-all duration-700" />

        {/* Shield Icon Box */}
        <div className="relative w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.25)]">
          <ShieldCheck className="w-6 h-6 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
        </div>

        {/* Guarantee Text Content */}
        <div className="relative z-10 text-center sm:text-left flex flex-col">
          <h4 className="text-base sm:text-[17px] font-bold text-white tracking-tight leading-snug">
            100% risk-free — you literally cannot lose
          </h4>
          <p className="mt-1.5 text-xs sm:text-[13.5px] text-[#94a3c2] leading-relaxed font-normal">
            Download the wallpapers and try them on your screen. If you don't love them, email us within 30 days and we'll refund every cent — no questions asked. You keep the download either way.
          </p>
        </div>
      </div>

      {/* 2. 3-Step Process Cards with Gold Glow Number Badges */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6">
        {[
          {
            step: "1",
            title: "Pay securely",
            desc: "256-bit encrypted checkout — card, PayPal or Pay",
          },
          {
            step: "2",
            title: "Check your email",
            desc: "Your download link arrives in minutes",
          },
          {
            step: "3",
            title: "Set your wallpaper",
            desc: "Save in 4K and transform your screen instantly",
          },
        ].map((item) => (
          <div
            key={item.step}
            className="group relative rounded-2xl bg-[#070e28]/75 hover:bg-[#091436]/90 border border-[#172554]/70 hover:border-[#2a407e] p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 shadow-lg hover:-translate-y-0.5 backdrop-blur-md"
          >
            {/* Number Pill Badge */}
            <div className="relative flex items-center justify-center mb-3">
              <span className="w-6 h-6 rounded-full bg-[#E8C78B] text-[#060D27] text-[11px] font-black flex items-center justify-center shadow-[0_0_12px_rgba(232,199,139,0.4)]">
                {item.step}
              </span>
            </div>

            {/* Title */}
            <span className="text-[13.5px] sm:text-[14px] font-bold text-white tracking-tight">
              {item.title}
            </span>

            {/* Sub description */}
            <span className="text-[11px] sm:text-[12px] text-[#7d8fae] mt-1.5 leading-relaxed font-normal">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      {/* 3. Security Tags Strip (Clean Frosted Pills) */}
      <div className="mt-8 flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap text-[10px] sm:text-[11px] font-semibold tracking-wider">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#070e28]/80 border border-[#172554]/60 text-[#cbd5e1] backdrop-blur-sm">
          <Lock className="w-3.5 h-3.5 text-[#E8C78B]" />
          <span>SECURE CHECKOUT</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#070e28]/80 border border-[#172554]/60 text-[#cbd5e1] backdrop-blur-sm">
          <Download className="w-3.5 h-3.5 text-blue-400" />
          <span>INSTANT DOWNLOAD</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#070e28]/80 border border-[#172554]/60 text-[#cbd5e1] backdrop-blur-sm">
          <Shield className="w-3.5 h-3.5 text-blue-400" />
          <span>30-DAY MONEY-BACK GUARANTEE</span>
        </div>
      </div>

      {/* 4. Bottom Footer Credit Note */}
      <p className="mt-10 text-[11.5px] text-[#64748b] text-center tracking-wide font-normal">
        Old Money Wallpapers · Instant download · One-time payment · 30-day guarantee
      </p>
    </div>
  );
}