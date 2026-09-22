import ArtworksGallery from "./components/ArtworksGallery";
import DifferenceSection from "./components/DifferenceSection";
import EverythingYouReceive from "./components/EverythingYouReceive";
import FaqSection from "./components/FaqSection";
import FooterCtaSection from "./components/FooterCtaSection";
import HeroSliders from "./components/HeroSliders";
import PricingCta from "./components/PricingCta";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060D27] text-white flex flex-col justify-between overflow-x-hidden">
      {/* Top Header Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1a2d6d]/20 blur-[130px] rounded-full" />

      {/* Hero Header Area */}
      <section className="relative pt-16 sm:pt-20 pb-6 px-4 text-center max-w-4xl mx-auto z-10">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#E8C78B] uppercase mb-4">
          THE GALLERY THAT FITS IN YOUR POCKET
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-[68px] font-bold tracking-tight text-white mb-5 leading-tight">
          Turn Your Screen Into a{" "}
          <span className="font-serif italic font-normal text-[#E8C78B]">
            Work of Art.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#9AA7C2] max-w-2xl mx-auto leading-relaxed font-normal">
          100+ 4K wallpapers in impasto oil painting – thick texture, deep color
          and gallery light – for MacBook, laptop and phone. Your screen becomes
          a real painting.
        </p>
      </section>

      {/* Two-Way Infinite Marquee Sliders */}
      <section className="relative w-full my-3">
        <HeroSliders />
      </section>

      {/* Matched CTA Section */}
      <section className="relative py-8 z-10">
        <PricingCta />
      </section>

      {/* Bottom Metrics / Social Proof */}
      <section className="w-full border-t border-[#131E42] bg-[#0a122c] py-10 mt-6">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 text-center gap-4">
          <div>
            <h3 className="text-[32px]  font-bold tracking-tight text-[#E8C78B]">
              2,300+
            </h3>
            <p className="text-[11px] sm:text-[13px] tracking-wider text-[#7988A8] uppercase mt-1 font-medium">
              Happy Customers
            </p>
          </div>
          <div>
            <h3 className="text-[32px]  font-bold tracking-tight text-[#E8C78B]">
              4.9/5
            </h3>
            <p className="text-[11px] sm:text-[13px] tracking-wider text-[#7988A8] uppercase mt-1 font-medium">
              Average Rating
            </p>
          </div>
          <div>
            <h3 className="text-[32px]  font-bold tracking-tight text-[#E8C78B]">
              50% OFF
            </h3>
            <p className="text-[11px] sm:text-[13px] tracking-wider text-[#7988A8] uppercase mt-1 font-medium">
              Ends Tonight
            </p>
          </div>
        </div>
      </section>


      {/* 5. Exact New Every Screen, A Painting Section */}
      <ArtworksGallery />


      <EverythingYouReceive/>


      <TestimonialsSection/>

      <DifferenceSection/>

      <FaqSection/>

      <FooterCtaSection/>
    </main>
  );
}