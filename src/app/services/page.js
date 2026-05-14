import { Navbar } from "@/components/layout/Navbar";
import ServiceCards from "@/components/sections/ServiceCards";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ServicesContactForm from "@/components/sections/ServicesContactForm";

export const metadata = {
  title: "Services | Arbotrix Robotics",
  description: "Custom robot development, consulting, and project-based automation solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-accent-blue selection:text-white">
      <Navbar />

      {/* Hero — full bleed, no side padding, no max-width */}
      <ServiceCards />

      {/* Rest of page — constrained width, dark bg continues */}
      <div className="pb-24 space-y-32 max-w-7xl mx-auto px-8">
        <ProcessTimeline />
        <ServicesContactForm />
      </div>
    </main>
  );
}