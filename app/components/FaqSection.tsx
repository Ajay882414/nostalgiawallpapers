"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "How long does the 50% launch discount last?",
    answer:
      "The discount ends when the timer on this page hits zero. After that, the collection returns to its regular price and may never be this cheap again. Lock in your lifetime access at the launch price today.",
  },
  {
    question: "What do I get when I buy the collection?",
    answer:
      "You get access to a library of high-resolution wallpapers in impasto oil-painting style. The Essential Collection includes 100+ artworks in 4K plus phone versions. The Complete Collection includes 200+ wallpapers, ultrawide and iPad versions, lock-screen crops and future updates.",
  },
  {
    question: "How does the download work?",
    answer:
      "As soon as your payment is confirmed, you receive the download link by email. Access is lifetime — no subscription, no monthly fee.",
  },
  {
    question: "Will it work on my device?",
    answer:
      "Yes. The wallpapers are compatible with Mac, Windows, iPhone, Android, iPad and ultrawide monitors. Just save the image and set it as your wallpaper.",
  },
  {
    question: "What's the difference between Essential and Complete?",
    answer:
      "Essential has 100+ wallpapers in 4K plus phone versions. Complete doubles the library and adds Golden versions, ultrawide 21:9, iPad, lock-screen formats, a bonus guide and early access to new artworks.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Yes — and it's 100% risk-free. The Essential Collection comes with a 7-day guarantee and the Complete Collection with an extended 30-day guarantee. If you don't love it, we refund every cent, no questions asked.",
  },
  {
    question: "Can I use it on more than one device?",
    answer:
      "Of course. It's a one-time payment and you can use the wallpapers on all of your personal devices, with no limit.",
  },
];

export default function FaqSection() {
  // Default me first item (index 0) open rahega
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#060D27] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#111c3d]/60 select-none">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Top Tag */}
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#E8C78B] uppercase">
          QUESTIONS
        </span>

        {/* Main Headline */}
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center">
          Frequently asked{" "}
          <span className="font-serif italic font-normal text-[#E8C78B]">
            questions
          </span>
        </h2>

        {/* FAQ Outer Container Card */}
        <div className="mt-12 sm:mt-16 w-full rounded-2xl sm:rounded-3xl bg-[#081232]/50 border border-[#172554]/70 divide-y divide-[#172554]/70 overflow-hidden shadow-2xl backdrop-blur-sm">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="transition-colors duration-200">
                {/* Accordion Header / Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-5 sm:py-6 px-6 sm:px-8 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-[15px] sm:text-[16.5px] font-bold text-white tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Cross Indicator Icon */}
                  <span
                    className={`shrink-0 text-[#E8C78B] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </button>

                {/* Accordion Body with Smooth CSS Grid Animation */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-6 sm:px-8 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6 sm:pb-7"
                      : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#8E9BB5] font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}