import { Navbar } from "@/components/layout/Navbar";
import CareersHeader from "@/components/sections/careers/CareersHeader";
import CareerBoard from "@/components/sections/careers/CareerBoard";
import WhyLearnWithUs from "@/components/sections/careers/WhyLearnWithUs";
import FAQ from "@/components/sections/careers/FAQ";

export const metadata = {
  title: "Learn Robotics | Arbotrix Education",
  description: "Learn robotics engineering, ROS2, and autonomous systems from industry professionals.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-accent-blue selection:text-white">
      <Navbar />

      {/* Hero — full bleed */}
      <CareersHeader />

      {/* Rest — constrained */}
      <div className="pb-24 space-y-24 max-w-7xl mx-auto px-6">
        <CareerBoard />
        <WhyLearnWithUs />
        
        <FAQ />
      </div>
    </main>
  );
}