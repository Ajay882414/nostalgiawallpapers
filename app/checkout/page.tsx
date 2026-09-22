import PricingHeader from "@/app/components/PricingHeader";
import PricingCards from "@/app/components/PricingCards";
import PricingFooterGuarantee from "@/app/components/PricingFooterGuarantee";

export default function CheckoutPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#060D27] text-white flex flex-col overflow-x-hidden">
      {/* ========================================================
          BACKGROUND IMAGE PLACEHOLDER:
          Aap apni oil painting image ko '/your-bg-oil-painting.jpg' 
          se replace kar sakte hain
         ======================================================== */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('/checkout-bg.png')", // <-- YAHAN APNI IMAGE KA PATH DAALEIN
        }}
      />
      {/* Dark Navy Overlay for perfect contrast */}
      <div className="fixed inset-0 z-0 bg-[#060D27]/85 backdrop-blur-[2px] pointer-events-none" />

      {/* Actual Content Area */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Component 1: Header + Timer Pill */}
        <PricingHeader />

        {/* Component 2: Dual Pricing Cards */}
        <div className="mt-12 w-full">
          <PricingCards />
        </div>

        {/* Component 3: Guarantee + Steps + Footer */}
        <PricingFooterGuarantee />
      </div>
    </main>
  );
}