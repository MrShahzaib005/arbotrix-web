import { Navbar } from "@/components/layout/Navbar";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceCards from "@/components/sections/ServiceCards";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ContactForm from "@/components/sections/contact/ContactForm";
import PreFooterCTA from "@/components/sections/home/PreFooterCTA"; 

export const metadata = {
  title: "Services | Arbotrix Robotics",
  description: "Custom robot development, consulting, and project-based automation solutions.",
};

export default function ServicesPage() {
  return (
    // FIX: Stripped the #0B0D14 dark void and forced the light theme blueprint
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white font-sans">
      <Navbar />

      <ServicesHero />

      <div className="pb-24 max-w-7xl mx-auto px-6 flex flex-col gap-24 mt-12">
        <ServiceCards />
        <ProcessTimeline />
        
        {/* FIX: Changed border-gray-800 to border-slate-200 to match the light theme */}
        <div className="pt-16 border-t border-slate-200">
          <ContactForm />
        </div>
      </div>

      <PreFooterCTA />
    </main>
  );
}