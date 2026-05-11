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
    <main className="min-h-screen bg-white text-black selection:bg-accent-blue selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24 space-y-32 max-w-7xl mx-auto px-8">
        <ServiceCards />
        <ProcessTimeline />
        <ServicesContactForm />
      </div>
    </main>
  );
}