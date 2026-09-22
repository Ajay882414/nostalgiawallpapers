"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

// 10 realistic global purchasers data
const purchases = [
  { name: "Raviraj S.", location: "Mumbai, India", plan: "Essential Pack", price: "$4.97", time: "2 seconds ago" },
  { name: "Oliver M.", location: "London, UK", plan: "Complete Collection", price: "$9.90", time: "18 seconds ago" },
  { name: "Aarav Sharma", location: "Delhi, India", plan: "Complete Collection", price: "$9.90", time: "45 seconds ago" },
  { name: "Lucas Dupont", location: "Paris, France", plan: "Essential Pack", price: "$4.97", time: "1 minute ago" },
  { name: "Matteo Rossi", location: "Milan, Italy", plan: "Complete Collection", price: "$9.90", time: "30 seconds ago" },
  { name: "Priya Patel", location: "Ahmedabad, India", plan: "Essential Pack", price: "$4.97", time: "3 minutes ago" },
  { name: "James Walker", location: "New York, USA", plan: "Complete Collection", price: "$9.90", time: "12 seconds ago" },
  { name: "Liam O'Connor", location: "Dublin, Ireland", plan: "Essential Pack", price: "$4.97", time: "2 minutes ago" },
  { name: "Kabir Verma", location: "Bengaluru, India", plan: "Complete Collection", price: "$9.90", time: "1 minute ago" },
  { name: "Noah Becker", location: "Berlin, Germany", plan: "Complete Collection", price: "$9.90", time: "50 seconds ago" },
];

export default function PurchaseNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Pehla notification 3 seconds baad show hoga
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Har 15 seconds me notification update hone ka interval
    const interval = setInterval(() => {
      setIsVisible(false); // Pehle purana hide hoga

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % purchases.length);
        setIsVisible(true); // 600ms baad naya popup aayega
      }, 600);
    }, 15000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isDismissed]);

  const current = purchases[currentIndex];

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Recent purchase notifications"
      className={`fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-50 pointer-events-auto transition-all duration-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-6 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#081232]/95 border border-[#1d2f62] shadow-[0_12px_35px_rgba(0,0,0,0.7)] backdrop-blur-md">
        
        {/* Verification Icon Badge */}
        <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-[#E8C78B]/10 border border-[#E8C78B]/30 flex items-center justify-center text-[#E8C78B]">
          <CheckCircle2 className="w-5 h-5 text-[#E8C78B]" />
        </div>

        {/* Content Details */}
        <div className="flex-1 min-w-0 pr-4">
          <p className="text-[13px] sm:text-[13.5px] font-semibold text-white truncate">
            {current.name}{" "}
            <span className="text-[11.5px] font-normal text-[#8E9BB5]">
              from {current.location}
            </span>
          </p>

          <p className="text-[12px] text-[#A6B4CE] mt-0.5">
            Purchased{" "}
            <span className="text-[#E8C78B] font-medium">
              {current.plan} ({current.price})
            </span>
          </p>

          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-[#6d7e9e] font-normal">
              {current.time} · Verified order
            </span>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 p-1 rounded-full text-[#6d7e9e] hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}