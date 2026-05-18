import { Navbar } from "@/components/layout/Navbar";
import ServicesHero from "@/components/sections/services/ServicesHero";

// Your original components restored:
import ServiceCards from "@/components/sections/ServiceCards";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ServicesContactForm from "@/components/sections/ServicesContactForm";

// You can keep the PreFooterCTA or remove it if ServicesContactForm does the job
import PreFooterCTA from "@/components/sections/home/PreFooterCTA"; 

export const metadata = {
  title: "Services | Arbotrix Robotics",
  description: "Custom robot development, consulting, and project-based automation solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0D14] selection:bg-accent-blue selection:text-white">
      <Navbar />

      {/* 1. The Hook (The new interactive hero we just built) */}
      <ServicesHero />

      {/* 2. The Core Content (Your restored components) */}
      <div className="pb-24 max-w-7xl mx-auto px-6 flex flex-col gap-24 mt-12">
        <ServiceCards />
        <ProcessTimeline />
        <ServicesContactForm />
      </div>

      {/* 3. The Exit Intent (Optional, can remove if Contact Form is enough) */}
      <PreFooterCTA />
      
    </main>
  );
}